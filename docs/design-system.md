# Project Hope Design System

## Creative Thesis

Project Hope is a cinematic software portfolio for a developer who builds complete experiences: web platforms, full-stack systems, games, desktop apps, mobile apps, UI engineering, backend services, and AI integrations. The site should feel less like a resume and more like a high-end interactive product.

## Visual Language

- **Core feeling:** futuristic, premium, quiet, technical, intelligent, and immersive.
- **Composition:** editorial whitespace, oversized type, floating panes, atmospheric 3D, and asymmetric story moments.
- **Depth:** layered glass surfaces, soft shadows, subtle bloom, refractive objects, and pointer-reactive light.
- **Motion:** scroll-led narrative, staged reveals, magnetic controls, blur-to-sharp typography, and cinematic transitions.
- **Restraint:** effects must support clarity. No noisy neon overload, no generic card grid, no dashboard patterns.

## Color System

Dark mode is the primary art direction. Light mode keeps the same structure with warmer surfaces and restrained contrast.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--color-void` | `#05060a` | `#f7f4ee` | Page base |
| `--color-ink` | `#f4f2ea` | `#101219` | Primary text |
| `--color-muted` | `#9ea5b8` | `#59606f` | Secondary text |
| `--color-glass` | `rgba(255,255,255,.075)` | `rgba(255,255,255,.72)` | Panels |
| `--color-line` | `rgba(255,255,255,.14)` | `rgba(17,19,26,.12)` | Borders |
| `--accent-cyan` | `#88f7ff` | `#007f92` | Interaction highlights |
| `--accent-violet` | `#a78bfa` | `#6d4aff` | Gradients |
| `--accent-champagne` | `#f7dca6` | `#9b641e` | Warm premium notes |
| `--accent-rose` | `#f0a8c8` | `#b54377` | Rare emphasis |

Gradient language:

- `aurora-primary`: cyan to violet to champagne.
- `aurora-soft`: blurred radial glows that drift behind content.
- `metal-edge`: subtle white-to-transparent line highlights for glass panels.

## Typography

- **Sans:** Geist variable via `next/font`.
- **Mono:** Geist Mono for terminal, metadata, and technical labels.
- **Hero:** huge editorial text, tight tracking, line-height below 1.
- **Section labels:** small mono uppercase with generous letter spacing.
- **Body:** calm rhythm, max widths under 72 characters, high contrast.

Hierarchy:

- Display: `clamp(4.5rem, 13vw, 12rem)`
- Section title: `clamp(3rem, 8vw, 7rem)`
- Lead: `clamp(1.15rem, 2vw, 1.55rem)`
- Body: `1rem`
- Metadata: `.75rem` mono uppercase

## Spacing And Layout

- Use large vertical scenes, not stacked content blocks.
- Section padding: `clamp(6rem, 14vw, 12rem)`.
- Container width: `min(100% - 2rem, 1440px)`.
- Grid system: 12 columns on desktop, simplified 4 columns on mobile.
- Cards are replaced with floating showcases, mockups, timelines, and interactive panels.

## Components

- **GlassPanel:** reusable depth surface with blur, border, shadow, and optional glow.
- **MagneticButton:** premium CTA with cursor-aware hover.
- **SectionHeader:** kinetic label, title, and lead copy.
- **MockupFrame:** browser/laptop/mobile visual shell for project presentations.
- **Terminal:** working command interface for contact and discovery.
- **CommandPalette:** keyboard-first global actions.
- **ThemeToggle:** dark/light mode with token swap.
- **CustomCursor:** elastic pointer, hover morph, and focus fallback.

## Accessibility Rules

- Respect `prefers-reduced-motion`.
- Keep all critical content available without WebGL.
- Preserve native focus states and keyboard navigation.
- Use semantic sections, headings, and link labels.
- Maintain contrast above WCAG AA for text and controls.

## Performance Rules

- Keep WebGL behind dynamic import and Suspense.
- Avoid scroll-triggered layout thrashing.
- Animate transforms and opacity first.
- Use CSS gradients for atmospheric effects where possible.
- Keep postprocessing subtle and optional.
