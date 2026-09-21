import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiJunit5,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPhp,
  SiPostman,
  SiPytest,
  SiReact,
  SiReactrouter,
  SiSharp,
  SiSonar,
  SiSpringboot,
  SiSpringsecurity,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaServer
} from "react-icons/fa6";

const brandIconMap: Record<string, IconType> = {
  "bootstrap": SiBootstrap,
  "c#": SiSharp,
  "css": SiCss,
  "docker": SiDocker,
  "entity framework": SiDotnet,
  "fastapi": SiFastapi,
  "figma": SiFigma,
  "git": SiGit,
  "github": SiGithub,
  "html": SiHtml5,
  "java": SiOpenjdk,
  "javascript": SiJavascript,
  "jwt": SiJsonwebtokens,
  "junit": SiJunit5,
  "laravel": SiLaravel,
  "laravel session auth": SiLaravel,
  "machine learning / ai": FaBrain,
  "mvvm": FaDiagramProject,
  "mongodb": SiMongodb,
  "mysql": SiMysql,
  "next.js": SiNextdotjs,
  ".net": SiDotnet,
  "or-tools": FaBrain,
  "php": SiPhp,
  "phpunit": SiPhp,
  "postman": SiPostman,
  "pytest": SiPytest,
  "react": SiReact,
  "react.js": SiReact,
  "react router": SiReactrouter,
  "rest api": SiOpenapiinitiative,
  "sonarqube": SiSonar,
  "spring boot": SiSpringboot,
  "spring security": SiSpringsecurity,
  "sql": FaDatabase,
  "sqlite": SiSqlite,
  "nosql": FaDatabase,
  "sql server": FaDatabase,
  "tailwind css": SiTailwindcss,
  "typescript": SiTypescript,
  "vite": SiVite,
  "wpf": FaServer
};

type BrandIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function BrandIcon({ name, className, size = 16 }: BrandIconProps) {
  const Icon = brandIconMap[name.toLowerCase()] ?? FaCode;

  return <Icon aria-hidden className={className} size={size} />;
}
