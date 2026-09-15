"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Layers3,
  Server,
  ShieldCheck
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SocialLinks } from "@/components/ui/social-links";
import { contactHref } from "@/lib/placeholders";

const focusItems = [
  "Software Development",
  "Information Systems",
  "REST APIs",
  "UI/UX"
] as const;

const architecture = [
  { label: "Frontend", value: "React / Vite", icon: Code2 },
  { label: "API", value: "Laravel", icon: Server },
  { label: "Data", value: "MySQL", icon: Database },
  { label: "Admin", value: "Backoffice", icon: ShieldCheck }
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[74vh] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-24 -z-10 h-[44rem] w-[72rem] -translate-x-1/2 rotate-[-8deg] border border-[var(--line)] opacity-60"
        aria-hidden
      />

      <div className="container-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.92fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--accent-text)]">
              Portfolio / 2026
            </p>
            <p className="inline-flex rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] px-3 py-2 text-xs font-medium text-[var(--muted)]">
              Open to internships & PFE opportunities
            </p>
          </div>

          <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.9] text-[var(--foreground)] sm:text-7xl lg:text-8xl">
            Imrane
            <span className="accent-text block">Mouzaria</span>
          </h1>

          <div className="mt-8 max-w-2xl border-l border-[var(--accent)] pl-5">
            <p className="text-balance text-2xl font-medium leading-tight text-[var(--foreground)] sm:text-3xl">
              Computer Engineering Student & Software Developer
            </p>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              5th-year Computer Engineering student at EMSI Marrakech, focused on
              Digital Development and Information Systems. I build modern software
              solutions by combining frontend and backend development, REST APIs,
              databases, and user-centered interface design.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#projects">
              View My Projects
              <ArrowDown size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink href={contactHref.cv} variant="secondary">
              Download My CV
              <Download size={18} aria-hidden />
            </ButtonLink>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[var(--accent)]/60"
            aria-hidden
          />
          <div
            className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-[var(--accent-2)]/60"
            aria-hidden
          />

          <div className="surface-strong overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/project-fst.svg"
                alt="FST Marrakech full-stack platform preview"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(7,9,13,0.88))] p-5">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent-text)]">
                  Latest full-stack work
                </p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h2 className="max-w-xs text-2xl font-semibold leading-tight text-white">
                    FST Marrakech Institutional Platform
                  </h2>
                  <a
                    href="#projects"
                    className="focus-ring hidden size-11 shrink-0 items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)] sm:inline-flex"
                    aria-label="View projects section"
                    title="View project"
                  >
                    <ArrowUpRight size={20} aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid border-t border-[var(--line)] md:grid-cols-[0.78fr_1.22fr]">
              <div className="border-b border-[var(--line)] p-5 md:border-b-0 md:border-r">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.055)] text-[var(--accent-text)]">
                  <Layers3 size={19} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Complete platform experience
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Public website, API, database-backed content, and admin backoffice.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4">
                {architecture.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-[var(--panel-strong)] p-4">
                      <Icon size={18} className="mb-3 text-[var(--accent-text)]" aria-hidden />
                      <p className="text-xs font-semibold text-[var(--foreground)]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {focusItems.map((item) => (
              <div
                key={item}
                className="rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] px-3 py-3 text-center text-xs font-medium text-[var(--muted)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
