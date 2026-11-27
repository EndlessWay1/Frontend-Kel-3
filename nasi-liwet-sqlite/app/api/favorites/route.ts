import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getSession();

  if (!session) {
    return Response.json({ error: "Please Login!" }, { status: 403 });
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { postId, reject } = body;

  if (!postId) {
    return Response.json({ error: "Invalid request" }, { status: 403 });
  }

  if (!reject) {
    await prisma.favorites.upsert({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId,
        },
      },
      update: {},
      create: {
        userId: session.user.id,
        postId,
      },
    });
  } else {
    await prisma.favorites.delete({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId,
        },
      },
    });
  }

  return Response.json(
    { success: "Successfully added to favorites" },
    { status: 200 },
  );
}

export async function GET() {
  const session = await getSession();

  if (!session) {
    return Response.json({ error: "Please Login!" }, { status: 403 });
  }

  const favorites = await prisma.favorites.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      post: {
        include: {
          Instruction: { orderBy: { instructionNo: "asc" } },
          Ingredients: { include: { IngredientsItems: true } },
          Tags: true,
          PostImage: { select: { id: true }, take: 1 },
        },
      },
    },
    orderBy: { post: { createdAt: "desc" } },
  });

  return Response.json({
    posts: favorites.map(({ post }) => ({
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
    })),
  });
}
