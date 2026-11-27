"use client";

import Link from "next/link";
import Image from "next/image";
import { linkNav } from "../../constant";
import { useCsrf } from "../../context/csrf/CsrfContext";
import { useUser } from "../../hook/useUser";
import "./header.css";

function Header() {
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

      window.location.replace("/");
    } catch (error) {
      console.error("Sign-out request failed:", error);
    }
  };
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-md'>
        <div id='head-title'>
          <Image src='/logo.png' alt='nasi liwet' width={38} height={38} />
          <Link href='/'>NASI LIWET</Link>
        </div>

        {user && (
          <div id='user-title'>
            <h2>
              Hello <span>{user.name}</span>
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
              if (id === 6 && (!user || user.role !== "ADMIN")) {
                return null;
              }

              if (id === 4 && !user) {
                return null;
              }

              if (id === 3 && user) {
                return (
                  <li className='nav-item' key={id}>
                    <button
                      className='nav-signout'
                      type='button'
                      onClick={signOut}
                    >
                      Sign out
                    </button>
                  </li>
                );
              }

              return (
                <li className='nav-item' key={id}>
                  <Link href={target}>{name}</Link>
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
