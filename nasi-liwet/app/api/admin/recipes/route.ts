import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth/session";

async function requireAdmin() {
  const session = await getSession();
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
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