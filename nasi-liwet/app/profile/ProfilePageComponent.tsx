"use client";

import { useUser } from "@/app/hook/useUser";
import { useCsrf } from "../context/csrf/CsrfContext";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import "./profile.css";

function prettyDate(time: Date | string) {
  const date = new Date(time);

  if (Number.isNaN(date.getTime())) return "Unknown";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function ProfilePageComponent() {
  const { user } = useUser();
  const { csrfToken } = useCsrf();

  const [name, setName] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName(user?.name ?? "");
  }, [user]);

  const isDirty = name.trim() !== (user?.name ?? "");

  const submitEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGlobalError("");
    setErrorName("");
    setSuccess("");

    if (!user || saving) return;

    const trimmedName = name.trim();

    if (trimmedName === (user.name ?? "")) {
      setErrorName("Please enter a different name.");
      return;
    }

    if (trimmedName.length < 1) {
      setErrorName("Name must contain at least 1 characters.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/editProfile", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ id: user.id, name: trimmedName }),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(result.error || "Unable to update your profile.");
        return;
      }

      setName(trimmedName);
      setSuccess("Your profile has been updated.");

      // Refresh user context from the server.
      window.location.reload();
    } catch {
      setGlobalError("A network error occurred. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <main className='profile-page'>
        <section className='profile-card empty-profile'>
          <h2>Profile unavailable</h2>
          <p>Please sign in to view your profile.</p>
          <Link href='/signin' className='profile-action'>
            Sign in
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className='profile-page'>
      <section id='profile' className='profile-card'>
        {/* Profile Header */}
        <header className='profile-header'>
          <div className='profile-heading'>
            <h1>{user.name || "Unnamed User"}</h1>
            <p>{user.email}</p>

            <span className='profile-role'>{user.role}</span>
          </div>
        </header>

        {/* Account Information */}
        <section className='profile-section'>
          <div className='section-heading'>
            <div>
              <h2>Personal Information</h2>
              <p>Manage your personal details.</p>
            </div>
          </div>

          <form onSubmit={submitEdit}>
            <div className='profile-field'>
              <label htmlFor='user-name-form'>Display Name</label>

              <input
                id='user-name-form'
                name='name'
                type='text'
                value={name}
                maxLength={50}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrorName("");
                  setGlobalError("");
                  setSuccess("");
                }}
                disabled={saving}
              />

              {errorName && <p className='profile-error'>{errorName}</p>}
            </div>

            <div className='profile-field'>
              <label>Email Address</label>
              <div className='profile-readonly'>{user.email}</div>
            </div>

            <div className='profile-field'>
              <label>Member Since</label>
              <div className='profile-readonly'>
                {prettyDate(user.createdAt)}
              </div>
            </div>

            {globalError && (
              <p className='profile-error' role='alert'>
                {globalError}
              </p>
            )}

            {success && (
              <p className='profile-success' role='status'>
                {success}
              </p>
            )}

            {isDirty && (
              <div className='profile-actions'>
                <button
                  type='button'
                  className='profile-btn secondary'
                  disabled={saving}
                  onClick={() => {
                    setName(user.name ?? "");
                    setErrorName("");
                    setGlobalError("");
                    setSuccess("");
                  }}
                >
                  Cancel
                </button>

                <button
                  type='submit'
                  className='profile-btn primary'
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </form>
        </section>

        {/* Activity Navigation
        <section className='profile-section'>
          <div className='section-heading'>
            <div>
              <h2>Your Activity</h2>
              <p>Explore your contributions and saved content.</p>
            </div>
          </div>

          <div className='profile-navigation'>
            <Link href='/profile/posts' className='profile-nav-card'>
              <div>
                <h3>My Posts</h3>
                <p>Manage your published posts and drafts.</p>
              </div>
            </Link>

            <Link href='/profile/favorites' className='profile-nav-card'>
              <div>
                <h3>Favorites</h3>
                <p>Revisit content you have saved.</p>
              </div>
            </Link>

          </div>
        </section> */}
      </section>
    </main>
  );
}

export default ProfilePageComponent;
