import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Initializes Lenis smooth scrolling once for the app and exposes
 * global scroll progress (0-1) for a progress bar.
 */
export const useLenis = () => {
  const lenisRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ({ progress: p }) => setProgress(p));

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return { lenis: lenisRef.current, progress };
};

/**
 * Tracks which section id is currently active in the viewport,
 * useful for the navbar's active-link indicator.
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers = [];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
};
