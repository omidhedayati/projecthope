import {
  Bot,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Gamepad2,
  Mail,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import type {
  ExperienceItem,
  NavItem,
  PaletteAction,
  Project,
  SkillCluster,
  TerminalCommand,
} from "@/types/content";

export const siteConfig = {
  name: "Project Hope",
  owner: "Your Name",
  title: "Creative Software Developer",
  description:
    "A cinematic portfolio for a developer building full-stack products, game systems, applications, and AI-powered experiences.",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resume: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Games", href: "#games" },
  { label: "Contact", href: "#contact" },
];

export const capabilityStrip = [
  "Web Development",
  "Full Stack",
  "Game Systems",
  "Desktop Apps",
  "Mobile Apps",
  "AI Integrations",
  "Backend Architecture",
  "UI Engineering",
];

export const skillClusters: SkillCluster[] = [
  {
    title: "Interfaces",
    description: "High-fidelity frontends with motion, accessibility, and design systems.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP", "R3F"],
    orbit: 0,
  },
  {
    title: "Systems",
    description: "APIs, services, databases, auth, deployment, and observability.",
    tools: ["Node", "PostgreSQL", "REST", "GraphQL", "Redis", "Docker"],
    orbit: 1,
  },
  {
    title: "Worlds",
    description: "Gameplay loops, tools, simulations, and real-time interactive scenes.",
    tools: ["Unity", "Unreal", "Godot", "Three.js", "Shaders", "Physics"],
    orbit: 2,
  },
  {
    title: "Applications",
    description: "Desktop, mobile, and cross-platform products with production polish.",
    tools: ["Electron", "React Native", "Tauri", "PWA", "SQLite", "Native APIs"],
    orbit: 3,
  },
  {
    title: "Intelligence",
    description: "AI-assisted workflows, agents, search, automation, and chat interfaces.",
    tools: ["LLMs", "RAG", "Embeddings", "Agents", "Vector DB", "Tool Calling"],
    orbit: 4,
  },
];

export const projects: Project[] = [
  {
    slug: "atlas-control-room",
    title: "Atlas Control Room",
    eyebrow: "Full-stack operations platform",
    summary:
      "A realtime command center for complex workflows, live analytics, permissions, and AI-assisted decisions.",
    narrative:
      "Designed as a calm cockpit for dense operational data, Atlas blends backend orchestration with a cinematic interface that stays fast under pressure.",
    stack: ["Next.js", "PostgreSQL", "WebSockets", "AI Agents", "Tailwind", "GSAP"],
    metrics: [
      { label: "Latency", value: "82ms" },
      { label: "Modules", value: "24" },
      { label: "Uptime", value: "99.9%" },
    ],
    actions: [
      { label: "Case study", href: "/case-studies/atlas-control-room" },
      { label: "GitHub", href: siteConfig.github },
    ],
    accent: "cyan",
  },
  {
    slug: "nebula-commerce",
    title: "Nebula Commerce",
    eyebrow: "Premium web experience",
    summary:
      "An animated commerce experience with product storytelling, checkout flows, and content-managed collections.",
    narrative:
      "The interface uses motion as merchandising: products glide between editorial states, variant changes feel tactile, and checkout remains frictionless.",
    stack: ["Next.js", "Stripe", "CMS", "RSC", "Image Optimization", "SEO"],
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Conversion", value: "+31%" },
      { label: "Pages", value: "46" },
    ],
    actions: [
      { label: "Case study", href: "/case-studies/nebula-commerce" },
      { label: "Live demo", href: "#" },
    ],
    accent: "violet",
  },
  {
    slug: "echo-ai-studio",
    title: "Echo AI Studio",
    eyebrow: "AI product lab",
    summary:
      "A workspace for prompts, agents, generated assets, semantic search, and reviewable automation pipelines.",
    narrative:
      "Echo makes AI systems inspectable. Every generated answer keeps its context, tool calls, and confidence visible in a polished product surface.",
    stack: ["LLMs", "Vector Search", "Workers", "React", "Node", "Analytics"],
    metrics: [
      { label: "Agents", value: "12" },
      { label: "Saved time", value: "64%" },
      { label: "Datasets", value: "8" },
    ],
    actions: [
      { label: "Case study", href: "/case-studies/echo-ai-studio" },
      { label: "GitHub", href: siteConfig.github },
    ],
    accent: "champagne",
  },
];

