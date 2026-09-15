import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { contactHref, personalLinks } from "@/lib/placeholders";

const links = [
  { label: "GitHub", href: contactHref.github, icon: FaGithub },
  { label: "LinkedIn", href: contactHref.linkedin, icon: FaLinkedin },
  { label: "Email", href: contactHref.email, icon: FaEnvelope }
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] px-3 py-2 text-sm text-[var(--muted)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--panel-strong)] hover:text-[var(--foreground)]"
            aria-label={link.label}
            title={link.label}
          >
            <Icon size={compact ? 17 : 18} aria-hidden />
            {!compact ? <span>{link.label}</span> : null}
          </a>
        );
      })}
      <span className="sr-only">Email placeholder: {personalLinks.email}</span>
    </div>
  );
}
