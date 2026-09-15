"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhatIDo() {
  return (
    <AnimatedSection id="what-i-do" className="section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow="What I Do"
          title="Technical areas I keep developing through academic, internship, and project work."
          align="center"
        />

        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="surface grid min-h-64 content-between rounded-lg p-6 transition hover:border-[var(--accent)]"
              >
                <div>
                  <div className="mb-8 inline-flex size-12 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.055)] text-[var(--accent-text)]">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
