export const personalLinks: Record<"email" | "github" | "linkedin" | "cv", string> = {
  email: "imranemzr@gmail.com",
  github: "https://github.com/Imrane26",
  linkedin: "https://www.linkedin.com/in/imranemouzaria/",
  cv: "/Imrane Resume ATS.pdf"
};

export const contactHref = {
  email:
    personalLinks.email === "YOUR_EMAIL"
      ? "mailto:YOUR_EMAIL"
      : `mailto:${personalLinks.email}`,
  github: personalLinks.github,
  linkedin: personalLinks.linkedin,
  cv: personalLinks.cv
} as const;
