"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/navigation";
import { contactHref } from "@/lib/placeholders";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 py-4"
    >
      <nav
        className={`container-shell relative flex min-h-14 items-center justify-between gap-4 overflow-hidden rounded-lg border px-4 transition duration-300 ${
          scrolled
            ? "border-[var(--line-strong)] bg-[rgba(29,29,31,0.62)] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "border-[rgba(245,245,247,0.14)] bg-[rgba(245,245,247,0.06)] shadow-[0_14px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
        }`}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(0,122,255,0.08))]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />

        <a
          href="#home"
          className="focus-ring relative z-10 inline-flex items-center gap-3 rounded-md text-sm font-semibold"
        >
          <span className="grid size-8 place-items-center rounded-md border border-[var(--line)] bg-[rgba(245,245,247,0.86)] text-xs font-bold text-[#1d1d1f] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
            IM
          </span>
          <span>Imrane Mouzaria</span>
        </a>

        <div className="relative z-10 hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[rgba(245,245,247,0.08)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={contactHref.cv}
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)]"
          >
            <Download size={17} aria-hidden />
            Download CV
          </a>
        </div>

        <div className="relative z-10 flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(245,245,247,0.055)] backdrop-blur-xl"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="container-shell pb-4 lg:hidden"
          >
            <div className="rounded-lg border border-[var(--line-strong)] bg-[rgba(29,29,31,0.7)] p-3 shadow-[var(--shadow)] backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-md px-3 py-3 text-sm text-[var(--muted)] transition hover:bg-[rgba(245,245,247,0.08)] hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={contactHref.cv}
                className="focus-ring mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-4 py-3 text-sm font-semibold text-[var(--accent-ink)]"
              >
                <Download size={17} aria-hidden />
                Download CV
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
