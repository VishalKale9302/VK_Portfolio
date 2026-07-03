# Vishal Kale — Developer Portfolio

A modern, animated, fully responsive developer portfolio built with React, Vite and Tailwind CSS.

## Tech Stack

- **React 19 + Vite** — app shell and build tooling
- **Tailwind CSS + PostCSS** — styling, theming via CSS variables
- **Framer Motion** — scroll/viewport animations, layout transitions
- **GSAP** — orchestrated hero entrance timeline
- **Lenis** — smooth scrolling
- **React Router DOM** — routing (single page + 404 fallback)
- **React Type Animation** — hero role typing effect
- **React Tilt (react-parallax-tilt)** — project card tilt/glare
- **EmailJS** — contact form email delivery
- **React Hot Toast** — form feedback toasts
- **React Icons** — iconography

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project Structure

```
src/
  components/   Reusable UI + section components
  pages/        Route-level pages (Home, NotFound)
  hooks/        useTheme, useLenis/useActiveSection, useMousePosition
  context/      ThemeContext (light/dark, persisted to localStorage)
  data/         Content: projects, skills, education, certificates, site/nav/social
  assets/       Images
public/
  resume.pdf, favicon.svg, robots.txt, sitemap.xml, project/certificate images
```

## Notes

- Theme preference is stored in `localStorage` under `portfolio-theme` and respects
  `prefers-color-scheme` on first visit.
- Below-the-fold sections (Experience, Projects, Services, Education, Certificates,
  Contact) are code-split with `React.lazy` for faster first paint.
- Custom cursor and parallax tilt automatically disable on touch devices.
- All motion respects `prefers-reduced-motion`.
- Update `public/resume.pdf` with your real resume file, and swap the SVG placeholders
  in `public/projects/` and `public/certificates/` for real screenshots when ready.
