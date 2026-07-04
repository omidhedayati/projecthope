# Layout Architecture

## Folder Strategy

```txt
app/                 Route entry points, metadata, sitemap, robots
components/          Reusable UI and layout primitives
features/            Experience sections and client-heavy modules
hooks/               Shared browser and interaction hooks
lib/                 Utilities, constants, and content data
providers/           App-wide client providers
stores/              Lightweight client state
styles/              Token documentation and global layers
types/               Shared TypeScript contracts
assets/              Source design assets
public/              Static deployment assets
```

## Rendering Strategy

- Keep routes and data composition server-rendered by default.
- Push browser APIs, GSAP, Lenis, cursor, terminal, and WebGL behind client boundaries.
- Dynamically import heavy 3D modules.
- Use typed data files for portfolio content so visual systems stay reusable.

## UX Flow

1. Visitor enters through a polished loading reveal.
2. Hero communicates identity, depth, and available actions.
3. About explains the developer as a builder of systems and experiences.
4. Skills visualize breadth through clusters instead of charts.
5. Projects prove capability through interactive showcases and metrics.
6. Games and applications broaden the perception beyond web work.
7. Timeline adds credibility.
8. Terminal converts curiosity into contact.

## Component Library

- `Button`: CTA variants with magnetic hover.
- `GlassPanel`: depth surface for editorial content.
- `SectionHeader`: consistent section intros.
- `SiteNav`: compact navigation and global actions.
- `MockupFrame`: reusable device/browser presentation.
- `CommandPalette`: keyboard action surface.
- `ContactTerminal`: interactive terminal command engine.
- `CustomCursor`: global pointer enhancement.

## Data Contracts

Portfolio content is centralized in typed arrays:

- `projects`
- `skillClusters`
- `gameProjects`
- `applications`
- `experience`
- `terminalCommands`

This keeps the creative interface independent from the eventual real content.
