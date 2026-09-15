"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="section-padding border-y border-[var(--line)] bg-[rgba(255,255,255,0.018)]"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic background in engineering, networks, and information systems."
        />

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="surface relative overflow-hidden rounded-lg p-6 sm:p-8"
            >
              <span
                className="absolute right-6 top-5 font-[var(--font-mono)] text-7xl font-semibold text-[var(--foreground)]/[0.035]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-8 inline-flex size-12 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.04)] text-[var(--accent-text)]">
                <GraduationCap size={22} aria-hidden />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              {item.institution ? (
                <p className="mt-3 text-base text-[var(--muted)]">{item.institution}</p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-2">
                {item.level ? (
                  <span className="rounded-md border border-[var(--line)] px-3 py-2 text-sm text-[var(--foreground)]/88">
                    {item.level}
                  </span>
                ) : null}
                {item.focus ? (
                  <span className="rounded-md border border-[var(--line)] px-3 py-2 text-sm text-[var(--foreground)]/88">
                    {item.focus}
                  </span>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
