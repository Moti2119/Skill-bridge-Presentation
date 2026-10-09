# SkillBridge Ethiopia — Hackathon Presentation

A standalone, cinematic pitch deck for **SkillBridge Ethiopia**. Runs separately from the main app on port **3001**.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber (intro / thank-you globe)

## Setup

```bash
cd presentation
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Production build

```bash
npm run build
npm start
```

## Customize before your pitch

Edit `lib/team.ts` with your real group name and team member names.

## Navigation

- **Scroll** vertically — slides use scroll-snap (fullscreen sections).
- **Side nav** (desktop) — jump to any slide via anchor links.

## Slides

1. Introduction — team, Cursor SDK badge, 3D globe
2. The Problem — stats and emotional quote
3. The Solution — platform overview
4. Cursor SDK Integration — graduate & employer pipelines
5. Graduate AI Assistant — dashboard mockup
6. Employer Fairness AI — fairness score & warnings
7. Multilingual AI Chat — languages + chat UI
8. Impact — metrics and mission
9. Future Vision — roadmap
10. Thank You — cinematic close

## Project structure

```
presentation/
├── app/                 # Next.js layout & page
├── components/
│   ├── effects/         # Globe, particles
│   ├── presentation/    # Shell, nav, orchestrator
│   ├── slides/          # Slide01–Slide10
│   └── ui/              # Badge, etc.
└── lib/                 # motion, team, slides config
```
