import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const recipes = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      method: true,
      duration: true,
      serving: true,
      source: true,
      description: true,
    },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(recipes);
}