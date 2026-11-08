import { createHmac, randomInt, timingSafeEqual } from "node:crypto";
import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export function createCode() {
  const token = randomInt(0, 1000000).toString().padStart(6, "0");

  const salt = process.env.PRIVATE_KEY;

  if (!salt) {
    throw new Error("Missing Environment Variables");
  }

  const hmacToken = createHmac("sha256", salt).update(token).digest("hex");

  return { token, hmacToken };
}

function validateCode(pin: string, hashToken: string) {
  const salt = process.env.PRIVATE_KEY;

  if (!salt) {
    throw new Error("Missing Environment Variables");
  }

  const hmacToken = createHmac("sha256", salt).update(pin).digest("hex");

  const a = Buffer.from(hashToken);
  const b = Buffer.from(hmacToken);

  if (a.length !== b.length) return false;

  if (hmacToken !== hashToken) return false;

  return timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    request.headers.get("x-real-ip") ?? forwardedFor?.split(",")[0]?.trim();

  if (!ip) {
    return Response.json(
      { error: "Unable to process request." },
      { status: 400 },
    );
  }

  // Parse and validate untrusted input
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, validate } = body;

  if (!email) {
    return Response.json(
      { error: "Invalid Login Credentials" },
      { status: 401 },
    );
  }

  // sends code
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json(
      { error: "Invalid Login Credentials" },
      { status: 401 },
    );
  }

  if (user.emailVerified) {
    return Response.json({ error: "Email already verified." }, { status: 400 });
  }

  if (!validate) {
    const { token, hmacToken } = createCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.emailVerification.upsert({
      where: {
        userId: user.id,
      },
      update: {
        codeHash: hmacToken,
        expiresAt,
      },
      create: {
        userId: user.id,
        codeHash: hmacToken,
        expiresAt,
      },
    });

    await sendEmail(email, token);

    return Response.json(
      { success: "Successfully sends an email" },
      { status: 200 },
    );
  } else {
    const ver = await prisma.emailVerification.findFirst({
      where: {
        userId: user.id,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    const hashToken = ver?.codeHash;
    if (hashToken && validateCode(validate, hashToken)) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });

      await prisma.emailVerification.delete({
        where: { userId: user.id },
      });

      return Response.json({ success: true }, { status: 200 });
    }
    return Response.json(
      { error: "Ivalid code received, please try again later." },
      { status: 401 },
    );
  }
}

export async function sendEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Nasi Liwet" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Nasi Liwet Verification Code",

    text: `Your verification code is ${token}. It expires in 10 minutes.`,

    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body style="
        margin: 0;
        padding: 30px 15px;
        background-color: #f4f5f7;
        font-family: Arial, Helvetica, sans-serif;
      ">

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">

              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  max-width: 480px;
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                ">
                <tr>
                  <td align="center" style="padding: 32px 20px 15px;">
                    <h1 style="
                      margin: 0;
                      color: #2c3e50;
                      font-size: 26px;
                    ">
                      Nasi Liwet
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 20px 30px 35px;">

                    <h2 style="
                      color: #333333;
                      font-size: 21px;
                      margin-bottom: 15px;
                    ">
                      Verify Your Email Address
                    </h2>

                    <p style="
                      color: #666666;
                      font-size: 14px;
                      line-height: 1.6;
                    ">
                      Thank you for joining Nasi Liwet!
                      Please use the verification code below
                      to complete your registration.
                    </p>

                    <table cellpadding="0" cellspacing="0"
                      style="
                        margin: 25px auto;
                        background-color: #f4f5f7;
                        border-radius: 8px;
                      ">
                      <tr>
                        <td align="center" style="padding: 18px 30px;">
                          <span style="
                            color: #2c3e50;
                            font-size: 32px;
                            font-weight: bold;
                            letter-spacing: 8px;
                          ">
                            ${token}
                          </span>
                        </td>
                      </tr>
                    </table>

                    <p style="
                      color: #888888;
                      font-size: 13px;
                      line-height: 1.5;
                    ">
                      This code will expire in
                      <strong>5 minutes</strong>.
                    </p>

                    <p style="
                      color: #888888;
                      font-size: 13px;
                      line-height: 1.5;
                    ">
                      If you did not request this verification,
                      you can safely ignore this email.
                    </p>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="
                    padding: 20px;
                    background-color: #f9fafb;
                    border-top: 1px solid #eeeeee;
                  ">
                    <p style="
                      margin: 0;
                      color: #999999;
                      font-size: 12px;
                    ">
                      &copy; ${new Date().getFullYear()} Nasi Liwet.
                      All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}
