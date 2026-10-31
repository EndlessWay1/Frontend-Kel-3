import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth/session";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        Instruction: {
          orderBy: { instructionNo: "asc" },
        },
        Ingredients: {
          include: {
            IngredientsItems: true,
          },
        },
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
      image: post.image || "/recipes/pictures/Foto 1.jpg",
      time: `${post.duration} menit`,
      servings: `${post.serving} porsi`,
      source: post.source || "Nasi Liwet Nusantara",
      description: post.description,
      ingredients: post.Ingredients.map((g) => ({
        group: g.ingredientName,
        items: g.IngredientsItems.map((it) => it.itemsName),
      })),
      instructions: post.Instruction.map((ins) => ins.instruction),
    }));

    return NextResponse.json(recipes);
  } catch (err) {
    console.error("Gagal mengambil resep:", err);
    return NextResponse.json(
      { error: "Gagal memuat resep dari database." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { error: "Silakan login terlebih dahulu." },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { error: "Request tidak valid." },
      { status: 400 }
    );
  }

  const {
    title,
    category,
    method,
    time,
    servings,
    image,
    source,
    description,
    ingredients,
    instructions,
  } = body;

  if (!title || !description || !ingredients || !instructions) {
    return NextResponse.json(
      { error: "Mohon isi semua data resep yang diperlukan." },
      { status: 400 }
    );
  }

  const durationMatch = time ? String(time).match(/\d+/) : null;
  const duration = durationMatch ? parseInt(durationMatch[0]) : 40;

  const servingMatch = servings ? String(servings).match(/\d+/) : null;
  const serving = servingMatch ? parseInt(servingMatch[0]) : 4;

  const categoryEnum = category === "solo" ? "SOLO" : "SUNDA";
  const methodEnum = method === "tradisional" ? "TRADISIONAL" : "RICECOOKER";

  try {
    const newPost = await prisma.post.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        source: source ? source.trim() : session.user.name,
        userId: session.user.id,
        duration,
        serving,
        category: categoryEnum,
        method: methodEnum,
        image: image ? image.trim() : "/recipes/pictures/Foto 1.jpg",
        Instruction: {
          create: instructions.map((step: string, idx: number) => ({
            instructionNo: idx + 1,
            instruction: String(step).trim(),
          })),
        },
      },
    });

    for (const g of ingredients) {
      if (g.group && g.items && g.items.length) {
        await prisma.ingredients.create({
          data: {
            ingredientName: String(g.group).trim(),
            postId: newPost.id,
            IngredientsItems: {
              create: g.items.map((it: string) => ({
                itemsName: String(it).trim(),
              })),
            },
          },
        });
      }
    }

    return NextResponse.json({ id: newPost.id }, { status: 201 });
  } catch (err) {
    console.error("Gagal menyimpan resep:", err);
    return NextResponse.json(
      { error: "Gagal menyimpan resep ke database." },
      { status: 500 }
    );
  }
}
