import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable button with a magnetic hover pull and a click ripple.
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  target,
  icon: Icon,
  ...rest
}) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty('--mx', `${x * 0.3}px`);
    el.style.setProperty('--my', `${y * 0.3}px`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  const handleClick = (e) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x, y, size }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);
    }
    onClick?.(e);
  };

  const base =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-mono text-sm font-medium tracking-tight px-7 py-3.5 transition-transform duration-200 ease-out will-change-transform';

  const variants = {
    primary: 'bg-accent text-white shadow-[0_0_0_1px_rgb(var(--accent)/0.4)] hover:shadow-[0_0_30px_-6px_rgb(var(--accent)/0.8)]',
    outline:
      'border border-edge/20 text-text hover:border-accent/60 hover:text-accent',
    ghost: 'text-text hover:text-accent',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      type={!href ? type : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
      whileTap={{ scale: 0.94 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="text-base" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animation: 'ripple 650ms ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          from { transform: scale(0); opacity: 0.6; }
          to { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </Component>
  );
};

export default Button;
