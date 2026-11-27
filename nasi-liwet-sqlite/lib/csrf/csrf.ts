import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

export function getCsrfCookieConfig() {
  const isHttps = process.env.APP_URL?.startsWith("https://") ?? false;
  return {
    name: isHttps ? "__Host-csrf" : "csrf",
    secure: isHttps,
  };
}

export function validateCsrf(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const appUrl = process.env.APP_URL;

  if (!origin || !appUrl || origin !== new URL(appUrl).origin) {
    return false;
  }

  const salt = process.env.PRIVATE_KEY;

  if (!salt) {
    return false;
  }

  const { name: cookieName } = getCsrfCookieConfig();
  const cookieToken = request.cookies.get(cookieName)?.value;
  const headerToken = request.headers.get("x-csrf-token");

  if (!cookieToken || !headerToken) {
    return false;
  }

  const hmacToken = createHmac("sha256", salt)
    .update(headerToken)
    .digest("hex");

  const a = Buffer.from(cookieToken);
  const b = Buffer.from(hmacToken);

  if (a.length !== b.length) return false;

  if (hmacToken !== cookieToken) return false;

  return timingSafeEqual(a, b);
}
