
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

import { AuthInput } from "@/components/auth/AuthInput";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { forgotPassword } from "@/lib/api/auth";
import { emailError, useSubmit } from "@/lib/forms";

const buttonStyle =
  "h-12 w-full !rounded-xl !bg-gradient-to-r " +
  "!from-[#167FC4] !via-[#0E9EAE] !to-[#17B890] " +
  "!text-white transition-all duration-300 " +
  "hover:!brightness-105 active:scale-[0.99] " +
  "disabled:!opacity-60 motion-reduce:transform-none";

export function ForgotPasswordForm() {
  const { busy, error, run } = useSubmit();

  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState<
    string | undefined
  >(undefined);
  const [sentMessage, setSentMessage] = useState<
    string | null
  >(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const invalid = emailError(email);

    if (invalid) {
      setFieldError(invalid);
      return;
    }

    const result = await run(() => forgotPassword(email));

    if (result) {
      setSentMessage(result.message);
    }
  }

  if (sentMessage) {
    return (
      <div className="space-y-5">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-[#0E9EAE]">
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-[#10243B]">
          Check your inbox
        </h3>

        <Alert tone="success">{sentMessage}</Alert>

        <p className="text-sm leading-6 text-slate-500">
          If you receive a reset email, follow the
          instructions to create a new password.
        </p>

        <Link
          href="/sign-in"
          className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#167FC4] via-[#0E9EAE] to-[#17B890] text-sm font-semibold text-white transition-all duration-200 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void handleSubmit(event)}
      className="space-y-5"
      noValidate
    >
      {error && (
        <Alert tone="error">{error.message}</Alert>
      )}

      <AuthInput
        label="Email address"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@company.com"
        required
        error={fieldError}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setFieldError(undefined);
        }}
      />

      <Button
        type="submit"
        busy={busy}
        className={buttonStyle}
      >
        {busy ? "Sending reset link..." : "Send reset link"}
      </Button>

      <div className="text-center">
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1285B5] transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          <span aria-hidden="true">←</span>
          Back to sign in
        </Link>
      </div>
    </form>
  );
}
