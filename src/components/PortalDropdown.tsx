"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ExternalLink, Shield, GraduationCap } from "lucide-react";
import { clsx } from "clsx";
import { portalLinks } from "@/lib/site";

const portalIcons = [Shield, GraduationCap] as const;

type PortalDropdownProps = {
  variant?: "accent" | "brand" | "hero-outline";
  align?: "left" | "right";
  className?: string;
  onNavigate?: () => void;
};

const buttonStyles = {
  accent:
    "bg-accent-500 text-brand-950 hover:bg-accent-400 shadow-sm",
  brand: "bg-brand-700 text-white hover:bg-brand-800",
  "hero-outline":
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
};

export function PortalDropdown({
  variant = "accent",
  align = "right",
  className,
  onNavigate,
}: PortalDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={ref} className={clsx("relative w-full sm:w-auto", className)}>
      <button
        type="button"
        id="school-portal-menu-button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="school-portal-menu"
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:w-auto",
          buttonStyles[variant],
          variant === "hero-outline" && "rounded-xl px-7 py-3.5 text-base",
        )}
      >
        School Portal
        <ChevronDown
          className={clsx("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <div
        id="school-portal-menu"
        role="menu"
        aria-labelledby="school-portal-menu-button"
        className={clsx(
          "absolute top-full z-50 mt-2 min-w-[240px] overflow-hidden rounded-xl border border-slate-100 bg-white py-1 shadow-xl ring-1 ring-black/5 transition-all",
          align === "right" ? "right-0 sm:right-0" : "left-0 right-0 sm:right-auto",
          variant === "hero-outline" && "sm:min-w-[240px]",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        {portalLinks.map((portal, i) => {
          const Icon = portalIcons[i] ?? ExternalLink;
          return (
            <a
              key={portal.label}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={handleLinkClick}
              className="flex items-start gap-3 px-4 py-3 text-left transition hover:bg-brand-50"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-900">
                  {portal.label}
                  <ExternalLink className="h-3 w-3 text-slate-400" aria-hidden />
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {portal.description}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

type PortalLinkListProps = {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
};

export function PortalLinkList({
  onNavigate,
  className,
  linkClassName,
}: PortalLinkListProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {portalLinks.map((portal, i) => {
        const Icon = portalIcons[i] ?? ExternalLink;
        return (
          <a
            key={portal.label}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className={clsx(
              "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition",
              linkClassName,
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {portal.label}
            <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
