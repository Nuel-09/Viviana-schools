"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { navLinks, siteConfig } from "@/lib/site";
import { PortalDropdown, PortalLinkList } from "@/components/PortalDropdown";
import { SchoolLogo } from "@/components/SchoolLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solidHeader = scrolled && !open;
  const darkBar = open || !solidHeader;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div
        className={clsx(
          "safe-top border-b transition-all duration-300",
          open
            ? "border-white/10 bg-brand-950 shadow-lg"
            : solidHeader
              ? "border-brand-100/80 bg-white/95 shadow-md backdrop-blur-md"
              : "border-transparent bg-brand-950/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none",
        )}
      >
        <div className="header-bar container-narrow flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3"
            aria-label={`${siteConfig.shortName} home`}
            onClick={() => setOpen(false)}
          >
            <SchoolLogo
              size="md"
              priority
              className={clsx(
                "ring-1 transition-shadow",
                darkBar ? "ring-white/30 shadow-sm" : "ring-brand-100",
              )}
            />
            <span className="min-w-0 flex flex-col leading-tight">
              <span
                className={clsx(
                  "truncate text-base font-semibold tracking-tight sm:text-lg",
                  darkBar ? "text-white" : "text-brand-900",
                )}
              >
                Viviana
              </span>
              <span
                className={clsx(
                  "truncate text-[10px] font-medium leading-snug sm:text-xs",
                  darkBar ? "text-brand-100" : "text-brand-600",
                )}
              >
                <span className="sm:hidden">Nursery · Primary · Sec.</span>
                <span className="hidden sm:inline">Nursery · Primary · Secondary</span>
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  solidHeader
                    ? "text-slate-700 hover:bg-brand-50 hover:text-brand-800"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
            <PortalDropdown
              variant={solidHeader ? "brand" : "accent"}
              className="ml-2"
            />
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={clsx(
              "menu-toggle flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors lg:hidden",
              darkBar
                ? "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"
                : "bg-brand-50 text-brand-800 ring-1 ring-brand-200/80 hover:bg-brand-100",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className={clsx(
          "fixed inset-x-0 bottom-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        tabIndex={open ? 0 : -1}
        style={{ top: "var(--header-height)" }}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={clsx(
          "mobile-menu-panel fixed inset-x-0 bottom-0 z-[45] flex flex-col bg-brand-950 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-y-0" : "translate-y-full pointer-events-none",
        )}
        style={{ top: "var(--header-height)" }}
        aria-hidden={!open}
      >
        <nav
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium text-white transition hover:bg-white/10 active:bg-white/15"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-white/10 pt-6 pb-4">
            <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              School Portal
            </p>
            <PortalLinkList
              onNavigate={() => setOpen(false)}
              linkClassName="w-full justify-start bg-accent-500 px-4 py-3.5 text-base text-brand-950 hover:bg-accent-400"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
