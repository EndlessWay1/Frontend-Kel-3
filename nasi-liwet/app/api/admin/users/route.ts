import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const userSelect = { id: true, name: true, email: true, role: true } as const;

export async function GET() {
  const users = await prisma.user.findMany({
    select: userSelect,
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name, email, role, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, role, password: await bcrypt.hash(password, 10) },
      select: userSelect,
    });
    return NextResponse.json(user, { status: 201 });
  } catch (e) {
    if ((e as { code?: string }).code === "P2002") {
      return NextResponse.json({ error: "Email already exists." }, { status: 409 });
    }
    throw e;
  }
}