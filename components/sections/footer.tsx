import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[rgba(245,245,247,0.045)] py-10 shadow-[0_-18px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018)_44%,rgba(0,122,255,0.06))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <div className="container-shell relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">Imrane Mouzaria</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Computer Engineering Student & Software Developer
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            © 2026 Imrane Mouzaria. All rights reserved.
          </p>
        </div>
        <SocialLinks compact />
      </div>
    </footer>
  );
}
