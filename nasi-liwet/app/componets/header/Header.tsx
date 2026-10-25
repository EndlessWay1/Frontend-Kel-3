"use client";

import Link from "next/link";
import Image from "next/image";
import { linkNav } from "../../constant";
import { useRouter } from "next/navigation";
import { useCsrf } from "../../context/csrf/CsrfContext";
import { useUser } from "../../hook/useUser";
import "./header.css";

type linkAttrType = {
  onClick?: () => void;
  href: string;
  text: string;
};

function Header() {
  const router = useRouter();

  const { user } = useUser();

  const { csrfToken } = useCsrf();

  const signOut = async () => {
    try {
      const response = await fetch("/api/signout", {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          "X-CSRF-Token": csrfToken,
        },
      });

      if (!response.ok) {
        console.error("Failed to sign out");
        return;
      }

      window.location.reload();
    } catch (error) {
      console.error("Sign-out request failed:", error);
    }
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

        {user && (
          <div id='user-title'>
            <h2>
              Hello <span style={{ fontWeight: 700 }}>{user.name}</span>
            </h2>
          </div>
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

              if (id === 3 && user) {
                attribute.onClick = function () {
                  signOut();
                  window.location.reload();
                };
                attribute.text = "Sign out";
                attribute.href = "#";
              }

              if (id === 6 && (!user || user.role !== "ADMIN")) {
                return undefined;
              }

              if (id === 4 && !user) {
                return undefined;
              }

              return (
                <li className='nav-item' key={id}>
                  <Link {...attribute}>{attribute.text}</Link>
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
