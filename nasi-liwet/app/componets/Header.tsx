"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/better-auth/client";

function Header() {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <header id='header'>
      <nav className='navbar navbar-expand-md'>
        <div id='head-title'>
          <Image src='/logo.png' alt='coffee' width={38} height={38} />
          <Link href='/'>Nasi Liwet</Link>
        </div>

        {!isPending && !error && session && (
          <div id='user-title'>{session.user.name}</div>
        )}

        <div className='collapse navbar-collapse' id='navbarSupportedContent' />
      </nav>
    </header>
  );
}

export default Header;
