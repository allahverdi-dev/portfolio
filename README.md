# Portfolio — Allahverdi Hasanov

Personal portfolio of **Allahverdi Hasanov**, a Vibe Coder / AI-Assisted Builder from Lankaran, Azerbaijan.

🔗 **Live:** [allahverdi-dev.github.io/portfolio](https://allahverdi-dev.github.io/portfolio/)

> I turn ideas into working digital products with AI-assisted development — while learning the web from the fundamentals.

## About this site

A single-page, static portfolio presenting four shipped projects, the workflow behind them, and an honest account of where I am in learning frontend development.

The site is deliberately built as plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no dependencies to install.

## Structure

```text
portfolio/
│
├── images/
│   └── projects/           # Real project screenshots (JPEG, resized)
│
├── index.html              # The entire page
├── style.css               # Design tokens + component styles
├── script.js               # Theme toggle, mobile nav, scroll spy
├── favicon.svg             # AH monogram
└── README.md
```

## Design system

The visual design comes from a Google Stitch design system, *Vibe Builder Editorial* — editorial minimalism with a serif display face, hairline rules, and a single restrained accent.

| Token group | Implementation |
| ----------- | -------------- |
| Typography  | Libre Caslon Text (display), Hanken Grotesk (body), JetBrains Mono (labels) |
| Color       | CSS custom properties, light + dark themes |
| Spacing     | `--space-*` scale, 1280px max container |
| Shape       | 4px / 8px radii, 1px hairline borders |

Theme follows the operating system by default and can be overridden with the header toggle; the choice persists in `localStorage`.

## Featured projects

| # | Project | Type | Stack |
| - | ------- | ---- | ----- |
| 01 | [LangArt](https://langart-beta.vercel.app/) | EdTech learning platform | React · TypeScript · Vite · Tailwind CSS |
| 02 | [CineScope](https://cinescope.allahverdihesenov42.workers.dev/) | Movie discovery web app | HTML · CSS · JavaScript · TMDB API |
| 03 | [Finora](https://allahverdi-dev.github.io/finora/) | Local-first finance dashboard | HTML · CSS · Vanilla JS · IndexedDB |
| 04 | [Nota Workspace](https://allahverdi-dev.github.io/nota-workspace/) | Local-first notes workspace | HTML · CSS · Vanilla JS · IndexedDB |

## How I build

**Define** → **Design** → **Build with AI** → **Review** → **Test & debug** → **Ship**

I contribute through product direction, feature and UX decisions, prompt design, AI-assisted implementation, review, testing, debugging direction, QA, iteration, and deployment. I direct and review what gets built rather than claiming to have hand-written every line.

## Accessibility & performance

* Semantic landmarks and a logical heading hierarchy
* Skip-to-content link, keyboard-accessible navigation, visible focus states
* `prefers-reduced-motion` respected throughout
* Descriptive alt text on every screenshot
* Lazy-loaded images with explicit dimensions to avoid layout shift
* No analytics, no trackers, no third-party scripts beyond the web font

## Running locally

No build step. Serve the folder with any static server:

```bash
npx serve .
```

Or open `index.html` directly in a browser.

## Deployment

Deployed as a static site via **GitHub Pages** from the repository root.

## Contact

* GitHub: [@allahverdi-dev](https://github.com/allahverdi-dev)
* Instagram: [@itssalikk](https://www.instagram.com/itssalikk/)
* Email: allahverdihesenov42@gmail.com
