"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { education } from "@/data/education";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="section-padding"
    >
      <div className="container-shell">
        <div className="max-w-6xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--accent)]" aria-hidden />
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[var(--accent-text)]">
              Education
            </p>
            <span className="h-px w-10 bg-[var(--line-strong)]" aria-hidden />
          </div>

          <h2 className="text-balance text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl lg:max-w-[1050px] lg:text-6xl">
            Academic path shaped by engineering, digital development, and
            information systems.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
            A progression from technical training to the final year of computer
            engineering, combining practical foundations with a broader approach
            to software, systems, and organizational needs.
          </p>
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden border-y border-[var(--line)] bg-[rgba(245,245,247,0.045)] px-5 py-2 shadow-[var(--shadow)] backdrop-blur-xl sm:px-7 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_45%,rgba(0,122,255,0.045))]" />
          <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[rgba(0,122,255,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent" />

          <div className="relative">
            <div
              className="absolute left-0 top-0 hidden h-full w-px bg-[var(--line-strong)] md:block"
              aria-hidden
            />

            {education.map((item) => (
              <motion.article
                key={`${item.title}-${item.period}`}
                variants={fadeUp}
                className="group relative grid gap-5 border-t border-[var(--line)] py-8 first:border-t-0 md:grid-cols-[13rem_1fr] md:gap-10 md:pl-10"
              >
                <div
                  className="absolute -left-[5px] top-10 hidden size-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_28px_rgba(0,122,255,0.65)] md:block"
                  aria-hidden
                />

                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent-text)]">
                    {item.period}
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base font-medium text-[var(--foreground)]/82">
                      {item.institution}
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                      {item.focus}
                    </p>
                    {item.note ? (
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        {item.note}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-start gap-3 border-l border-[var(--line)] pl-4 text-sm leading-6 text-[var(--muted)]">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--accent-text)]" aria-hidden />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
