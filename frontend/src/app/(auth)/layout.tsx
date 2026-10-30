
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Authentication pages using the premium split layout.
const AUTH_PAGES: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to continue your innovation journey.",
  },
  "/sign-up": {
    title: "Start innovating",
    subtitle:
      "Create your account and unlock smarter innovation decisions.",
  },
  "/forgot-password": {
    title: "Forgot password?",
    subtitle:
      "We'll help you get back into your innovation workspace.",
  },
  "/reset-password": {
    title: "Secure your account",
    subtitle:
      "Choose a new password to regain access to your workspace.",
  },
};

// Shared official InnoValuation branding.
function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex w-fit items-center gap-2.5"
      aria-label="InnoValuation home"
    >
      <Image
        src="/innovaluation-mark.png"
        alt=""
        width={40}
        height={40}
        priority
        className="size-10 object-contain"
      />

      <span
        className={
          dark
            ? "text-xl font-bold tracking-tight text-white"
            : "bg-linear-to-r from-[#1878B5] to-[#22BC91] bg-clip-text text-xl font-bold tracking-tight text-transparent"
        }
      >
        InnoValuation
      </span>
    </Link>
  );
}

// Desktop marketing / branding panel.
function BrandPanel() {
  return (
    <section className="relative isolate hidden flex-col overflow-hidden bg-[#10243B] px-7 py-8 text-white lg:flex lg:min-h-full lg:w-[54%] lg:px-12 lg:py-8 xl:px-20">
      {/* Decorative brand lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[430px] rounded-full bg-[#147FC1]/20 blur-[95px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-28 size-[430px] rounded-full bg-[#1CC49A]/15 blur-[95px]"
      />

      {/* Official logo */}
      <div className="relative z-10">
        <Logo dark />
      </div>

      {/* Main branding content */}
      <div className="relative z-10 my-auto max-w-[620px] py-8 lg:py-4">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#63DFC7]/20 bg-[#63DFC7]/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.13em] text-[#75E1CC]">
          <span className="size-1.5 rounded-full bg-[#63DFC7]" />
          INNOVATION INTELLIGENCE
        </div>

        <h1 className="max-w-[590px] text-[clamp(2rem,3.1vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
          Great ideas deserve{" "}
          <span className="bg-linear-to-r from-[#74D3EB] to-[#50DFAE] bg-clip-text text-transparent">
            measurable impact.
          </span>
        </h1>

        <p className="mt-5 max-w-[510px] text-[15px] leading-7 text-[#BDD0DF]">
          Understand your innovation potential, evaluate
          opportunities with confidence, and turn ambitious
          ideas into meaningful outcomes.
        </p>

        {/* Innovation framework preview */}
        <div className="mt-7 max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-[#A9C2D3]">
                INNOVATION FRAMEWORK
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                Discover your potential
              </h2>
            </div>

            <span className="rounded-lg border border-[#54D5C1]/20 bg-[#54D5C1]/10 px-3 py-2 text-xs font-semibold text-[#77E5D1]">
              12 dimensions
            </span>
          </div>

          {/* Decorative framework indicator */}
          <div
            className="mt-5 grid grid-cols-12 gap-1.5"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full ${index < 8
                  ? "bg-[#48CFBC]"
                  : "bg-white/15"
                  }`}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#BDD0DF]">
            <span>Innovation readiness</span>
            <span>Idea evaluation</span>
            <span>Team alignment</span>
          </div>
        </div>

        <p className="mt-7 text-sm font-medium text-[#77DFCC]">
          Think bigger. Measure smarter. Innovate confidently.
        </p>
      </div>

      {/* Brand footer */}
      <div className="relative z-10 flex items-center justify-between gap-3 text-xs text-[#94B0C3]">
        <span>Innovation · Growth · Valuation</span>
        <span>InnoValuation</span>
      </div>
    </section>
  );
}

// Compact mobile branding.
function MobileBrand() {
  return (
    <header className="relative shrink-0 overflow-hidden bg-[#10243B] px-5 py-4 text-white sm:px-8 lg:hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 size-48 rounded-full bg-[#1CC49A]/20 blur-3xl"
      />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <Logo dark />

        <span className="rounded-full border border-[#65E2CF]/20 bg-[#65E2CF]/10 px-2.5 py-1 text-[10px] font-medium text-[#79E8D3]">
          INNOVATE
        </span>
      </div>

      <p className="relative z-10 mt-1.5 text-xs text-[#B9CEDD]">
        Great ideas deserve measurable impact.
      </p>
    </header>
  );
}

// Shared right-side authentication panel.
function AuthPanel({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) {
  const heading = AUTH_PAGES[pathname] ?? {
    title: "Welcome back",
    subtitle: "Sign in to continue your innovation journey.",
  };

  return (
    <section className="flex min-w-0 flex-1 items-start justify-center bg-white px-5 pt-8 pb-5 sm:px-12 lg:items-center lg:px-10 lg:py-6 xl:px-16">
      <div className="w-full max-w-[420px]">
        {/* Desktop logo */}
        <div className="mb-5 sm:mb-7">
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* Contextual page heading */}
          <div className="mt-0 lg:mt-9">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#0C9D8E]">
              YOUR INNOVATION WORKSPACE
            </p>

            <h2 className="mt-2 text-[28px] font-semibold tracking-tight text-[#10243B] sm:text-3xl">
              {heading.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {heading.subtitle}
            </p>
          </div>
        </div>

        {/* Existing authentication functionality */}
        {children}

        <p className="mt-7 text-center text-xs text-slate-400">
          Innovation · Growth · Valuation
        </p>
      </div>
    </section>
  );
}

// Auth route layout.
export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const usePremiumLayout = Object.prototype.hasOwnProperty.call(
    AUTH_PAGES,
    pathname
  );

  // Preserve the original layout for remaining auth routes.
  if (!usePremiumLayout) {
    return (
      <main
        id="main"
        className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10"
      >
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          {children}
        </div>
      </main>
    );
  }

  return (
    <main
      id="main"
      className="flex min-h-dvh w-full flex-col bg-white lg:min-h-dvh lg:flex-row"
    >
      <MobileBrand />
      <BrandPanel />
      <AuthPanel pathname={pathname}>
        {children}
      </AuthPanel>
    </main>
  );
}
