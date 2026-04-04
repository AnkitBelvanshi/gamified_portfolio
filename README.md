# ⛏️ ANKIT.DEV — Gamified Developer Portfolio
My portfolio but make it Minecraft. Vibe-coded from scratch, pixel-sharp by choice.
A voxel-themed, gamified developer portfolio built with **Next.js 16** and **Tailwind CSS v4**. The entire UI is designed as a Minecraft-inspired open-world interface — treating navigation as an inventory hotbar, projects as quest logs, skills as craftable artifacts, and contact as a mission dispatch center.

**🌐 Live:** [portfolio-app-aabbccs-projects-690a9c12.vercel.app](https://portfolio-app-aabbccs-projects-690a9c12.vercel.app)

---

![Homepage Preview](https://portfolio-app-aabbccs-projects-690a9c12.vercel.app/og-image.png)

## 🗺️ Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Hero** | Character intro with floating voxel island, stats panel, and glassmorphism overlay |
| `/projects` | **Quest Log** | 4 data science projects presented as quests with difficulty ratings and XP rewards |
| `/skills` | **Skill Inventory** | Interactive hotbar slots with skill levels, progress bars, and "Legendary Artifact" detail view |
| `/contact` | **Mission Dispatch** | Contact portals (GitHub, LinkedIn, Email) + Formspree-powered quest request form |

## 🎨 Design System — "Voxel Forge"

Built on the **Voxel Editorial** design system with strict rules:

- **0px border-radius** everywhere — sharp voxel corners only
- **4–8px solid offset shadows** instead of CSS box-shadows for 3D block depth
- **No 1px borders** — boundaries defined by color-block transitions
- **Transitions ≤ 150ms** — snappy, mechanical interactions

### Color Palette

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#006E1C` | Grass / Life / Main actions |
| Secondary | `#7A5649` | Earth / Foundation / Structural elements |
| Tertiary | `#0C6780` | Water / Depth / Interactive accents |
| Background | `#87CEEB` | Sky canvas with checkerboard pattern |

### Typography

| Usage | Font |
|-------|------|
| Headlines & Labels | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) |
| Body & Descriptions | [Work Sans](https://fonts.google.com/specimen/Work+Sans) |

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config)
- **Icons:** [Material Symbols](https://fonts.google.com/icons)
- **Contact Form:** [Formspree](https://formspree.io/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Design:** [Google Stitch](https://stitch.withgoogle.com/) (initial screen generation)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css             # Voxel Forge design tokens
│   ├── layout.js               # Root layout (fonts, nav, footer)
│   ├── page.js                 # / — Hero
│   ├── projects/
│   │   └── page.js             # /projects — Quest Log
│   ├── skills/
│   │   ├── layout.js           # Metadata
│   │   └── page.js             # /skills — Skill Inventory
│   └── contact/
│       ├── layout.js           # Metadata
│       └── page.js             # /contact — Mission Dispatch
└── components/
    ├── Navbar.js                # Inventory Hotbar (site-wide nav)
    ├── Footer.js                # Footer with social links
    └── SideHUD.js               # Character panel sidebar
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ankitbelvanshi/portfolio-app.git
cd portfolio-app

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Other Commands

```bash
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📬 Contact

- **GitHub:** [github.com/ankitbelvanshi](https://github.com/ankitbelvanshi)
- **LinkedIn:** [linkedin.com/in/ankitbelvanshi](https://linkedin.com/in/ankitbelvanshi)
- **Email:** [ankitbelvanshi@email.com](mailto:ankitbelvanshi@email.com)

---

<p align="center">
  <code>ANKIT_DEV v1.0.0</code> · © 2026 Ankit Belvanshi · Crafted with Code ⛏️
</p>
