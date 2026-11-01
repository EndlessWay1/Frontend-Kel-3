import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  const { id } = await params;
  const { title, category, method, duration, serving, source, description } =
    await req.json();

  const recipe = await prisma.post.update({
    where: { id },
    data: { title, category, method, duration, serving, source, description },
  });
  return NextResponse.json(recipe);
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params;
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}