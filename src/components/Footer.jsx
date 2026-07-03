import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { NAV_LINKS, SOCIALS, PERSONAL } from '../data/site';

const Footer = ({ lenis }) => {
  const year = new Date().getFullYear();

  const handleTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-edge/10 bg-surface/30 py-14">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <a href="#home" className="font-mono text-lg font-semibold">
              <span className="text-accent">&lt;</span>
              {PERSONAL.name.split(' ')[0]}
              <span className="text-accent2">.dev</span>
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Frontend Developer crafting responsive, animated interfaces with React.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent">
                <FiGithub size={18} />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
                <FiLinkedin size={18} />
              </a>
              <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="text-muted transition-colors hover:text-accent">
                <FiMail size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Quick links">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">Quick Links</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={handleTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-edge/15 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FiArrowUp />
          </button>
        </div>

        <div className="mt-10 border-t border-edge/10 pt-6 text-center font-mono text-xs text-muted sm:text-left">
          © {year} {PERSONAL.name}. Built with React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
