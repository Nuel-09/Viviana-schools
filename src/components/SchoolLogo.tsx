import Image from "next/image";
import { clsx } from "clsx";
import { siteConfig } from "@/lib/site";

type SchoolLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

/** Display height per size; width follows official crest aspect ratio */
const heightBySize = {
  sm: 36,
  md: 44,
  lg: 56,
} as const;

export function SchoolLogo({
  size = "md",
  className,
  imageClassName,
  priority = false,
}: SchoolLogoProps) {
  const { src, alt, width: intrinsicW, height: intrinsicH } = siteConfig.logo;
  const displayH = heightBySize[size];
  const displayW = Math.round((intrinsicW / intrinsicH) * displayH);

  return (
    <span
      className={clsx(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white",
        className,
      )}
      style={{ width: displayW, height: displayH }}
    >
      <Image
        src={src}
        alt={alt}
        width={displayW}
        height={displayH}
        priority={priority}
        sizes={`${displayW}px`}
        className={clsx("h-full w-full object-contain", imageClassName)}
      />
    </span>
  );
}
