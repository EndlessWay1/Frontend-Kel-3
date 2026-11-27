import { createHmac, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { getCsrfCookieConfig } from "@/lib/csrf/csrf";

export async function GET() {
  const token = randomBytes(32).toString("hex");

  const salt = process.env.PRIVATE_KEY;

  if (!salt) {
    return NextResponse.json(
      { error: "An error has occured." },
      { status: 501 },
    );
  }

  const hmacToken = createHmac("sha256", salt).update(token).digest("hex");
  const { name, secure } = getCsrfCookieConfig();

  const response = NextResponse.json(
    { csrfToken: token },
    { headers: { "Cache-Control": "no-store" } },
  );

  response.cookies.set(name, hmacToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 3600,
  });

  return response;
}
