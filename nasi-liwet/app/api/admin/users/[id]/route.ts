import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Ctx = { params: Promise<{ id: string }> };
const userSelect = { id: true, name: true, email: true, role: true } as const;

export async function PATCH(req: Request, { params }: Ctx) {
  const { id } = await params;
  const { name, email, role } = await req.json();

  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email, role },
      select: userSelect,
    });
    return NextResponse.json(user);
  } catch (e) {
    if ((e as { code?: string }).code === "P2002") {
      return NextResponse.json({ error: "Email already exists." }, { status: 409 });
    }
    throw e;
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params;

  try {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    // Post.user uses onDelete: NoAction, so users who own recipes can't be deleted
    if ((e as { code?: string }).code === "P2003") {
      return NextResponse.json(
        { error: "This user still has recipes. Delete or reassign them first." },
        { status: 409 }
      );
    }
    throw e;
  }
}