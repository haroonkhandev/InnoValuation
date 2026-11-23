
import Image from "next/image";
import Link from "next/link";
import "./landing.css";

const AUDIENCES = [
  {
    name: "Innovators",
    description: "Validate ideas before investing time and resources.",
  },
  {
    name: "R&D leaders",
    description: "Prioritise innovation opportunities with clarity.",
  },
  {
    name: "Procurement",
    description: "Evaluate value for money with confidence.",
  },
  {
    name: "Investors",
    description: "Compare opportunities using structured insights.",
  },
];

const FEATURES = [
  {
    number: "01",
    title: "Innovation readiness",
    description:
      "Bring your team together to assess 60 statements across 12 innovation dimensions and agree a readiness score out of 300.",
  },
  {
    number: "02",
    title: "Idea IQ & Value for Money",
    description:
      "Evaluate ideas with Innovation Quotient scoring and Value for Money analysis to support better investment decisions.",
  },
  {
    number: "03",
    title: "Built for collaboration",
    description:
      "Invite team members, agree assessment answers, and give consultants time-limited read-only access.",
  },
];

const DIMENSIONS = [
  "Customer Journey",
  "Brand Magnetism",
  "Channel Navigation",
  "Service Excellence",
  "Product Evolution",
  "Operational Efficiency",
  "Organizational Agility",
  "Collaborative Synergy",
  "Value Creation Engine",
  "Sustainable Future",
  "Data Intelligence",
  "Financial Imperative",
];

function ArrowIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="InnoValuation home"
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <Image
        src="/innovaluation-mark.png"
        alt=""
        width={42}
        height={42}
        priority
        className="size-10 object-contain"
      />

      <span className="bg-linear-to-r from-[#1878B5] to-[#17B890] bg-clip-text text-xl font-bold tracking-tight text-transparent">
        InnoValuation
      </span>
    </Link>
  );
}

