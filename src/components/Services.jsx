import { motion } from 'framer-motion';
import { FiLayout, FiCode, FiSmartphone, FiZap } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const services = [
  {
    icon: FiLayout,
    title: 'UI Development',
    description:
      'Turning designs into pixel-accurate, reusable React components with Tailwind CSS.',
  },
  {
    icon: FiCode,
    title: 'App Architecture',
    description:
      'Structuring scalable frontend codebases with clean state management via Redux Toolkit.',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description:
      'Interfaces that hold up across breakpoints — mobile-first, tested, and accessible.',
  },
  {
    icon: FiZap,
    title: 'API Integration',
    description:
      'Connecting frontends to REST APIs with resilient loading, error and empty states.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="services.jsx"
          eyebrow="07."
          title="What I Can Help With"
          description="The parts of a product I enjoy owning most."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: -0.5 }}
              className="rounded-2xl border border-edge/10 bg-surface/50 p-6 transition-shadow hover:border-accent/30 hover:shadow-[0_20px_50px_-24px_rgb(var(--accent)/0.5)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
