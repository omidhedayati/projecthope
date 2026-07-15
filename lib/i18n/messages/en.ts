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
import type { Messages } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

const projectSlugs = ["atlas-control-room", "nebula-commerce", "echo-ai-studio"] as const;

export const en: Messages = {
  site: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  nav: {
    brand: "Archive / Hope",
    questMenu: "Quest Menu",
    items: [
      { label: "Origin", href: "#about" },
      { label: "Abilities", href: "#skills" },
      { label: "Artifacts", href: "#projects" },
      { label: "Worlds", href: "#games" },
      { label: "Final Gate", href: "#contact" },
    ],
  },
  chapters: [
    { id: "hero", index: "00", title: "Prologue", status: "Enter the archive" },
    { id: "about", index: "01", title: "Origin", status: "Trace the builder" },
    { id: "skills", index: "02", title: "Abilities", status: "Unlock the skill tree" },
    { id: "projects", index: "03", title: "Artifacts", status: "Inspect shipped systems" },
    { id: "games", index: "04", title: "Worlds", status: "Open playable realms" },
    { id: "applications", index: "05", title: "Loadouts", status: "Switch platforms" },
    { id: "experience", index: "06", title: "Chronicle", status: "Review the timeline" },
    { id: "ai-assistant", index: "07", title: "Hidden Systems", status: "Find future layers" },
    { id: "contact", index: "08", title: "Final Gate", status: "Run contact protocol" },
  ],
  hero: {
    questStatus: "Quest status: available for ambitious builds",
    chapterLabel: "Chapter 00 / Prologue",
    tagline:
      "Enter a software archive where each build is an artifact, each skill is an unlockable ability, and every system is designed to feel playable.",
    inspectArtifacts: "Inspect artifacts",
    enterFinalGate: "Enter final gate",
    playerHud: "Player HUD",
    hudItems: ["60 FPS", "R3F", "GSAP", "Quest Log"],
    capabilities: [
      "Web Development",
      "Full Stack",
      "Game Systems",
      "Desktop Apps",
      "Mobile Apps",
      "AI Integrations",
      "Backend Architecture",
      "UI Engineering",
    ],
  },
  about: {
    eyebrow: "Chapter 01 / Origin",
    title: "Software with atmosphere, systems, and intent.",
    description:
      "I am a professional developer focused on turning complex technical ideas into refined, usable, and memorable products. The portfolio is built to communicate that range through interaction instead of a conventional resume layout.",
    principles: [
      {
        title: "Systems thinking",
        copy: "I design the backend, state model, and product surface as one connected experience.",
      },
      {
        title: "Interface craft",
        copy: "Motion, typography, hierarchy, and accessibility are treated as engineering concerns.",
      },
      {
        title: "Playable software",
        copy: "Game development shapes how I think about feedback loops, flow, and interaction.",
      },
    ],
  },
  skills: {
    eyebrow: "Chapter 02 / Abilities",
    title: "Unlockable skills, connected like a game tree.",
    description:
      "No progress bars. These are ability nodes: interface craft, backend systems, games, applications, and AI connected into one playable software toolkit.",
    coreAbility: "Core Ability",
    coreTitle: "Experience Engineer",
    coreDescription:
      "Combines product thinking, code architecture, motion, systems, and world-building.",
    abilityNode: "Ability Node",
    clusters: [
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
    ],
  },
  projects: {
    eyebrow: "Chapter 03 / Artifacts",
    title: "Inspect the artifacts. Each one contains a system.",
    description:
      "Projects become collectible objects: part case study, part device, part world fragment. Open each artifact to reveal architecture, metrics, interface logic, and production craft.",
    artifact: "Artifact",
    inventoryItem: "Inventory Item",
    openArtifact: "Open artifact",
    inspectArtifact: "Inspect Artifact",
    items: [
      {
        slug: projectSlugs[0],
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
        slug: projectSlugs[1],
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
        slug: projectSlugs[2],
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
    ],
  },
  games: {
    eyebrow: "Chapter 04 / Worlds",
    title: "Playable worlds sharpen product instincts.",
    description:
      "Games make feedback, pacing, state, and performance impossible to ignore. This section is built for gameplay footage, playable demos, engine notes, and cinematic trailers.",
    worldSlot: "World slot",
    items: [
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
    ],
  },
  applications: {
    eyebrow: "Chapter 05 / Loadouts",
    title: "Switch platforms like equipment loadouts.",
    description:
      "The same craft applies beyond the browser: native-feeling controls, offline behavior, local data, sync, platform constraints, and product-grade microinteractions.",
    items: [
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
    ],
  },
  experience: {
    eyebrow: "Chapter 06 / Chronicle",
    title: "A campaign log of breadth, not job-title wallpaper.",
    description:
      "The work spans architecture, user interfaces, AI workflows, realtime systems, games, applications, and the connective tissue required to ship them.",
    chapter: "Chapter",
    items: [
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
    ],
  },
  extras: {
    eyebrow: "Chapter 07 / Hidden Systems",
    title: "Optional systems hidden beneath the main quest.",
    description:
      "The first launch includes polished placeholders for features that can become real product surfaces: AI assistant, blog, case studies, bookmarks, sharing, achievements, analytics, and newsletter capture.",
    items: [
      {
        title: "AI assistant",
        copy: "Placeholder surface for a future project guide, resume assistant, or portfolio copilot.",
      },
      {
        title: "Blog and case studies",
        copy: "Route structure is ready for long-form technical writing and product breakdowns.",
      },
      {
        title: "Bookmarks",
        copy: "Designed as a future layer for visitors to save projects or compare capabilities.",
      },
      {
        title: "Share project",
        copy: "Project actions are structured so social sharing can be added without changing showcases.",
      },
      {
        title: "Achievements",
        copy: "A flexible area for awards, shipped milestones, certifications, or open-source wins.",
      },
    ],
  },
  contact: {
    eyebrow: "Chapter 08 / Final Gate",
    title: "Run the final command to make contact.",
    description:
      "The terminal is the last gate of the archive. It exposes routes through the portfolio: artifacts, resume, social links, contact details, and hidden developer mode.",
    terminalReady: "Final Gate terminal ready.",
    terminalHint: "Type `help` to reveal available protocols.",
    directEmail: "Direct email placeholder:",
    commandNotFound: "Command not found:",
    typeHelp: "Type `help` for options.",
    commands: [
      {
        command: "help",
        description: "Show available commands.",
        response: [
          "Available protocols: artifacts, projects, resume, contact, email, github, linkedin, download, developer-mode",
        ],
      },
      {
        command: "artifacts",
        description: "List artifact inventory.",
        response: [
          "Artifact 01: Atlas Control Room - Full-stack operations platform",
          "Artifact 02: Nebula Commerce - Premium web experience",
          "Artifact 03: Echo AI Studio - AI product lab",
        ],
      },
      {
        command: "projects",
        description: "List featured work.",
        response: [
          "Artifact 01: Atlas Control Room - Full-stack operations platform",
          "Artifact 02: Nebula Commerce - Premium web experience",
          "Artifact 03: Echo AI Studio - AI product lab",
        ],
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
        response: [
          "Developer mode unlocked.",
          "Debug grid armed.",
          "Secret shortcuts online.",
          "Impossible ideas rendering.",
        ],
      },
    ],
  },
  commandPalette: {
    placeholder: "Search projects, contact, shortcuts...",
    ariaLabel: "Command palette",
    close: "Close command palette",
    actions: [
      { key: "search", label: "Search projects", hint: "Open project index", href: "#projects" },
      { key: "case-studies", label: "View case studies", hint: "Featured work", href: "#projects" },
      { key: "help", label: "Run terminal help", hint: "Contact commands", command: "help" },
      { key: "games", label: "Explore games", hint: "Game development", href: "#games" },
      { key: "ai", label: "AI assistant", hint: "Placeholder", href: "#ai-assistant" },
      { key: "email", label: "Email", hint: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { key: "github", label: "GitHub", hint: "Source and experiments", href: siteConfig.github },
      { key: "linkedin", label: "LinkedIn", hint: "Professional profile", href: siteConfig.linkedin },
      { key: "contact", label: "Launch contact", hint: "Terminal", href: "#contact" },
      { key: "secret", label: "Secret mode", hint: "Easter egg", command: "developer-mode" },
    ],
  },
  gameShell: {
    chapter: "CHAPTER",
    pressStart: "Press Start",
    archive: "Project Hope Archive",
    intro:
      "Enter a chapter-based portfolio where abilities unlock, projects become artifacts, and the final gate is a live terminal.",
    clickToStart: "Click to start",
    startWithSound: "Start with sound",
    scrollHint: "Scroll to continue after launch",
    toggleSound: "Toggle ambient sound",
    soundOn: "Sound On",
    soundOff: "Sound Off",
  },
  loading: {
    initializing: "Initializing Experience",
  },
  theme: {
    toggle: "Toggle theme",
  },
  language: {
    switch: "Switch language",
    en: "English",
    fa: "فارسی",
  },
};

export const paletteActionIcons = {
  search: Search,
  "case-studies": BriefcaseBusiness,
  help: Code2,
  games: Gamepad2,
  ai: Bot,
  email: Mail,
  github: ExternalLink,
  linkedin: ExternalLink,
  contact: Rocket,
  secret: Sparkles,
} as const;