export const gameProjects = [
  {
    title: "Signal Runner",
    engine: "Unity",
    summary: "A neon traversal prototype with procedural obstacles and reactive soundtrack hooks.",
    details: ["Character controller", "Level streaming", "Postprocess stack"],
  },
  {
    title: "Rift Foundry",
    engine: "Unreal",
    summary: "A cinematic arena prototype focused on ability systems and environmental combat.",
    details: ["Gameplay abilities", "Niagara VFX", "Blueprint tooling"],
  },
  {
    title: "Orbital Garden",
    engine: "Godot",
    summary: "A small systems game exploring resource loops, cozy strategy, and pixel-perfect UI.",
    details: ["Simulation loop", "Save system", "UI state machine"],
  },
];

export const applications = [
  {
    title: "Desktop Command Hub",
    platform: "Desktop",
    summary: "A focused productivity shell for local automations, scripts, and project telemetry.",
  },
  {
    title: "Mobile Companion",
    platform: "Mobile",
    summary: "A companion app with offline-first notes, push flows, and native-feeling gestures.",
  },
  {
    title: "Cross-platform Toolkit",
    platform: "Cross-platform",
    summary: "A reusable application kit for auth, sync, storage, settings, and design tokens.",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Now",
    title: "Experience-led engineering",
    description:
      "Building polished systems where backend decisions, interface quality, and motion design reinforce one another.",
  },
  {
    period: "Recent",
    title: "AI and product architecture",
    description:
      "Designing workflows around agents, semantic search, automation, and explainable product surfaces.",
  },
  {
    period: "Earlier",
    title: "Games, apps, and full-stack platforms",
    description:
      "Shipping across gameplay systems, desktop utilities, mobile interfaces, and scalable web applications.",
  },
];

export const terminalCommands: TerminalCommand[] = [
  {
    command: "help",
    description: "Show available commands.",
    response: ["Try: projects, resume, contact, email, github, linkedin, download, developer-mode"],
  },
  {
    command: "projects",
    description: "List featured work.",
    response: projects.map((project) => `${project.title} - ${project.eyebrow}`),
  },
  {
    command: "resume",
    description: "Open resume.",
    response: [`Resume placeholder: ${siteConfig.resume}`],
  },
  {
    command: "contact",
    description: "Show contact routes.",
    response: [`Email: ${siteConfig.email}`, `GitHub: ${siteConfig.github}`, `LinkedIn: ${siteConfig.linkedin}`],
  },
  {
    command: "email",
    description: "Show email address.",
    response: [siteConfig.email],
  },
  {
    command: "github",
    description: "Show GitHub profile.",
    response: [siteConfig.github],
  },
  {
    command: "linkedin",
    description: "Show LinkedIn profile.",
    response: [siteConfig.linkedin],
  },
  {
    command: "download",
    description: "Show download link.",
    response: [`Download target: ${siteConfig.resume}`],
  },
  {
    command: "developer-mode",
    description: "Hidden easter egg.",
    response: ["Developer mode unlocked.", "Rendering debug grid, secret shortcuts, and impossible ideas."],
  },
];

export const paletteActions: PaletteAction[] = [
  { label: "Search projects", hint: "Open project index", href: "#projects", icon: Search },
  { label: "View case studies", hint: "Featured work", href: "#projects", icon: BriefcaseBusiness },
  { label: "Run terminal help", hint: "Contact commands", command: "help", icon: Code2 },
  { label: "Explore games", hint: "Game development", href: "#games", icon: Gamepad2 },
  { label: "AI assistant", hint: "Placeholder", href: "#ai-assistant", icon: Bot },
  { label: "Email", hint: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", hint: "Source and experiments", href: siteConfig.github, icon: ExternalLink },
  { label: "LinkedIn", hint: "Professional profile", href: siteConfig.linkedin, icon: ExternalLink },
  { label: "Launch contact", hint: "Terminal", href: "#contact", icon: Rocket },
  { label: "Secret mode", hint: "Easter egg", command: "developer-mode", icon: Sparkles },
];
