

# Safe Trace — Implementation Plan

## Overview
A survivor-centered website providing digital safety resources, clear privacy policies, and immediate safety tools for women experiencing technology-facilitated abuse. Built with a muted lavender and soft gray palette, humanist typography, and trauma-informed design principles.

---

## Phase 1: Core Foundation (Initial Build)

### Homepage — Mission First
- **Hero Section**: Large, comforting headline ("Your digital safety is our priority") with supporting text about being made by young women, for women
- **Calm visual design**: Muted lavender accents, soft gray backgrounds, generous white space, rounded humanist sans-serif typography
- **Primary CTAs**: "Read Our Policies" and "Find Support Resources"
- **No aggressive imagery** — soft gradients or abstract shapes that feel protective, not alarming

### Persistent Safety Elements (All Pages)
- **Safe Trace logo** (top-left) — simple, recognizable, non-corporate
- **Quick Exit button** (top-right) — redirects immediately to a neutral site (Google, weather, etc.)
- **Accessibility controls** — font size toggle, high contrast mode
- **Emergency Safety Mode button** — always visible, distinct but not alarming

### Resources Page — Immediate Help
- **No tracking or analytics** on this page
- **Plain-text mode option** for users on monitored devices
- **Sections**:
  - If your information was leaked (actionable checklists)
  - Digital self-defense (account audits, location safety, AI image risks)
  - Legal context (honest framing of what protection exists)
  - Emotional support (validating language, acknowledgment of fear and isolation)
- **Avoids "just report it"** framing — centers survivor agency

### Safety Mode — Functional Local Actions
- **One-click panel** with clear, immediate actions:
  - Clear all local browser data (cookies, storage)
  - Switch to disguised interface (calculator or notes appearance)
  - Guide to disable location sharing on device
  - Guide to revoke third-party app access
- **Works without requiring login** — pure client-side functionality
- **Fast, visible, requires no explanation**

---

## Phase 2: Policy & Purpose

### Policies Page — Manifesto-Driven
- **Headline**: "Clear policies. No hidden compromises."
- **Expandable policy cards** organized by:
  - Explicit, informed consent (no dark patterns)
  - Anti-stalking safeguards (location alerts, emergency disable)
  - Data minimization (essential data only)
  - Rapid data deletion
  - Transparency & 72-hour breach notification
  - Survivor-centered design principles
- **Research integration**: Explain why these policies exist (current laws and platforms fail survivors)
- **Companies That Agree section**: Display committed organizations with logo grid

### Our Purpose / Origin Page
- **Title**: Why Safe Trace Exists
- **Sections** (plain language, non-academic):
  - What We Saw (women being tracked, exposed, silenced)
  - What Was Missing (prevention, not reaction)
  - Why Existing Solutions Fail Survivors (paywalled privacy, reactive moderation)
  - Who We Are (young women building what the system never did)
- **Tone**: Validating, informative, not overwhelming or graphic

---

## Phase 3: Business & Research

### For Businesses Page
- **Frame doxxing as governance failure**, not niche issue
- **Explain how Safe Trace policies fill gaps** in current regulation
- **Alignment callouts**: SOC 2, ISO 27000, GDPR, Quebec Law 25
- **Commitment Form**: Businesses can submit their commitment to the policies
  - Collects company name, contact, and pledge confirmation
  - Submissions stored in database for your review before display
- **CTA**: "Commit to Safe Trace Policies"

### Research Page
- **Plain-language summary** of academic findings
- **Key statistics** with clear sourcing (expandable for detail)
- **Downloadable research paper** (PDF link)
- **Methodology note**: Feminist framework, survivor-informed lens

---

## Design Principles (Applied Throughout)

- **No dark patterns** — every interaction is clear and honest
- **No forced sign-ups** — resources accessible without accounts
- **No unnecessary data collection** — minimal footprint
- **Safety over engagement** — no metrics that compromise privacy
- **Mobile-first** — many survivors access from phones, possibly monitored
- **Hypervigilance-aware** — nothing startling, calm transitions, clear navigation

---

## Technical Notes

- **Backend Required**: Database for business commitments (using Supabase/Lovable Cloud)
- **Disguise Mode**: CSS-based transformation to calculator/notes interface
- **Quick Exit**: JavaScript redirect to neutral external site
- **Accessibility**: Built-in font scaling, contrast toggle, screen reader support
- **No analytics** on Resources page; minimal elsewhere

