

## Plan: Replace SafeTrace App Placeholder with Links to Live App

The SafeTrace App is now live at **app.safetrace.ca**. The current site has a placeholder page and an internal floating button — both should point users to the live app instead.

### Changes

**1. Update the floating button (Layout.tsx)**
Change the persistent bottom-right button from an internal `<Link to="/safetrace-app">` to an external `<a href="https://app.safetrace.ca">` that opens in a new tab.

**2. Update the SafeTrace App page (SafeTraceApp.tsx)**
- Replace the "Coming Soon" bottom section with a prominent CTA button linking to `https://app.safetrace.ca` (e.g. "Launch SafeTrace App" / "Try It Now").
- Keep the how-it-works steps and feature cards — they serve as a useful explainer before users go to the live app.
- Add a secondary CTA at the top hero section as well, so users can go straight to the app.

**3. Update the homepage card (Index.tsx)**
The SafeTrace App card in the "See what we're building" grid currently links to `/safetrace-app`. Keep it linking to the internal explainer page (so users learn about it first), but optionally the card description can be updated to reflect that the app is now live.

**4. Update translations (all 6 i18n files)**
- Replace `comingSoonTitle`, `comingSoonDesc`, and `launchComingSoon` with new "live" text, e.g.:
  - `launchTitle`: "Try SafeTrace App"
  - `launchDesc`: "The SafeTrace App is live. Scan your photos for hidden risks before you post — free, private, and built for survivors."
  - `launchButton`: "Launch SafeTrace App"
- Update `safeTraceAppDesc` on the homepage to reflect the app is live.
- Translate equivalents for FR, ZH, AR, ES, IT.

### Files to modify
- `src/components/layout/Layout.tsx` — external link
- `src/pages/SafeTraceApp.tsx` — replace coming soon with live CTA
- `src/pages/Index.tsx` — update card description
- `src/i18n/en.ts`, `fr.ts`, `zh.ts`, `ar.ts`, `es.ts`, `it.ts` — updated copy

