import { useEffect, useRef, useState } from 'react';

/**
 * A blinking "code caret" cursor — reinforcing the file-tab / editor
 * motif used throughout the site. Scales up over interactive elements.
 */
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touch);
    if (touch) return undefined;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target;
      if (target?.closest?.('a, button, [role="button"], input, textarea')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    let rafId;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot h-1.5 w-3 -translate-x-1/2 -translate-y-1/2 animate-blink bg-accent2"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ${
          hovering ? 'h-12 w-12 border-accent2' : 'h-8 w-8 border-accent/50'
        }`}
        aria-hidden="true"
      />
    </>
  );
};

export default Cursor;
