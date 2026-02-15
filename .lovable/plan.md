

## Homepage Video Background + Tagline Update

### Changes

**1. Copy video to project**
- Copy `user-uploads://20260215_1537_01khhg84kkf50snbyhpwf1x756.mp4` to `public/videos/hero-bg.mp4` (using `public/` since video files are large and shouldn't go through the JS bundler)

**2. Update hero section in `src/pages/Index.tsx`**
- Add a `<video>` element as a background layer in the hero section, positioned absolutely behind the content with:
  - `autoPlay`, `muted`, `loop`, `playsInline` attributes
  - 50% opacity (`opacity-50`)
  - `object-cover` to fill the section
  - Placed behind the gradient overlay (`-z-20`) so it sits beneath the existing gradient
- Replace the tagline text from "Made by young women, to protect women." to **"Because Every Pixel Tells a Story."**

### Technical Details

The video element will be structured as:
```
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 -z-20">
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

This keeps the existing gradient overlay on top of the video for readability, while the video plays subtly in the background at half transparency.

