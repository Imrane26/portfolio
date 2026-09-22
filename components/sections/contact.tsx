"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactHref, personalLinks } from "@/lib/placeholders";

const contactItems = [
  { label: "Email", value: personalLinks.email, href: contactHref.email, icon: FaEnvelope },
  { label: "LinkedIn", value: personalLinks.linkedin, href: contactHref.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: personalLinks.github, href: contactHref.github, icon: FaGithub }
];

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Message ready. Connect this form to your preferred external form service when you publish.");
  }

  return (
    <AnimatedSection
      id="contact"
      className="section-padding"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together."
            description="Have a project, internship opportunity, or simply want to connect? Feel free to reach out."
          />

          <div className="surface-strong overflow-hidden rounded-lg">
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="focus-ring bg-[var(--panel-strong)] p-5 transition hover:bg-[var(--panel)]"
                  >
                    <span className="mb-5 inline-flex size-11 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.055)] text-[var(--accent-text)]">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="block text-sm font-semibold text-[var(--foreground)]">
                      {item.label}
                    </span>
                    <span className="mt-2 block break-all text-sm leading-6 text-[var(--muted)]">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="focus-ring min-h-12 w-full rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 text-[var(--foreground)] placeholder:text-[var(--muted)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="focus-ring min-h-12 w-full rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 text-[var(--foreground)] placeholder:text-[var(--muted)]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="focus-ring w-full resize-y rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)]"
                    placeholder="Write your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)] sm:w-fit"
                >
                  Send Message
                  <Send size={18} aria-hidden />
                </button>
                {status ? (
                  <p role="status" className="rounded-md border border-[var(--line)] p-3 text-sm text-[var(--muted)]">
                    {status}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
