import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { NAV_LINKS, SOCIALS, PERSONAL } from '../data/site';
import { useActiveSection } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

const Navbar = ({ scrollProgress = 0 }) => {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav className="glass container-px flex items-center justify-between py-3.5 border-b">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-mono text-base font-semibold tracking-tight"
          aria-label={`${PERSONAL.name} — home`}
        >
          <span className="text-accent">&lt;</span>
          {PERSONAL.name.split(' ')[0]}
          <span className="text-accent2">.dev</span>
          <span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 font-mono text-[13px] transition-colors ${
                  activeId === link.id ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-accent"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <FiLinkedin size={18} />
          </a>
          <ThemeToggle />
          <Button href={PERSONAL.resumeUrl} target="_blank" icon={FiDownload} className="!px-5 !py-2.5 text-xs">
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="text-text"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[4.5rem] z-50 overflow-hidden border-b border-slate-800/70 bg-slate-950 text-white shadow-2xl lg:hidden"
            >
              <ul className="container-px flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`block w-full py-2.5 text-left font-mono text-sm ${
                        activeId === link.id ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="mt-2 flex items-center gap-5">
                  <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted">
                    <FiGithub size={20} />
                  </a>
                  <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted">
                    <FiLinkedin size={20} />
                  </a>
                  <Button href={PERSONAL.resumeUrl} target="_blank" icon={FiDownload} className="!px-5 !py-2.5 text-xs">
                    Resume
                  </Button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
