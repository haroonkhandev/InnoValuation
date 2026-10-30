"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { AuthInput } from "@/components/auth/AuthInput";
import { resendVerification, signIn } from "@/lib/api/auth";
import type { MeOut } from "@/lib/api/types";
import { useSubmit } from "@/lib/forms";

/** A same-site path from ?next=, or null. Rejects absolute and scheme-relative URLs;
 * backslashes count as slashes because URL parsers normalise them. */
function safeNext(): string | null {
  const next = new URLSearchParams(window.location.search).get("next");
  return next && /^\/[^/\\]/.test(next) ? next : null;
}

function landingPage(me: MeOut): string {
  if (me.memberships.length > 0) return "/dashboard";
  if (me.consultant_organisations.length > 0) return "/consultant-access";
  return "/organisations/new";
}

export function SignInForm() {
  const router = useRouter();
  const { busy, error, run } = useSubmit();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [resent, setResent] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setResent(false);
    const invalid = {
      email: email.trim() ? undefined : "Enter your email address.",
      password: password ? undefined : "Enter your password.",
    };
    if (invalid.email || invalid.password) {
      setFieldErrors(invalid);
      return;
    }
    const me = await run(() => signIn(email, password));
    // The hash (e.g. an invitation token) never reaches the server; carry it along.
    if (me) router.push((safeNext() ?? landingPage(me)) + window.location.hash);
  }

  async function handleResend() {
    const sent = await run(() => resendVerification(email));
    if (sent) setResent(true);
  }


  return (
    <form
      onSubmit={(event) => void handleSubmit(event)}
      className="space-y-5"
      noValidate
    >
      {error && (
        <Alert tone="error">
          {error.message}

          {error.code === "email_not_verified" && (
            <span className="mt-3 block">
              <Button
                variant="secondary"
                busy={busy}
                onClick={() => void handleResend()}
              >
                Send the confirmation email again
              </Button>
            </span>
          )}
        </Alert>
      )}

      {resent && (
        <Alert tone="success">
          Check your inbox for the confirmation email.
        </Alert>
      )}

      <AuthInput
        label="Email address"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@company.com"
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

      <div>
        <AuthInput
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          required
          error={fieldErrors.password}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setFieldErrors((previous) => ({
              ...previous,
              password: undefined,
            }));
          }}
        />

        <div className="mt-2 flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-[#1285B5] transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        busy={busy}
        className="
        group relative h-12 w-full
        !rounded-xl
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
        motion-reduce:transform-none
      "
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
            Signing in...
          </span>
        ) : (
          <span>Sign in to workspace</span>
        )}
      </Button>

      <p className="pt-1 text-center text-sm text-slate-500">
        New to InnoValuation?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-[#1285B5] transition-colors hover:text-[#0DAD94] hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}
