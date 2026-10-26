import { NextResponse } from "next/server";
import { pool } from "@/lib/sql-database/database";
import { createBetterAuthServerClient } from "@/lib/better-auth/server-client";

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
const strList = (v: unknown, max: number, limit: number) =>
  Array.isArray(v) ? v.map((x) => str(x, max)).filter(Boolean).slice(0, limit) : [];

export async function POST(req: Request) {
  // user_id always comes from the session, never from the request body
  const session = await createBetterAuthServerClient();
  if (!session) return NextResponse.json({ error: "Not logged in." }, { status: 401 });

  const b = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!b) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const category = b.category === "sunda" || b.category === "solo" ? b.category : null;
  const method = b.method === "rice-cooker" || b.method === "tradisional" ? b.method : null;
  const title = str(b.title, 80);
  const cookTime = str(b.time, 40);
  const servings = str(b.servings, 40);
  const description = str(b.description, 300);
  const image = str(b.image, 500);
  const source = str(b.source, 80) || session.user.name;
  const general = strList(b.generalIngredients, 60, 12);
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

  if (!category || !method || !title || !cookTime || !servings || description.length < 10 ||
      !general.length || !groups.length || !steps.length)
    return NextResponse.json({ error: "Please fill in every required field." }, { status: 400 });
  if (image && !/^(https?:\/\/|\/)/.test(image))
    return NextResponse.json({ error: "Image must be a link starting with http(s)://" }, { status: 400 });

  try {
    const { rows } = await pool.query(
      `INSERT INTO recipes (user_id, title, category, method, image, cook_time, servings,
                            source, description, general_ingredients, ingredients, instructions)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id`,
      [session.user.id, title, category, method, image, cookTime, servings, source, description,
       JSON.stringify(general), JSON.stringify(groups), JSON.stringify(steps)],
    );
    return NextResponse.json({ id: rows[0].id }, { status: 201 });
  } catch (err) {
    console.error("create recipe failed", err);
    return NextResponse.json({ error: "Could not save the recipe." }, { status: 500 });
  }
}

const LABELS = {
  category: { sunda: "Khas Sunda", solo: "Khas Solo" },
  method: { "rice-cooker": "Rice Cooker", tradisional: "Tradisional" },
} as const;

// Public: anyone can browse recipes. Each item is shaped like the Recipe interface in recipesData.ts.
export async function GET() {
  try {
    const { rows } = await pool.query(
      `SELECT id, title, category, method, image, cook_time, servings, source, description,
              general_ingredients, ingredients, instructions
       FROM recipes ORDER BY created_at DESC`,
    );
    return NextResponse.json(
      rows.map((r) => ({
        id: r.id,
        title: r.title,
        category: r.category,
        method: r.method,
        categoryLabel: LABELS.category[r.category as keyof typeof LABELS.category],
        methodLabel: LABELS.method[r.method as keyof typeof LABELS.method],
        image: r.image,
        time: r.cook_time,
        servings: r.servings,
        source: r.source,
        description: r.description,
        generalIngredients: r.general_ingredients,
        ingredients: r.ingredients,
        instructions: r.instructions,
      })),
    );
  } catch (err) {
    console.error("list recipes failed", err);
    return NextResponse.json({ error: "Could not load recipes." }, { status: 500 });
  }
}
