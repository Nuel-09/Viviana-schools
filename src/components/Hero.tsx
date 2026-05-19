import { ArrowRight, BookOpen, Shield, Users } from "lucide-react";
import { PortalDropdown } from "@/components/PortalDropdown";
import { siteConfig } from "@/lib/site";

const highlights = [
  { icon: BookOpen, label: "Quality Curriculum" },
  { icon: Shield, label: "Safe Environment" },
  { icon: Users, label: "Expert Teachers" },
];

export function Hero() {
  return (
    <section
      className="gradient-hero relative min-h-[100dvh] overflow-hidden pt-[calc(var(--header-height)+1.25rem)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />

      <div className="container-narrow relative flex min-h-[calc(100dvh-var(--header-height)-2rem)] flex-col justify-center px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium leading-snug text-brand-100 ring-1 ring-white/20 sm:px-4 sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent-400" aria-hidden />
          <span className="text-balance">
            Enrolling Nursery, Primary & Secondary — {new Date().getFullYear()}
          </span>
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.12] tracking-tight text-white text-balance sm:text-4xl sm:leading-[1.1] lg:text-6xl"
        >
          {siteConfig.tagline}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100/90 sm:mt-6 sm:text-lg lg:text-xl">
          At {siteConfig.shortName}, we blend play-based learning with strong academic
          foundations across nursery, primary, and secondary  giving every child the
          confidence, curiosity, and character to thrive.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#admissions"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-base font-semibold text-brand-950 shadow-lg shadow-accent-500/25 transition hover:bg-accent-400 sm:w-auto sm:px-7"
          >
            Apply for Admission
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <PortalDropdown variant="hero-outline" align="left" className="w-full sm:w-auto" />
        </div>

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <Icon className="h-5 w-5 text-accent-400" aria-hidden />
              </span>
              <span className="text-sm font-medium text-white">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent sm:h-16"
        aria-hidden
      />
    </section>
  );
}
