export type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  spotlightLabel?: string;
  highlights?: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    name: "Institutional Web Platform — FST Marrakech",
    description:
      "Design and development of an institutional web platform for the Faculty of Sciences and Techniques of Marrakech. The project covered more than the interface layer, with a focus on building a complete, maintainable platform experience adapted to desktop, tablet, and mobile devices.",
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
    category: "Full-Stack / Institutional Web Platform",
    image: "/images/logo fstm.png",
    imageAlt: "FST Marrakech logo",
    imageFit: "contain",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    featured: true,
    highlights: [
      "Public institutional website",
      "Laravel content backoffice",
      "REST API integration"
    ]
  },
  {
    name: "SIMI — Intelligent Medical Information System",
    description:
      "A PFA project developed last year: an intelligent information system designed for medical practices and healthcare centers. The platform centralizes patient records, appointments, payments, and management indicators while integrating intelligent features such as no-show prediction and appointment planning optimization.",
    technologies: [
      "Spring Boot",
      "Next.js",
      "FastAPI",
      "MySQL",
      "JWT",
      "Spring Security",
      "Docker",
      "OR-Tools",
      "Machine Learning / AI"
    ],
    category: "Full-Stack / Information Systems / AI",
    image: "/images/SIMI2.png",
    imageAlt: "SIMI project logo",
    imageFit: "contain",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    featured: true,
    highlights: [
      "Medical information system",
      "Appointment optimization",
      "AI-assisted indicators"
    ]
  },
  {
    name: "LocationVoiture",
    description:
      "A desktop vehicle rental management application designed to manage users, clients, vehicles, reservations, payments, and maintenance operations.",
    technologies: ["C#", ".NET", "WPF", "Entity Framework", "SQL Server", "MVVM"],
    category: "Desktop / Software Development",
    image: "/images/location.jpg",
    imageAlt: "LocationVoiture project logo",
    imageFit: "contain",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    highlights: ["Desktop management", "MVVM structure", "SQL Server data"]
  }
];
