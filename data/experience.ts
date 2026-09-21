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
    role: "Full-Stack Internship — City Hall of Marrakech",
    organization: "City Hall of Marrakech",
    period: "March 2024",
    description:
      "Designed a geoportal with React.js for managing and visualizing geographic data.",
    technologies: ["React.js", "GIS Data", "Interactive Maps"],
    responsibilities: [
      "Designed a geoportal interface for geographic data visualization.",
      "Integrated interactive maps.",
      "Worked with GIS-oriented data.",
      "Contributed to the organization and presentation of spatial information."
    ]
  },
  {
    role: "Volunteer — Wilaya of Marrakech",
    organization: "Wilaya of Marrakech",
    period: "October 2023",
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
