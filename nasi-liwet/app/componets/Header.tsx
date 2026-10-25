"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/better-auth/client";
import { linkNav } from "../constant";

type linkAttrType = {
  onClick?: () => void;
  href: string;
  text: string;
};

function Header() {
  const { data: session, isPending, error } = authClient.useSession();

  const logout = async function () {
    await authClient.signOut();
  };
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-md'>
        <div id='head-title'>
          <Image src='/logo.png' alt='coffee' width={38} height={38} />
          <Link href='/' style={{ textDecoration: "none" }}>
            Nasi Liwet
          </Link>
        </div>

        {!isPending && !error && session && (
          <div id='user-title'>{session.user.name}</div>
        )}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            {linkNav.map(({ id, target, name }) => {
              const attribute: linkAttrType = {
                href: target,
                text: name,
              };

              if (id === 3 && session) {
                attribute.onClick = function () {
                  logout();
                  window.location.reload();
                };
                attribute.text = "Sign out";
                attribute.href = "#";
              }

              if (id === 6 && (!session || session.user.role !== "admin")) {
                return undefined;
              }

              return (
                <li className='nav-item' key={id}>
                  <a {...attribute}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
