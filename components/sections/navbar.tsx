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
        className={`container-shell flex min-h-14 items-center justify-between gap-4 rounded-lg border px-4 transition ${
          scrolled
            ? "border-[var(--line-strong)] bg-[var(--panel-strong)] shadow-[var(--shadow)] backdrop-blur-xl"
            : "border-[var(--line)] bg-[var(--panel)] backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-3 rounded-md text-sm font-semibold"
        >
          <span className="grid size-8 place-items-center rounded-md bg-[var(--foreground)] text-xs font-bold text-[var(--background)]">
            IM
          </span>
          <span>Imrane Mouzaria</span>
        </a>

        <div className="hidden items-center rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={contactHref.cv}
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)]"
          >
            <Download size={17} aria-hidden />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--panel)]"
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
            <div className="surface-strong rounded-lg p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-md px-3 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
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
