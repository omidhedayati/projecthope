import type { ExperienceItem, NavItem, Project, SkillCluster, TerminalCommand } from "@/types/content";

export type PaletteActionMessage = {
  key: string;
  label: string;
  hint: string;
  href?: string;
  command?: string;
};

export type Locale = "en" | "fa";

export type Chapter = {
  id: string;
  index: string;
  title: string;
  status: string;
};

export type GameProject = {
  title: string;
  engine: string;
  summary: string;
  details: string[];
};

export type Application = {
  title: string;
  platform: string;
  summary: string;
};

export type Principle = {
  title: string;
  copy: string;
};

export type Extra = {
  title: string;
  copy: string;
};

export type Messages = {
  site: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    questMenu: string;
    items: NavItem[];
  };
  chapters: Chapter[];
  hero: {
    questStatus: string;
    chapterLabel: string;
    tagline: string;
    inspectArtifacts: string;
    enterFinalGate: string;
    playerHud: string;
    hudItems: string[];
    capabilities: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    principles: Principle[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    coreAbility: string;
    coreTitle: string;
    coreDescription: string;
    abilityNode: string;
    clusters: SkillCluster[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    artifact: string;
    inventoryItem: string;
    openArtifact: string;
    inspectArtifact: string;
    items: Project[];
  };
  games: {
    eyebrow: string;
    title: string;
    description: string;
    worldSlot: string;
    items: GameProject[];
  };
  applications: {
    eyebrow: string;
    title: string;
    description: string;
    items: Application[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    chapter: string;
    items: ExperienceItem[];
  };
  extras: {
    eyebrow: string;
    title: string;
    description: string;
    items: Extra[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    terminalReady: string;
    terminalHint: string;
    directEmail: string;
    commandNotFound: string;
    typeHelp: string;
    commands: TerminalCommand[];
  };
  commandPalette: {
    placeholder: string;
    ariaLabel: string;
    close: string;
    actions: PaletteActionMessage[];
  };
  gameShell: {
    chapter: string;
    pressStart: string;
    archive: string;
    intro: string;
    clickToStart: string;
    startWithSound: string;
    scrollHint: string;
    toggleSound: string;
    soundOn: string;
    soundOff: string;
  };
  loading: {
    initializing: string;
  };
  theme: {
    toggle: string;
  };
  language: {
    switch: string;
    en: string;
    fa: string;
  };
};
