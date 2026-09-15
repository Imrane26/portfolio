export type Experience = {
  role: string;
  organization: string;
  period?: string;
  description: string;
  technologies?: string[];
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Summer Internship — Full-Stack Web Development",
    organization: "Faculty of Sciences and Techniques of Marrakech",
    period: "July 2026 — September 2026",
    description:
      "Designed and developed an institutional web platform for the Faculty of Sciences and Techniques of Marrakech.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Laravel Session Auth"
    ],
    responsibilities: [
      "Developed modern web interfaces and reusable frontend components.",
      "Built and connected the frontend with Laravel API endpoints.",
      "Worked on a Laravel backoffice for managing institutional content.",
      "Implemented responsive layouts for desktop, tablet, and mobile.",
      "Improved the overall platform structure and user experience."
    ]
  },
  {
    role: "Frontend Internship — IAIMH",
    organization: "International Association of Innovation in Management and Health — Marrakech",
    description:
      "Contributed to the development and improvement of a web platform designed to present the association's activities, courses, and services.",
    technologies: ["React.js", "CSS", "Figma", "Git", "GitHub"],
    responsibilities: [
      "Frontend development.",
      "Interface implementation.",
      "Responsive design for desktop, tablet, and mobile.",
      "Bug identification and documentation.",
      "UI/UX improvements."
    ]
  },
  {
    role: "Internship — Municipality of Marrakech",
    organization: "Municipality of Marrakech",
    description:
      "Participated in a project involving the processing and entry of data concerning citizens affected by the Marrakech earthquake.",
    responsibilities: [
      "Data processing and entry.",
      "Use of a dedicated platform.",
      "Team collaboration.",
      "Maintaining accuracy and efficiency during data processing."
    ]
  }
];
