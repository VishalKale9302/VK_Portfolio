import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const availability = [
  'Available for Internship',
  'Frontend Developer',
  'React JS Developer',
  'Web Developer',
  'Freelance',
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="experience.jsx"
          eyebrow="03."
          title="Experience"
          description="Early in my career and actively looking to bring fresh energy to a product team."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-edge/10 bg-surface/50 p-8 sm:p-12"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent2/15 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent2/30 bg-accent2/10 px-4 py-1.5 font-mono text-xs text-accent2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
              </span>
              Open to Opportunities
            </span>

            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              No professional experience yet — just momentum.
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              I've spent my time building real, working applications instead of tutorials.
              Ready to bring that hands-on foundation to a team as an intern, junior frontend
              developer, or freelance collaborator.
            </p>

            <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {availability.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-edge/10 bg-surface2/60 px-4 py-3 font-mono text-xs"
                >
                  <FiCheckCircle className="shrink-0 text-accent2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
