
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

import { AuthInput } from "@/components/auth/AuthInput";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { resetPassword } from "@/lib/api/auth";
import { clearHash, readHashToken } from "@/lib/hash-token";
import { newPasswordError, useSubmit } from "@/lib/forms";

const buttonStyle =
  "h-12 w-full !rounded-xl !bg-gradient-to-r " +
  "!from-[#167FC4] !via-[#0E9EAE] !to-[#17B890] " +
  "!text-white transition-all duration-300 " +
  "hover:!brightness-105 active:scale-[0.99] " +
  "disabled:!opacity-60 motion-reduce:transform-none";

export function ResetPasswordForm() {
  const { busy, error, run } = useSubmit();

  const [state, setState] = useState<
    "checking" | { token: string | null }
  >("checking");

  const [password, setPassword] = useState("");
  const [fieldError, setFieldError] = useState<
    string | undefined
  >(undefined);
  const [doneMessage, setDoneMessage] = useState<
    string | null
  >(null);

  const started = useRef(false);

  // Preserve the existing fragment-token security flow.
  useEffect(() => {
    if (started.current) return;

    started.current = true;
    setState({ token: readHashToken() });
    clearHash();
  }, []);

  const token = state === "checking" ? null : state.token;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!token) return;

    const invalid = newPasswordError(password);

    if (invalid) {
      setFieldError(invalid);
      return;
    }

    const result = await run(() =>
      resetPassword(token, password)
    );

    if (result) {
      setDoneMessage(result.message);
    }
  }

  if (state === "checking") {
    return (
      <div role="status" className="py-5 text-sm text-slate-500">
        Checking your reset link...
      </div>
    );
  }

  if (doneMessage) {
    return (
      <div className="space-y-5">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
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
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 3 3 5-6" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-[#10243B]">
          Password updated
        </h3>

        <Alert tone="success">{doneMessage}</Alert>

        <p className="text-sm leading-6 text-slate-500">
          Your password has been changed successfully.
          You can now sign in with your new password.
        </p>

        <Link
          href="/sign-in"
          className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#167FC4] via-[#0E9EAE] to-[#17B890] text-sm font-semibold text-white transition-all duration-200 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="space-y-5">
        <Alert tone="error">
          This reset link is missing or invalid.
          Please request a new password reset email.
        </Alert>

        <Link
          href="/forgot-password"
          className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#167FC4] via-[#0E9EAE] to-[#17B890] text-sm font-semibold text-white transition-all duration-200 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Request a new link
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
        label="New password"
        type="password"
        name="new_password"
        autoComplete="new-password"
        placeholder="Enter your new password"
        required
        minLength={8}
        error={fieldError}
        value={password}
        onChange={(event) => {
          const next = event.target.value;
          setPassword(next);

          setFieldError((previous) =>
            previous
              ? newPasswordError(next)
              : undefined
          );
        }}
      />

      <p className="text-xs text-slate-500">
        Use at least 8 characters.
      </p>

      <Button
        type="submit"
        busy={busy}
        className={buttonStyle}
      >
        {busy ? "Updating password..." : "Change password"}
      </Button>

      <p className="text-center text-sm">
        <Link
          href="/sign-in"
          className="font-semibold text-[#1285B5] transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
