import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary:
    "border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] text-[var(--accent-ink)] hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)] hover:shadow-[0_18px_44px_rgba(0,122,255,0.24)]",
  secondary:
    "border-[var(--line-strong)] bg-[rgba(255,255,255,0.04)] text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--panel-strong)]",
  ghost:
    "border-transparent text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold shadow-sm transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
