"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Internships and practical work presented with a clear, realistic scope."
          description="The timeline focuses on concrete contribution areas without overstating responsibility or seniority."
        />

        <motion.div
          className="mt-14 grid gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {experiences.map((item) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              variants={fadeUp}
              className="grid gap-5 md:grid-cols-[16rem_1fr]"
            >
              <div className="hidden border-t border-[var(--line)] pt-5 md:block">
                <span className="mb-4 inline-flex size-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--accent-text)]">
                  <BriefcaseBusiness size={18} aria-hidden />
                </span>
                {item.period ? (
                  <p className="font-[var(--font-mono)] text-xs uppercase leading-6 text-[var(--accent-text)]">
                    {item.period}
                  </p>
                ) : null}
              </div>

              <div className="surface rounded-lg p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.organization}</p>
                  </div>
                  {item.period ? (
                    <span className="rounded-md border border-[var(--line)] px-3 py-2 font-[var(--font-mono)] text-xs text-[var(--accent-text)] md:hidden">
                      {item.period}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-base leading-7 text-[var(--muted)]">{item.description}</p>

                {item.technologies ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[rgba(255,255,255,0.045)] px-3 py-2 text-xs text-[var(--foreground)]/86"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2 size-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
