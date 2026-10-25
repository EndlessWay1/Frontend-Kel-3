import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    request.headers.get("x-real-ip") ?? forwardedFor?.split(",")[0]?.trim();

  if (!ip) {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 400 },
    );
  }
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 },
    );
  }

  const body = await request.json().catch(() => null);
  const { id, name, role } = body;
  if (!id || !name) {
    return NextResponse.json(
      { error: "Invalid data, please try again." },
      { status: 400 },
    );
  }

  if (name.length <= 1) {
    return NextResponse.json(
      { error: "Name must be greater than 1." },
      { status: 400 },
    );
  }

  if (!(session.user.id === id || session.user.role === "ADMIN")) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 },
    );
  }

  if (role && !["ADMIN", "USER", "MODERATOR"].includes(role)) {
    return NextResponse.json(
      { error: "Invalid data, please try again." },
      { status: 400 },
    );
  }

  if (role && session.user.role === "USER") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dataField: Record<string, string> = { name };
  if (role) {
    dataField.role = role;
  }

  await prisma.user.update({
    where: {
      id,
    },
    data: dataField,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
