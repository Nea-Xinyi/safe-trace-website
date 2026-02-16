## Plan: Restore Title Spacing + Add Dark Mode

### 1. Restore Purpose Page Title Spacing

The hero section on the Our Purpose page was previously compressed too aggressively. The section titles ("What We Saw", "What Was Missing", etc.) should remain in their current positions within the cards -- the issue is the gap between the hero title and the first card module. I'll restore more natural padding to the hero section (back to something like `py-12 md:py-16`) while keeping the card-to-card spacing tight.

### 2. Add Dark Mode Toggle

A dark/light mode toggle will be added to the header (next to the accessibility controls) across the entire site.

**What changes:**

- **New component**: `src/components/layout/ThemeToggle.tsx` -- a simple Sun/Moon icon button that toggles a `dark` class on the `<html>` element and persists the choice in localStorage.
- **Header update** (`src/components/layout/Header.tsx`): Add the ThemeToggle button next to AccessibilityControls.
- **Homepage header** (`src/pages/Index.tsx`): Add the ThemeToggle button to the homepage's custom header bar as well.

### 3. Dark Mode Color Tuning

Update the `.dark` CSS variables in `src/index.css`:

- **Background**: Very dark grey/near-black (e.g., `0 0% 7%` or similar)
- **Primary (purple)**: Switch to a light pastel purple (e.g., `270 60% 78%`) so it reads clearly on the dark background
- **Card, popover backgrounds**: Dark grey and purple tones
- **Foreground text**: Light grey/white for readability
- **Muted foreground**: Lighter value so text remains legible

---

### Technical Details

**Files to create:**

- `src/components/layout/ThemeToggle.tsx` -- Toggle button using `Sun`/`Moon` icons from lucide-react. Reads/writes `localStorage` for persistence and toggles the `dark` class on `document.documentElement`.

**Files to modify:**

- `src/index.css` -- Update `.dark` block with very dark grey background and pastel purple primary colors
- `src/components/layout/Header.tsx` -- Import and render `ThemeToggle` next to `AccessibilityControls`
- `src/pages/Index.tsx` -- Add `ThemeToggle` to the homepage's custom header controls
- `src/pages/Purpose.tsx` -- Restore hero section padding to `py-12 md:py-16` to give proper spacing between the page title and the content modules below