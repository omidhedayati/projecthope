import type { LucideIcon } from "lucide-react";

export type ActionLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  narrative: string;
  stack: string[];
  metrics: Metric[];
  actions: ActionLink[];
  accent: "cyan" | "violet" | "champagne" | "rose";
};

export type SkillCluster = {
  title: string;
  description: string;
  tools: string[];
  orbit: number;
};

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
};

export type TerminalCommand = {
  command: string;
  description: string;
  response: string[];
};

export type NavItem = {
  label: string;
  href: string;
};

export type PaletteAction = {
  label: string;
  hint: string;
  href?: string;
  command?: string;
  icon: LucideIcon;
};
