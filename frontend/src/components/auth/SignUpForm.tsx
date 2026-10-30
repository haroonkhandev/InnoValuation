
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

import { AuthInput } from "@/components/auth/AuthInput";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { signUp } from "@/lib/api/auth";
import {
  emailError,
  newPasswordError,
  useSubmit,
} from "@/lib/forms";

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
}

const primaryButtonClass = `
  h-12 w-full !rounded-xl
  !bg-gradient-to-r
  !from-[#167FC4]
  !via-[#0E9EAE]
  !to-[#17B890]
  !text-white
  !shadow-[0_6px_20px_rgba(14,158,174,0.18)]
  transition-all duration-300
  hover:!brightness-105
  hover:!shadow-[0_8px_24px_rgba(14,158,174,0.25)]
  active:scale-[0.99]
  disabled:!cursor-not-allowed
  disabled:!opacity-50
  motion-reduce:transform-none
`;

export function SignUpForm() {
  const { busy, error, run } = useSubmit();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [sentMessage, setSentMessage] =
    useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!accepted) return;

    const invalid: FieldErrors = {
      name: name.trim()
        ? undefined
        : "Enter your name.",
      email: emailError(email),
      password: newPasswordError(password),
    };

    if (
      invalid.name ||
      invalid.email ||
      invalid.password
    ) {
      setFieldErrors(invalid);
      return;
    }

    const result = await run(() =>
      signUp({
        name,
        email,
        password,
        accepted_terms: true,
      })
    );

    if (result) {
      setSentMessage(result.message);
    }
  }

  if (sentMessage) {
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
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />
            <path d="m3 7 9 6 9-6" />
            <path d="m16 16 2 2 4-4" />
          </svg>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[#10243B]">
          Check your inbox
        </h3>

        <Alert tone="success">
          {sentMessage}
        </Alert>

        <p className="text-sm leading-7 text-slate-500">
          Open the verification link in your email
          to confirm your address. Once verified,
          you can access your innovation workspace.
        </p>

        <Link
          href="/sign-in"
          className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#167FC4] via-[#0E9EAE] to-[#17B890] text-sm font-semibold text-white shadow-lg shadow-teal-500/10 transition-all duration-200 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void handleSubmit(event)}
      className="space-y-4"
      noValidate
    >
      {error && (
        <Alert tone="error">
          {error.message}
        </Alert>
      )}

      <AuthInput
        label="Full name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        autoComplete="name"
        required
        error={fieldErrors.name}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          setFieldErrors((previous) => ({
            ...previous,
            name: undefined,
          }));
        }}
      />

      <AuthInput
        label="Email address"
        type="email"
        name="email"
        placeholder="you@company.com"
        autoComplete="email"
        required
        error={fieldErrors.email}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setFieldErrors((previous) => ({
            ...previous,
            email: undefined,
          }));
        }}
      />

      <div className="space-y-1.5">
        <AuthInput
          label="Create password"
          type="password"
          name="password"
          placeholder="Create a secure password"
          autoComplete="new-password"
          required
          minLength={8}
          error={fieldErrors.password}
          value={password}
          onChange={(event) => {
            const next = event.target.value;
            setPassword(next);

            setFieldErrors((previous) =>
              previous.password
                ? {
                  ...previous,
                  password: newPasswordError(next),
                }
                : previous
            );
          }}
        />

        {!fieldErrors.password && (
          <p className="text-xs text-slate-500">
            Use at least 8 characters.
          </p>
        )}
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl py-1">
        <input
          type="checkbox"
          name="accepted_terms"
          required
          checked={accepted}
          onChange={(event) =>
            setAccepted(event.target.checked)
          }
          className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[#0E9EAE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        />

        <span className="text-xs leading-6 text-slate-600">
          I agree to the{" "}
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="font-semibold text-[#1285B5] underline-offset-2 transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
          >
            Terms of Service
          </Link>
          {" "}and{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="font-semibold text-[#1285B5] underline-offset-2 transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <Button
        type="submit"
        busy={busy}
        disabled={!accepted}
        className={primaryButtonClass}
      >
        {busy ? (
          <span className="flex items-center gap-2">
            <svg
              className="size-4 animate-spin motion-reduce:animate-none"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-25"
              />
              <path
                d="M12 3a9 9 0 0 1 9 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Creating account...
          </span>
        ) : (
          "Create your account"
        )}
      </Button>

      <p className="pt-1 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-[#1285B5] transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
