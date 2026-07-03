import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import Particles from './Particles';
import AnimatedBackground from './AnimatedBackground';
import Button from './Button';
import { PERSONAL } from '../data/site';

const floatingIcons = [
  { Icon: FaReact, top: '12%', left: '6%', color: 'text-[#61DAFB]', delay: 0 },
  { Icon: SiJavascript, top: '22%', left: '90%', color: 'text-[#F7DF1E]', delay: 0.6 },
  { Icon: FaHtml5, top: '68%', left: '4%', color: 'text-[#E44D26]', delay: 1.1 },
  { Icon: FaCss3Alt, top: '78%', left: '92%', color: 'text-[#2965F1]', delay: 1.6 },
  { Icon: SiTailwindcss, top: '48%', left: '95%', color: 'text-[#38BDF8]', delay: 2.1 },
  { Icon: FaGitAlt, top: '85%', left: '48%', color: 'text-[#F1502F]', delay: 2.6 },
];

const Hero = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        headingRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 }
      )
        .fromTo(
          subRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          '-=0.55'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { x: 90, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1 },
          '-=0.9'
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <AnimatedBackground />
      <Particles count={70} className="opacity-70" />

      {floatingIcons.map(({ Icon, top, left, color, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden animate-float text-3xl md:block ${color}`}
          style={{ top, left, animationDelay: `${delay}s` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 1 + delay, duration: 0.8 }}
          aria-hidden="true"
        >
          <Icon />
        </motion.div>
      ))}

      <div className="container-px relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p ref={subRef} className="mb-4 font-mono text-sm text-accent">
            <span className="text-accent2">const</span> greeting = "Hi, I'm"
          </p>
          <h1
            ref={headingRef}
            className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            <span className="text-gradient">{PERSONAL.name}</span>
          </h1>
          <div className="mt-4 font-display text-2xl font-medium text-text sm:text-3xl md:text-4xl">
            <TypeAnimation
              sequence={PERSONAL.roles.flatMap((role) => [role, 1800])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
            />
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {PERSONAL.summary}
          </p>

          <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={PERSONAL.resumeUrl} target="_blank" icon={FiDownload}>
              Download Resume
            </Button>
            <Button
              variant="outline"
              icon={FiArrowRight}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
          </div>
        </div>

        <div ref={imageRef} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] border p-2">
            <div className="flex items-center gap-1.5 px-3 py-2 font-mono text-[10px] text-muted">
              <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
              <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
              <span className="h-2 w-2 rounded-full bg-[#28C840]" />
              <span className="ml-2">profile.jsx</span>
            </div>
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-surface2 to-surface font-display text-8xl font-bold text-accent/30">
              VK
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-muted sm:flex">
        <span>scroll</span>
        <span className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
