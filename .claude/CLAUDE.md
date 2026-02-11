# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rilo Web is a **Next.js 16 landing page** project for Rilo, an AI payday coaching product targeting Australian users. The goal is a 14-day A/B test measuring waitlist email conversion. A comprehensive PRD exists at `.claude/PRD.MD` — treat it as the source of truth for what to build.

**Current state:** The repo has one initial Create Next App commit. Source files have been deleted from the working directory — only `.git`, `.gitignore`, and `.next` remain. Restore boilerplate with `git restore .`, but the real work is building from the PRD specs.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # eslint
```

No test framework is configured. Dependencies must be installed (`npm install`) after restoring files.

## Tech Stack (committed)

- **Next.js 16.1.6** with App Router, **React 19.2.3**, **TypeScript ^5** (strict mode)
- **React Compiler** enabled via `babel-plugin-react-compiler`
- **ESLint 9** flat config with `eslint-config-next` (core web vitals + TypeScript)
- **Path alias:** `@/*` → `./src/*` (in tsconfig.json)
- **Fonts:** Geist + Geist Mono via `next/font/google` (in initial boilerplate)

## PRD Target Architecture

The PRD (`.claude/PRD.MD`) specifies the following — none of this is implemented yet:

- **Styling:** Tailwind CSS v4 (needs adding to deps)
- **Backend:** Supabase for waitlist storage, PostHog/Plausible for analytics
- **Layout:** 7-section single scroll page: Navbar → Hero → Chat Demo → Value Props → Social Proof → Waitlist Form → Footer
- **Key component:** Interactive RiloChatDemo — a branching conversation state machine with typing animations, representing the core product experience
- **Design system:** Dark theme (#0d0d0d), gold accents (#a78b71), glassmorphism, Inter + Playfair Display fonts

## Critical PRD Constraints

These are non-obvious requirements from the PRD that affect all implementation work:

- **Tone:** Australian English — "fortnightly" not "biweekly", "mate" not "buddy", "pay cycle" not "paycheck"
- **Words to avoid in copy:** "budget", "track/tracking", "revolutionary", "cutting-edge", "AI-powered", "optimize"
- **Positioning:** Coach, not tracker. Conversations, not dashboards. Never imply the user is bad with money.
- **Performance:** LCP <2.0s, CLS <0.1, Lighthouse 90+, page weight <500KB excluding fonts
- **Success metrics:** 8%+ waitlist conversion, 50%+ demo engagement, 30%+ demo completion
- **Accessibility:** WCAG AA contrast, 44px mobile touch targets, `prefers-reduced-motion` support
