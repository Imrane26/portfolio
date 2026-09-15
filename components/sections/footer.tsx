import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
