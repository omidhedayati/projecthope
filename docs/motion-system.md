# Motion System

## Principles

Motion should feel authored, not decorative. Every reveal should communicate hierarchy, orientation, or state.

- **Cinematic:** staggered entrances, soft blur, scale, and camera-like easing.
- **Responsive:** pointer movement influences light, parallax, cursor shape, and 3D camera.
- **Calm:** no abrupt bounces or novelty animation.
- **Performant:** transform, opacity, and shader uniforms over layout mutation.

## Timing

| Motion | Duration | Easing |
| --- | --- | --- |
| Micro hover | 180ms | `cubic-bezier(.2,.8,.2,1)` |
| Button magnetic return | 420ms | `power3.out` |
| Text reveal | 900ms | `power4.out` |
| Section reveal | 1200ms | `expo.out` |
| Page transition | 900ms | `power4.inOut` |
| Loading dissolve | 1100ms | `expo.inOut` |

## Scroll Choreography

1. Hero begins as a staged loading reveal.
2. About section rises through floating glass story fragments.
3. Skills become a constellation where categories orbit a central capability statement.
4. Projects pin into horizontal showcases with device mockups.
5. Game development changes the visual rhythm with a cinematic reel layout.
6. Contact resolves into a working terminal.

## GSAP Patterns

- Register `ScrollTrigger` once in a client provider.
- Scope animations with `gsap.context`.
- Kill timelines on cleanup.
- Bridge Lenis scroll updates into `ScrollTrigger.update`.
- Use data attributes like `data-reveal`, `data-parallax`, and `data-cursor`.

## Reduced Motion

When reduced motion is active:

- Disable Lenis smoothing.
- Replace pinned scenes with normal document flow.
- Disable cursor trailing and WebGL camera parallax.
- Keep content fades under 200ms.
- Preserve the loading screen as a simple brand flash.

## Cursor Behavior

- Default: small luminous dot with soft ring.
- Link/button: expands and adds label hint.
- Project preview: larger glass pill with project title.
- Terminal: switches to mono caret state.
- Touch devices: disabled.
