import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/*
 * Button — brutalist-editorial pill with a CSS fill-sweep hover.
 *
 * The hover effect is pure CSS (a pseudo-element scaled on the X axis from the
 * left), so it works in a static export with no JavaScript and degrades
 * cleanly under prefers-reduced-motion (the sweep transition is disabled, the
 * end-state colors still apply on hover/focus).
 *
 * Layering: `.btn-sweep` paints the fill via ::before behind the label; the
 * label sits in a relative span above it. Variants only swap the resting and
 * swept colors.
 */

const base =
  "btn-sweep group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variants: Record<Variant, string> = {
  // resting ink fill, sweeps to amber on hover
  solid: "bg-ink text-paper [--sweep:var(--color-amber)] hover:text-night",
  // transparent with ink border, sweeps to ink fill
  outline:
    "border border-ink/30 text-ink [--sweep:var(--color-ink)] hover:text-paper",
  // no chrome, sweeps to a soft ink wash
  ghost:
    "text-ink [--sweep:rgba(20,17,10,0.08)] hover:text-ink",
};

function Inner({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon ? (
        <span className="inline-flex transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "solid",
  icon,
  external = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label={ariaLabel}
        >
          <Inner icon={icon}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        <Inner icon={icon}>{children}</Inner>
      </Link>
    );
  }

  return (
    <button type="button" className={cls} aria-label={ariaLabel}>
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
}
