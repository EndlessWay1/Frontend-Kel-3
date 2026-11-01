import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth/session";

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
const strList = (v: unknown, max: number, limit: number) =>
  Array.isArray(v) ? v.map((x) => str(x, max)).filter(Boolean).slice(0, limit) : [];
// "45 menit" -> 45, "3-4 porsi" -> 3. Returns null when there is no usable number.
const num = (v: unknown) => {
  const n = parseInt(String(v ?? "").match(/\d+/)?.[0] ?? "", 10);
  return n > 0 && n <= 9999 ? n : null;
};

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

// Trust the file's first bytes, not the type the browser claims.
function sniffImageType(b: Uint8Array): string | null {
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return "image/png";
  if (b.length > 11 &&
      String.fromCharCode(...b.slice(0, 4)) === "RIFF" &&
      String.fromCharCode(...b.slice(8, 12)) === "WEBP") return "image/webp";
  return null;
}

// The form sends multipart: a JSON string in "data" plus an optional "image" file.
function parseData(form: FormData | null): Record<string, unknown> | null {
  try {
    const v = JSON.parse(String(form?.get("data") ?? ""));
    return v && typeof v === "object" && !Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        Instruction: { orderBy: { instructionNo: "asc" } },
        Ingredients: { include: { IngredientsItems: true } },
        Tags: true,
        PostImage: { select: { id: true }, take: 1 },
      },
      orderBy: { createdAt: "desc" },
    });

    const recipes = posts.map((post) => ({
      id: post.id,
      title: post.title,
      category: post.category === "SUNDA" ? "sunda" : "solo",
      method: post.method === "RICECOOKER" ? "rice-cooker" : "tradisional",
      categoryLabel: post.category === "SUNDA" ? "Khas Sunda" : "Khas Solo",
      methodLabel: post.method === "RICECOOKER" ? "Rice Cooker" : "Tradisional",
      image: post.PostImage.length
        ? `/api/recipes/${post.id}/image`
        : post.image || "/recipes/pictures/Foto 1.jpg",
      time: `${post.duration} menit`,
      servings: `${post.serving} porsi`,
      source: post.source || "Nasi Liwet Nusantara",
      description: post.description,
      generalIngredients: post.Tags.map((t) => t.tagName),
      ingredients: post.Ingredients.map((g) => ({
        group: g.ingredientName,
        items: g.IngredientsItems.map((it) => it.itemsName),
      })),
      instructions: post.Instruction.map((ins) => ins.instruction),
    }));

    return NextResponse.json(recipes);
  } catch (err) {
    console.error("Gagal mengambil resep:", err);
    return NextResponse.json({ error: "Gagal memuat resep dari database." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // userId always comes from the session, never from the request body
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Silakan login terlebih dahulu." }, { status: 401 });
  }

  const form = await req.formData().catch(() => null);
  const b = parseData(form);
  if (!form || !b) return NextResponse.json({ error: "Request tidak valid." }, { status: 400 });

  const title = str(b.title, 80);
  const description = str(b.description, 300);
  const source = str(b.source, 80) || session.user.name;
  const file = form.get("image");
  const hasFile = file instanceof File && file.size > 0;
  if (hasFile && file.size > MAX_IMAGE_BYTES) {
    return NextResponse.json({ error: "Gambar maksimal 2 MB." }, { status: 400 });
  }
  const data = hasFile ? new Uint8Array(await file.arrayBuffer()) : null;
  const imageType = data ? sniffImageType(data) : null;
  if (data && !imageType) {
    return NextResponse.json({ error: "Gambar harus berupa JPG, PNG, atau WebP." }, { status: 400 });
  }
  const duration = num(b.time);
  const serving = num(b.servings);
  const tags = strList(b.generalIngredients, 60, 12);
  const steps = strList(b.instructions, 500, 40);
  const groups = Array.isArray(b.ingredients)
    ? b.ingredients
        .map((g: { group?: unknown; items?: unknown }) => ({
          group: str(g?.group, 80),
          items: strList(g?.items, 200, 40),
        }))
        .filter((g) => g.group && g.items.length)
        .slice(0, 20)
    : [];

  if (!title || description.length < 10 || !duration || !serving ||
      !tags.length || !groups.length || !steps.length) {
    return NextResponse.json({ error: "Mohon isi semua data resep yang diperlukan." }, { status: 400 });
  }

  try {
    // one nested write: either the whole recipe is saved or nothing is
    const post = await prisma.post.create({
      data: {
        title,
        description,
        source,
        userId: session.user.id,
        duration,
        serving,
        category: b.category === "solo" ? "SOLO" : "SUNDA",
        method: b.method === "tradisional" ? "TRADISIONAL" : "RICECOOKER",
        image: null,
        ...(data && imageType && { PostImage: { create: { imageData: data, imageType } } }),
        Instruction: {
          create: steps.map((instruction, i) => ({ instructionNo: i + 1, instruction })),
        },
        Tags: { create: tags.map((tagName) => ({ tagName })) },
        Ingredients: {
          create: groups.map((g) => ({
            ingredientName: g.group,
            IngredientsItems: { create: g.items.map((itemsName) => ({ itemsName })) },
          })),
        },
      },
      select: { id: true },
    });
    return NextResponse.json({ id: post.id }, { status: 201 });
  } catch (err) {
    console.error("Gagal menyimpan resep:", err);
    return NextResponse.json({ error: "Gagal menyimpan resep ke database." }, { status: 500 });
  }
}