export type EducationItem = {
  title: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    title: "Computer Engineering and Networks",
    institution: "EMSI Marrakech",
    location: "Marrakech, Morocco",
    period: "2024 - Present",
    focus: "Digital Development and Information Systems",
    note: "Currently in the final year of the engineering cycle."
  },
  {
    title: "Specialized Technician Diploma",
    institution: "ISTA NTIC Syba Marrakech",
    location: "Marrakech, Morocco",
    period: "2022 - 2024",
    focus: "Technical training in information and digital technologies"
  },
  {
    title: "Baccalaureate in Physical Sciences and Chemistry",
    institution: "Complexe Al Awail",
    location: "Marrakech, Morocco",
    period: "2021 - 2022",
    focus: "Physical Sciences and Chemistry"
  }
];
