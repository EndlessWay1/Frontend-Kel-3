import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import BootstrapClient from "./componets/BootstrapClient";

import "./globals.css";
import Header from "./componets/header/Header";
import { CsrfProvider } from "./context/csrf/CsrfProvider";

export const metadata: Metadata = {
  title: "Nasi Liwet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='logo.png' type='image/png' />
      </head>
      <body>
        <BootstrapClient />
        <CsrfProvider>
          <Header />
          {children}
        </CsrfProvider>
      </body>
    </html>
  );
}
