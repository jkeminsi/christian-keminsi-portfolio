# Christian Jordan Keminsi — Engineering Portfolio

> **Full-Stack Software Engineer · Software Architecture · AI-Powered Products**

A dark-mode, high-impact personal engineering portfolio and showcase built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## ⚡ Key Highlights

- **Aesthetics**: Dark technical minimalism (`#0A0A0A` background, `#111111` surfaces, `#262626` borders, `#3B82F6` electric blue accent).
- **Flagship Case Studies**: 6 in-depth architectural case studies (AMR Clinical AI, AFOS Offline-First Sports Platform, MesDoh FinTech, PharmaProxi HealthTech, Academic Management, and Football Talent Network).
- **Deep Inspection Modals**: Click on any project to explore problem statements, system schemas, architectural decisions, and metric validations.
- **Interactive Architecture Lab**: Interactive blueprints for Offline-First Edge Sync, Machine Learning Inference Pipelines, and Modular SaaS Microservices.
- **"How I Build" Pipeline**: 5-step interactive product lifecycle pipeline (Understand → Design → Architect → Build → Ship).
- **Command Palette**: `Cmd+K` or `Ctrl+K` for instant spotlight navigation across projects, sections, and repositories.
- **Centralized Data Model**: Easily update bio, projects, and tech stack in `src/data/portfolioData.ts`.
- **GitHub Profile Vitrine**: Ready-to-use profile README located at `github_profile/README.md`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio/
├── github_profile/
│   └── README.md              # Template for github.com/<username>/README.md
├── src/
│   ├── app/
│   │   ├── globals.css        # Dark theme, glow effects, hairline borders
│   │   ├── layout.tsx         # SEO, OpenGraph metadata, JSON-LD Schema
│   │   └── page.tsx           # Single-page orchestrator
│   ├── components/
│   │   ├── Navbar.tsx         # Glassmorphism header + status badge
│   │   ├── Hero.tsx           # High-impact copy + engineering terminal card
│   │   ├── About.tsx          # Full product lifecycle narrative & domains
│   │   ├── Expertise.tsx      # 6 structured engineering capability cards
│   │   ├── FeaturedProjects.tsx# 6 flagship case studies with category filtering
│   │   ├── ProjectCard.tsx    # Summary card with metrics & highlights
│   │   ├── ProjectModal.tsx   # Detailed technical inspection modal
│   │   ├── HowIBuild.tsx      # 5-stage interactive engineering pipeline
│   │   ├── EngineeringLab.tsx # Interactive architecture blueprints
│   │   ├── TechStack.tsx      # Curated stack by domain
│   │   ├── Contact.tsx        # Direct email copy & inquiry form
│   │   ├── Footer.tsx         # Minimalist technical footer
│   │   └── CommandPalette.tsx # Cmd+K / Ctrl+K keyboard navigation
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data (projects, bio, pipeline)
│   ├── lib/
│   │   └── utils.ts           # Class merging helper
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── tailwind.config.ts         # Theme tokens & custom color definitions
├── tsconfig.json              # TypeScript strict configuration
└── package.json
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repo on [Vercel](https://vercel.com).
3. Next.js App Router will be detected automatically and deployed instantly.

### GitHub Pages
You can export static HTML using `output: 'export'` in `next.config.mjs` and deploy via GitHub Actions.
