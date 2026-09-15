import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const profilePoints = [
  "Frontend and backend development foundations",
  "REST API integration and database-backed applications",
  "User-centered interfaces with maintainable component structure"
] as const;

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <SectionHeading
          eyebrow="About Me"
          title="A computer engineering profile shaped by software, systems, and usable interfaces."
        />

        <div className="grid gap-5">
          <div className="surface-strong rounded-lg p-7 sm:p-9">
            <p className="text-xl leading-9 text-[var(--foreground)]/90">
              I am a 5th-year Computer Engineering student at EMSI Marrakech,
              focused on Digital Development and Information Systems.
            </p>
            <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-[var(--muted)]">
                My academic and professional experience has allowed me to work on
                software applications, modern web interfaces, REST APIs, databases,
                and user-centered digital solutions.
              </p>
              <p className="text-base leading-8 text-[var(--muted)]">
                I enjoy turning functional requirements into practical solutions
                while paying attention to user experience, code quality, scalability,
                and application structure.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {profilePoints.map((point) => (
              <div
                key={point}
                className="border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-4"
              >
                <span className="mb-4 block h-1 w-10 rounded-full bg-[var(--accent)]" aria-hidden />
                <span className="text-sm font-medium leading-6 text-[var(--foreground)]/88">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
