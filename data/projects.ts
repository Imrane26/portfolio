export type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  imageAlt: string;
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
    image: "/images/project-fst.svg",
    imageAlt: "Responsive institutional platform mockup for FST Marrakech",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    featured: true,
    spotlightLabel: "Most Recent Full-Stack Project",
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
    image: "/images/project-simi.svg",
    imageAlt: "Dashboard mockup for the SIMI medical information system",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    featured: true,
    spotlightLabel: "PFA Project",
    highlights: [
      "Medical information system",
      "Appointment optimization",
      "AI-assisted indicators"
    ]
  },
  {
    name: "IAIMH — International Association of Innovation in Management and Health",
    description:
      "Design and development of a web platform aimed at centralizing the association's activities, conferences, courses, and services. The project focuses on user experience, responsive design, and modern interface development.",
    technologies: ["React.js", "CSS", "Figma", "Git", "GitHub"],
    category: "Frontend / UI Development",
    image: "/images/project-iaimh.svg",
    imageAlt: "Association website interface mockup for IAIMH",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    highlights: ["Association activities", "Responsive UI", "Figma workflow"]
  },
  {
    name: "LocationVoiture",
    description:
      "A desktop vehicle rental management application designed to manage users, clients, vehicles, reservations, payments, and maintenance operations.",
    technologies: ["C#", ".NET", "WPF", "Entity Framework", "SQL Server", "MVVM"],
    category: "Desktop / Software Development",
    image: "/images/project-locationvoiture.svg",
    imageAlt: "Desktop vehicle rental management application mockup",
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_LIVE_DEMO_URL",
    highlights: ["Desktop management", "MVVM structure", "SQL Server data"],
    features: [
      "Client management",
      "Vehicle management",
      "Reservations",
      "Payments",
      "QR code generation",
      "Vehicle maintenance management",
      "Email notifications"
    ]
  }
];
