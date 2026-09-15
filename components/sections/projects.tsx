"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BrandIcon } from "@/components/ui/brand-icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="section-padding relative overflow-hidden border-y border-[var(--line)] bg-[rgba(255,255,255,0.03)]"
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Project work with real product scope, not just isolated screens."
            description="A selected set of academic and internship projects across full-stack platforms, information systems, and interface development."
          />
          <div className="hidden justify-self-end border border-[var(--line)] bg-[var(--panel)] p-5 lg:block">
            <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
              Featured projects are presented as case studies because recruiters should
              quickly understand scope, stack, and responsibility.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {projects.map((project, index) => {
            const featured = project.featured;

            return (
              <motion.article
                key={project.name}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className={`surface group relative overflow-hidden rounded-lg ${
                  featured ? "lg:min-h-[680px]" : "lg:min-h-[520px]"
                }`}
              >
                <div className="absolute right-5 top-5 z-10 rounded-md border border-[var(--line)] bg-[var(--panel-strong)] px-3 py-2 font-[var(--font-mono)] text-xs text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={`relative overflow-hidden ${featured ? "h-80" : "h-64"}`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(7,9,13,0.84))]" />
                  {project.spotlightLabel ? (
                    <div className="absolute bottom-5 left-5 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-3 py-2 text-xs font-semibold text-[var(--accent-ink)]">
                      {project.spotlightLabel}
                    </div>
                  ) : null}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent-text)]">
                        {project.category}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)]">
                        {project.name}
                      </h3>
                    </div>
                    <span className="hidden size-11 shrink-0 items-center justify-center rounded-md border border-[var(--line)] text-[var(--accent-text)] transition group-hover:-translate-y-0.5 group-hover:border-[var(--accent)] sm:inline-flex">
                      <ArrowUpRight size={20} aria-hidden />
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {project.highlights ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="border-l border-[var(--accent)]/70 bg-[rgba(255,255,255,0.03)] px-4 py-3"
                        >
                          <Sparkles size={15} className="mb-2 text-[var(--accent-text)]" aria-hidden />
                          <p className="text-sm font-medium leading-6 text-[var(--foreground)]/88">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {project.features ? (
                    <div className="mt-7 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[rgba(255,255,255,0.035)] px-3 py-2 text-xs text-[var(--foreground)]/88"
                      >
                        <span className="grid size-5 shrink-0 place-items-center text-[var(--accent-text)]">
                          <BrandIcon name={tech} size={14} />
                        </span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--line-strong)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--accent)]"
                    >
                      <Code2 size={17} aria-hidden />
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-[var(--accent-fill)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-fill-hover)]"
                    >
                      <ExternalLink size={17} aria-hidden />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
