"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BrandIcon } from "@/components/ui/brand-icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="section-padding border-y border-[var(--line)]"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical technical stack for building software applications and information systems."
          description="The technologies are grouped by usage area instead of subjective proficiency percentages."
        />

        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`surface relative overflow-hidden rounded-lg p-6 ${
                index === 0 || index === 1 ? "xl:col-span-3" : "xl:col-span-2"
              }`}
            >
              <span
                className="absolute right-5 top-5 font-[var(--font-mono)] text-5xl font-semibold text-[var(--foreground)]/[0.035]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{category.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-[var(--muted)]">
                {category.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] px-3 py-2 text-sm text-[var(--foreground)]/88"
                  >
                    <span className="grid size-5 shrink-0 place-items-center text-[var(--accent-text)]">
                      <BrandIcon name={skill} size={15} />
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
