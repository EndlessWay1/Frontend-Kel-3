"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./email-verification.css";

type EmailVerificationProps = {
  email: string;
  onVerify: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
  onBack?: () => void;
};

function EmailVerification({
  email,
  onVerify,
  onResend,
  onBack,
}: EmailVerificationProps) {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [cooldown, setCooldown] = useState(30);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setTimeout(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!/^\d{6}$/.test(pin)) {
      setError("Please enter a valid 6-digit verification code.");
      return;
    }

    setLoading(true);

    try {
      await onVerify(pin);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Verification failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setSuccess("");
    setResending(true);

    try {
      await onResend();
      setSuccess("A new verification code has been sent!");
      setPin("");
      setCooldown(30);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to resend the verification code.",
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <main className='login-container'>
      <section className='verification-page'>
        <div className='verification-brand'>
          <Image src='/logo.png' alt='Nasi Liwet' width={38} height={38} />
          <span>NASI LIWET</span>
        </div>

        <div className='verification-icon'>
          <svg
            viewBox='0 0 24 24'
            width='34'
            height='34'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect x='3' y='5' width='18' height='14' rx='3' />
            <path d='m3 7 9 6 9-6' />
            <path d='m16 3 2 2 3-3' />
          </svg>
        </div>

        <div className='verification-heading'>
          <h1>Check your inbox</h1>
          <p>
            We&apos;ve sent a verification code to your email address. Enter the
            code below to verify your account.
          </p>
        </div>

        <div className='verification-email'>
          <span>Email address</span>
          <strong>{email}</strong>
        </div>

        <form className='verification-form' onSubmit={handleVerify}>
          <label htmlFor='verification-code'>Verification code</label>

          <input
            id='verification-code'
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            maxLength={6}
            placeholder='000000'
            value={pin}
            onChange={(e) => {
              setPin(e.target.value.replace(/\D/g, "").slice(0, 6));
              setError("");
            }}
            disabled={loading}
            required
          />

          {error && (
            <div className='verification-error' role='alert'>
              {error}
            </div>
          )}

          {success && (
            <div className='verification-success' role='status'>
              {success}
            </div>
          )}

          <button
            type='submit'
            className='verification-button'
            disabled={loading || pin.length !== 6}
          >
            {loading ? "Verifying..." : "Verify email"}
          </button>
        </form>

        <div className='verification-resend'>
          <p>Didn&apos;t receive the email?</p>

          <button
            type='button'
            onClick={handleResend}
            disabled={resending || cooldown > 0}
          >
            {resending
              ? "Sending..."
              : cooldown > 0
                ? `Resend code in ${cooldown}s`
                : "Resend verification code"}
          </button>
        </div>

        {onBack && (
          <button type='button' className='verification-back' onClick={onBack}>
            Back to sign in
          </button>
        )}

        <div className='verification-bottom'>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </section>
    </main>
  );
}

export default EmailVerification;
