"use client";

import { ComponentProps, useRef, useState } from "react";
import "./login.css";
import { useCsrf } from "../context/csrf/CsrfContext";
import Image from "next/image";
import EmailVerification from "./EmailVerification";

type Mode = "signup" | "signin";

function LoginSignUpCotent() {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [valError, setValError] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const [verificationSent, setVerificationSent] = useState(false);
  const formRef = useRef(null);
  const { csrfToken } = useCsrf();

  const clearError = () => {
    setValError({});
    setGlobalError("");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmailtoMe = async (
    sendEmail: boolean,
    email: string,
    pin?: string,
    first?: boolean,
  ) => {
    const response = await fetch("/api/email", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify(sendEmail ? { email } : { email, validate: pin }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Something went wrong.");
    }

    if (result.success && !first) {
      const res = await fetch("/api/signin", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ email, password }),
      });

      const ress = await res.json();
      if (!res.ok) {
        throw new Error(ress.error || "Something went wrong.");
      }

      window.location.replace("/");
    }
  };

  const validate = (signup: boolean) => {
    const errors: Record<string, string> = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (signup && !name.trim()) {
      errors.name = "Name is required.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (signup && password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    if (signup && password !== confirmPassword) {
      errors.confirmpassword = "Passwords do not match.";
    }

    setValError(errors);
    return Object.keys(errors).length === 0;
  };

  const submit = async (
    e: Parameters<NonNullable<ComponentProps<"form">["onSubmit"]>>[0],
    signup: boolean,
  ) => {
    e.preventDefault();
    clearError();

    if (!validate(signup)) return;

    setLoading(true);

    try {
      const response = await fetch(signup ? "/api/signup" : "/api/signin", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(
          signup
            ? { email, password, confirm: confirmPassword, name }
            : { email, password },
        ),
      });

      const result = await response.json();

      if (result.code === "EMAIL_NOT_VERIFIED") {
        setVerificationSent(true);
        await sendEmailtoMe(true, email, undefined, true);
        return;
      }

      if (!response.ok) {
        setGlobalError(result.error || "Something went wrong.");
        return;
      }

      if (!signup) {
        window.location.replace("/");
        return;
      }

      await sendEmailtoMe(true, email, undefined, true);
      setVerificationSent(true);
    } catch {
      setGlobalError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isSignup = mode === "signup";

  if (verificationSent) {
    return (
      <EmailVerification
        email={email}
        onVerify={async (pin: string) => sendEmailtoMe(false, email, pin)}
        onResend={async () => sendEmailtoMe(true, email)}
        onBack={() => setVerificationSent(false)}
      />
    );
  }
  return (
    <main className='login-container'>
      <section className='login-page'>
        <div className='login-brand'>
          <div className='login-brand-icon'>
            <Image src='/logo.png' alt='nasi liwet' width={30} height={30} />
          </div>
          <span>NASI LIWET</span>
        </div>

        <div className='login-heading'>
          <h1>{isSignup ? "Create an account" : "Welcome back"}</h1>
          <p>
            {isSignup
              ? "Join us and get started today."
              : "Enter your details to access your account."}
          </p>
        </div>

        <form
          onSubmit={(e) => submit(e, isSignup)}
          ref={formRef}
          className='login-form'
        >
          {isSignup && (
            <div className='input-container'>
              <label htmlFor='name'>Full name</label>
              <input
                id='name'
                type='text'
                name='name'
                autoComplete='name'
                placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-invalid={!!valError.name}
              />
              {valError.name && (
                <span className='user-error'>{valError.name}</span>
              )}
            </div>
          )}

          <div className='input-container'>
            <label htmlFor='email'>Email address</label>
            <input
              id='email'
              type='email'
              name='email'
              autoComplete='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={!!valError.email}
            />
            {valError.email && (
              <span className='user-error'>{valError.email}</span>
            )}
          </div>

          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              autoComplete={isSignup ? "new-password" : "current-password"}
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-invalid={!!valError.password}
            />
            {valError.password && (
              <span className='user-error'>{valError.password}</span>
            )}
          </div>

          {isSignup && (
            <div className='input-container'>
              <label htmlFor='confirmPassword'>Confirm password</label>
              <input
                id='confirmPassword'
                type='password'
                name='confirmpassword'
                autoComplete='new-password'
                placeholder='Re-enter your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                aria-invalid={!!valError.confirmpassword}
              />
              {valError.confirmpassword && (
                <span className='user-error'>{valError.confirmpassword}</span>
              )}
            </div>
          )}

          {globalError && (
            <div className='global-error' role='alert'>
              {globalError}
            </div>
          )}

          <button type='submit' className='form-button' disabled={loading}>
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create account"
                : "Sign in"}
          </button>
        </form>

        <div className='login-footer'>
          <span>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type='button'
            onClick={() => {
              clearError();
              setMode(isSignup ? "signin" : "signup");
            }}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </button>
        </div>

        <div className='login-bottom'>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </section>
    </main>
  );
}

export default LoginSignUpCotent;
