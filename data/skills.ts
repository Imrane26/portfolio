export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming and web languages used across academic and project work.",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "HTML", "CSS"]
  },
  {
    title: "Frontend",
    description: "Modern interface development with component-based workflows.",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    description: "API and application server foundations for practical software systems.",
    skills: ["Spring Boot", "Laravel", "FastAPI"]
  },
  {
    title: "Databases",
    description: "Relational modeling, querying, and local persistence.",
    skills: ["MySQL", "SQL", "SQLite"]
  },
  {
    title: "Testing & Code Quality",
    description: "Tools for validating behavior and improving maintainability.",
    skills: ["JUnit", "PHPUnit", "pytest", "JaCoCo", "SonarQube"]
  },
  {
    title: "Tools",
    description: "Daily development, design, collaboration, and delivery tooling.",
    skills: ["Git", "GitHub", "Postman", "Figma", "Docker"]
  }
];
