export type EducationItem = {
  title: string;
  institution?: string;
  level?: string;
  focus?: string;
};

export const education: EducationItem[] = [
  {
    title: "Computer Engineering and Networks",
    institution: "EMSI Marrakech",
    level: "5th Year",
    focus: "Digital Development and Information Systems"
  },
  {
    title: "High School Diploma",
    focus: "Physical Sciences and Chemistry"
  }
];
