"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { contactHref } from "@/lib/placeholders";

const focusItems = [
  "Digital Development",
  "Information Systems",
  "Software Engineering",
  "Solution Design"
] as const;

const heroLinks = [
  { label: "GitHub", href: contactHref.github, icon: FaGithub },
  { label: "LinkedIn", href: contactHref.linkedin, icon: FaLinkedin },
  { label: "Email", href: contactHref.email, icon: FaEnvelope }
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[74vh] bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-24 -z-10 h-[44rem] w-[72rem] -translate-x-1/2 rotate-[-8deg] border border-[var(--line)] opacity-60"
        aria-hidden
      />

      <div className="container-shell grid min-h-[calc(100vh-7rem)] gap-14 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:py-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 lg:pt-4"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--accent)]" aria-hidden />
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent-text)]">
              Portfolio
            </p>
          </div>

          <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.88] text-[var(--foreground)] sm:text-7xl lg:text-8xl">
            <span className="block">Imrane</span>
            <span className="relative inline-flex pr-8">
              <span className="accent-text">Mouzaria</span>
              <span
                className="absolute right-0 top-5 size-3 rounded-full bg-[var(--accent-text)] shadow-[0_0_34px_rgba(0,122,255,0.7)] sm:top-7"
                aria-hidden
              />
            </span>
          </h1>

          <div className="mt-8 max-w-2xl">
            <p className="text-balance text-3xl font-medium leading-tight text-[var(--foreground)] sm:text-4xl">
              Final-year computer engineering student building digital systems with purpose.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              5th-year Computer Engineering student at EMSI Marrakech, focused on
              Digital Development and Information Systems. I work on modern digital
              solutions by combining software engineering, systems analysis, data
              management, and user-centered product thinking.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="focus-ring group inline-flex min-h-12 items-center gap-3 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)]"
            >
              Explore my work
              <ArrowDown size={18} className="transition group-hover:translate-y-0.5" aria-hidden />
            </a>
            <a
              href={contactHref.cv}
              className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-md border border-[var(--line-strong)] bg-[rgba(255,255,255,0.035)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--panel-strong)]"
            >
              Download CV
              <Download size={18} aria-hidden />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-l border-[var(--line-strong)] pl-4">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Connect
            </span>
            {heroLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-ring inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon size={17} className="text-[var(--accent-text)]" aria-hidden />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-4">
            {focusItems.map((item, index) => (
              <div key={item} className="border-t border-[var(--line)] pt-3">
                <p className="font-[var(--font-mono)] text-xs text-[var(--accent-text)]">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm font-medium leading-5 text-[var(--muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[520px] w-full max-w-xl self-start sm:h-[600px] lg:-mt-2 lg:h-[590px] lg:max-w-none"
        >
          <div
            className="absolute left-0 top-0 h-60 w-52 border-l border-t border-[var(--accent)]/70"
            aria-hidden
          />
          <div
            className="absolute bottom-2 right-0 h-64 w-52 border-b border-r border-[var(--accent-2)]/70"
            aria-hidden
          />

          <div
            className="absolute right-0 top-0 h-[82%] w-[86%] overflow-hidden border border-[var(--line-strong)] bg-[#090d12] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            style={{ clipPath: "polygon(9% 0, 100% 0, 91% 100%, 0 100%)" }}
          >
            <div className="relative size-full">
              <Image
                src="/imranemzr.png"
                alt="Portrait of Imrane Mouzaria"
                fill
                priority
                className="scale-[1.2] object-cover object-[center_62%]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,13,0),rgba(7,9,13,0.12)_36%,rgba(7,9,13,0.72))]" />
            </div>
          </div>

          <div className="absolute bottom-4 left-8 right-5 border border-[var(--line-strong)] bg-[rgba(12,16,23,0.82)] p-5 backdrop-blur-xl sm:left-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent-text)]">
                  Current Direction
                </p>
                <p className="mt-2 max-w-md text-2xl font-semibold leading-tight text-white">
                  Designing digital systems that connect people, data, and process.
                </p>
              </div>
              <a
                href="#about"
                className="focus-ring inline-flex size-12 shrink-0 items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)]"
                aria-label="Go to about section"
                title="About"
              >
                <ArrowUpRight size={20} aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
