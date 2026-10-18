import { auth } from "@/lib/better-auth/auth";
import { NextResponse } from "next/server";

// Validate the body

function validateSignIn(body: Record<string, string>) {
  if (!body || !body.email || !body.password) {
    return false;
  }
  const email = body.email;

  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  ) {
    return false;
  }

  const password = body.password;
  if (password.length <= 8) {
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (validateSignIn(body)) {
    return NextResponse.json(
      { error: "Incorrect email or password, try again later." },
      { status: 400 },
    );
  }

  const email = body.email;
  const password = body.password;

  const response = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
    asResponse: true, // returns a response object instead of data
  });
  console.log(response);
  return response;
}
