# Three.js Scene Plan

## Goals

The Three.js layer should make the portfolio feel engineered and alive without becoming a performance liability. It should support the narrative: this developer builds systems, interfaces, and worlds.

## Hero Scene

Objects:

- Floating translucent core made from layered torus knots and glass geometry.
- Procedural particles representing connected systems.
- Pointer-reactive light rig.
- Slow camera parallax.
- Subtle bloom and chromatic edge treatment.

Interaction:

- Pointer position shifts camera target and light intensity.
- Scroll progress can later influence object scale, opacity, and rotation.
- Reduced-motion mode freezes camera parallax and simplifies animation.

Fallback:

- CSS aurora and grid background remains visible without WebGL.
- Hero copy and CTAs are always server-rendered.

## Skills Scene

Objects:

- Technology clusters represented as orbiting points.
- Lines connect related tools.
- Categories: Frontend, Backend, AI, Games, Apps, Systems.

Interaction:

- Hover reveals skill metadata in HTML overlay.
- Mobile uses a simplified list with animated tags.

## Project Mockups

Objects:

- Optional 3D glass device shells for flagship projects.
- Browser, laptop, phone, and tablet can be CSS-first for performance.
- WebGL enhancement only for featured work.

## Postprocessing

- Bloom: very low threshold and intensity.
- Chromatic aberration: subtle only during hero intro or pointer movement.
- Noise: fine-grain overlay in CSS, not heavy shader if unnecessary.

## Performance Budget

- Initial WebGL bundle loaded dynamically.
- Keep geometry procedural and low-poly.
- No large textures in phase one.
- Cap DPR at `1.6`.
- Pause non-critical animation when tab is hidden.
- Use Suspense fallback to avoid blocking page interactivity.
