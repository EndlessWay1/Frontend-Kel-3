import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasi Liwet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='logo.png' type='image/png' />
      </head>
      <body>{children}</body>
    </html>
  );
}