function LandingHeader() {
  return (
    <header className="relative z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          <a
            href="#how-it-works"
            className="landing-nav-link"
          >
            How it works
          </a>
          <a
            href="#features"
            className="landing-nav-link"
          >
            Features
          </a>
          <a
            href="#who-its-for"
            className="landing-nav-link"
          >
            Who it's for
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#243A50] transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE] sm:px-5"
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className="landing-gradient-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white sm:px-5"
          >
            Get started
            <ArrowIcon className="hidden size-4 sm:block" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductPreview() {
  return (
    <div className="landing-preview landing-preview-3d relative mx-auto w-full max-w-[580px]">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-full bg-[#159BB1]/10 blur-3xl"
      />

      <div className="landing-preview-surface relative overflow-hidden rounded-[24px] border border-[#D6E5EF] bg-white">
        {/* Product preview header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#E8F6F5]">
              <Image
                src="/innovaluation-mark.png"
                alt=""
                width={28}
                height={28}
                className="size-7 object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-[#10243B]">
                Innovation Intelligence
              </p>
              <p className="text-xs text-slate-500">
                Framework overview
              </p>
            </div>
          </div>

          <span className="rounded-full border border-[#CDEDE6] bg-[#EDF9F5] px-3 py-1 text-[11px] font-semibold text-[#078B77]">
            12 dimensions
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#0E9EAE] uppercase">
              Explore the framework
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#10243B] sm:text-2xl">
              Discover your innovation potential
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
              A structured approach to measuring organisational readiness.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="landing-metric-3d rounded-2xl border border-[#E1EAF0] bg-[#F8FAFC] p-4">
              <p className="text-xs text-slate-500">
                Innovation dimensions
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#10243B]">
                12
              </p>
              <p className="mt-1 text-xs text-[#0D9A8D]">
                Structured framework
              </p>
            </div>

            <div className="landing-metric-3d rounded-2xl border border-[#E1EAF0] bg-[#F8FAFC] p-4">
              <p className="text-xs text-slate-500">
                Readiness questions
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#10243B]">
                60
              </p>
              <p className="mt-1 text-xs text-[#0D9A8D]">
                Team assessment
              </p>
            </div>
          </div>

          {/* Dimensions illustration */}
          <div className="landing-dimensions-3d mt-4 rounded-2xl border border-[#E1EAF0] bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#10243B]">
                Innovation dimensions
              </p>
              <span className="text-xs text-slate-400">
                Framework
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {DIMENSIONS.slice(0, 6).map((dimension, index) => (
                <div
                  key={dimension}
                  className="landing-dimension-chip flex min-w-0 items-center gap-2 rounded-lg bg-[#F5F9FC] px-2.5 py-2.5"
                >
                  <span
                    className={`size-2 shrink-0 rounded-full ${index % 2 === 0
                      ? "bg-[#167FC4]"
                      : "bg-[#17B890]"
                      }`}
                  />
                  <span className="truncate text-[11px] font-medium text-[#52677D]">
                    {dimension}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-right text-xs font-medium text-[#0A9D92]">
              + 6 more dimensions
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#EDF8F7] p-3 text-xs leading-5 text-[#31776F]">
            <svg
              aria-hidden="true"
              className="size-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 3 3 5-6" />
            </svg>
            Designed for clearer, more informed innovation decisions.
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="landing-hero relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 size-[480px] rounded-full bg-[#B8E8F5]/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-0 size-[480px] rounded-full bg-[#B8F0E0]/25 blur-[100px]"
      />

      <div className="landing-hero-inner relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-12">
        <div className="landing-enter max-w-[670px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C8E8E6] bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.1em] text-[#0C998E] shadow-sm">
            <span className="size-2 rounded-full bg-[#17B890]" />
            A SMARTER WAY TO INNOVATE
          </div>

          <h1 className="text-[clamp(2.5rem,4.2vw,4.5rem)] leading-[1.09] font-semibold tracking-[-0.04em] text-[#10243B]">
            Great ideas deserve{" "}
            <span className="bg-linear-to-r from-[#167FC4] via-[#0E9EAE] to-[#17B890] bg-clip-text text-transparent">
              measurable impact.
            </span>
          </h1>

          <p className="mt-7 max-w-[580px] text-base leading-8 text-[#61758A] sm:text-lg">
            Transform intuition into informed decisions.
            Understand your organisation's innovation readiness,
            evaluate opportunities, and move forward with
            greater confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/sign-up"
              className="landing-gradient-button inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-7 py-3 text-sm font-semibold text-white"
            >
              Start your innovation journey
              <ArrowIcon className="size-4" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D2E1EB] bg-white px-6 py-3 text-sm font-semibold text-[#223B51] transition-all duration-200 hover:border-[#95C8D1] hover:bg-[#F5FBFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E9EAE]"
            >
              Explore the platform
            </a>
          </div>


          <div className="landing-trust-strip mt-8 flex flex-wrap gap-2.5 border-t border-[#DCE8EE] pt-5">
            {[
              {
                title: "12 innovation dimensions",
                icon: "dimensions",
              },
              {
                title: "Evidence-informed decisions",
                icon: "insights",
              },
              {
                title: "Team collaboration",
                icon: "team",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="landing-trust-badge group inline-flex items-center gap-2.5 rounded-xl border border-[#D8E9EF] bg-white/85 px-3.5 py-2.5"
              >
                <span className="landing-trust-icon flex size-8 shrink-0 items-center justify-center rounded-lg">
                  {item.icon === "dimensions" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-[17px]"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  )}

                  {item.icon === "insights" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-[17px]"
                    >
                      <path d="M3 17l6-6 4 4 8-9" />
                      <path d="M15 6h6v6" />
                    </svg>
                  )}

                  {item.icon === "team" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-[17px]"
                    >
                      <circle cx="9" cy="8" r="3" />
                      <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
                      <path d="M16 5a3 3 0 0 1 0 6" />
                      <path d="M19 20v-2a5 5 0 0 0-3-4.6" />
                    </svg>
                  )}
                </span>

                <span className="text-[12px] font-semibold leading-5 text-[#405B70]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

        <div className="landing-enter-delayed min-w-0">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main" className="w-full flex-1">
      <LandingHeader />
      <Hero />

      {/* Premium innovation journey */}
      <section id="how-it-works" className="landing-journey scroll-mt-24">
        <div className="landing-journey-container mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="landing-journey-heading">
            <div className="landing-journey-eyebrow">
              <span className="landing-journey-dot" />
              A STRUCTURED APPROACH
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#10243B] sm:text-4xl lg:text-[44px]">
              From uncertainty to{" "}
              <span className="bg-linear-to-r from-[#167FC4] to-[#17B890] bg-clip-text text-transparent">
                clarity.
              </span>
            </h2>

            <p className="mt-4 max-w-[690px] text-base leading-8 text-[#61758A]">
              Every great innovation begins with a question.
              InnoValuation helps you understand your readiness,
              evaluate ideas with greater confidence, and bring
              the right people together to move forward.
            </p>
          </div>

          <div id="features" className="landing-journey-grid mt-11 grid scroll-mt-24 gap-6 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <article
                key={feature.number}
                className="landing-journey-card"
              >
                <div className="landing-journey-card-top">
                  <span className="landing-journey-step">
                    STEP {feature.number}
                  </span>

                  <span className="landing-journey-step-name">
                    {["DISCOVER", "EVALUATE", "COLLABORATE"][index]}
                  </span>
                </div>

                <div
                  className="landing-journey-visual"
                  aria-hidden="true"
                >
                  {index === 0 && (
                    <div className="landing-journey-analytics">
                      <div className="landing-journey-visual-top">
                        <span>Innovation readiness</span>
                        <span className="landing-journey-visual-indicator">
                          12 dimensions
                        </span>
                      </div>

                      <div className="landing-journey-bars">
                        {[35, 58, 46, 76, 63, 89, 72].map(
                          (height, barIndex) => (
                            <div
                              key={barIndex}
                              className="landing-journey-bar-track"
                            >
                              <div
                                className="landing-journey-bar"
                                style={{ height: `${height}%` }}
                              />
                            </div>
                          ),
                        )}
                      </div>

                      <div className="landing-journey-visual-bottom">
                        <span>Understand your potential</span>
                        <span className="landing-journey-mini-dot" />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="landing-journey-evaluation">
                      <div className="landing-journey-visual-top">
                        <span>Idea intelligence</span>
                        <span className="landing-journey-visual-indicator">
                          IQ
                        </span>
                      </div>

                      <div className="landing-journey-score-area">
                        <div className="landing-journey-score-ring">
                          <div className="landing-journey-score-inner">
                            <span className="landing-journey-score-label">
                              IDEA
                            </span>
                            <strong>IQ</strong>
                          </div>
                        </div>

                        <div className="landing-journey-score-details">
                          <span className="landing-journey-detail-label">
                            Evaluate
                          </span>
                          <strong>Ideas with clarity</strong>
                          <div className="landing-journey-detail-line">
                            <span />
                          </div>
                          <div className="landing-journey-detail-line short">
                            <span />
                          </div>
                        </div>
                      </div>

                      <div className="landing-journey-visual-bottom">
                        <span>Innovation Quotient & Value for Money</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="landing-journey-collaboration">
                      <div className="landing-journey-visual-top">
                        <span>Team workspace</span>
                        <span className="landing-journey-visual-indicator">
                          Connected
                        </span>
                      </div>

                      <div className="landing-journey-network">
                        <svg
                          className="landing-journey-network-lines"
                          viewBox="0 0 300 120"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                        >
                          <path
                            d="M65 60 L150 28 L235 60 L150 94 Z"
                            stroke="#66D9CE"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                          />
                          <path
                            d="M65 60 L235 60"
                            stroke="#66D9CE"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                          />
                        </svg>

                        <span className="landing-journey-node node-one">
                          A
                        </span>
                        <span className="landing-journey-node node-two">
                          B
                        </span>
                        <span className="landing-journey-node node-three">
                          C
                        </span>
                        <span className="landing-journey-node node-four">
                          ✓
                        </span>
                      </div>

                      <div className="landing-journey-visual-bottom">
                        <span>Align perspectives and decisions</span>
                        <span className="landing-journey-mini-dot" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="landing-journey-card-content">
                  <h3 className="text-[22px] font-semibold tracking-tight text-[#10243B]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#61758A]">
                    {feature.description}
                  </p>
                </div>

                <div className="landing-journey-card-footer">
                  <span>
                    {[
                      "Understand where you stand",
                      "Compare with confidence",
                      "Move forward together",
                    ][index]}
                  </span>

                  <span className="landing-journey-footer-arrow">
                    <ArrowIcon className="size-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="landing-journey-closing">
            <span className="landing-journey-closing-line" />
            <p>
              One connected approach to smarter innovation decisions.
            </p>
            <span className="landing-journey-closing-line" />
          </div>
        </div>
      </section>

      {/* Existing audiences, restyled */}
      <section
        id="who-its-for"
        className="scroll-mt-24 bg-[#F5F9FC] py-20"
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#0D9E91] uppercase">
              Built around your decisions
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10243B] sm:text-4xl">
              Innovation intelligence for every perspective.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((audience) => (
              <article
                key={audience.name}
                className="landing-feature-card rounded-2xl border border-[#DDE8EF] bg-white p-6"
              >
                <div className="mb-5 size-2.5 rounded-full bg-[#14B49C]" />
                <h3 className="text-lg font-semibold text-[#10243B]">
                  {audience.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#61758A]">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final conversion section */}
      <section className="bg-[#10243B] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to turn ideas into impact?
          </h2>

          <p className="mt-5 text-base leading-7 text-[#BDD0DF]">
            Build a clearer picture of your organisation's
            innovation potential and take your next step with confidence.
          </p>

          <Link
            href="/sign-up"
            className="landing-gradient-button mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-8 py-3 text-sm font-semibold text-white"
          >
            Get started with InnoValuation
            <ArrowIcon className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <Logo />

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#61758A]"
          >
            <Link href="/sign-in" className="hover:text-[#0E9EAE]">
              Sign in
            </Link>
            <Link href="/terms" className="hover:text-[#0E9EAE]">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#0E9EAE]">
              Privacy
            </Link>
            <Link href="/health" className="hover:text-[#0E9EAE]">
              System health
            </Link>
          </nav>

          <p className="text-xs text-slate-400">
            Innovation · Growth · Valuation
          </p>
        </div>
      </footer>
    </main>
  );
}
