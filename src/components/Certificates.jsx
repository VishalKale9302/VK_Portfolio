import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { certificates } from '../data/certificates';
import SectionTitle from './SectionTitle';

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="certificates.jsx"
          eyebrow="06."
          title="Certificates"
          description="Formal credentials that back up hands-on project work."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-edge/10 bg-surface/50 transition-shadow hover:shadow-[0_20px_50px_-20px_rgb(var(--accent)/0.4)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-bg/70 text-accent backdrop-blur">
                  <FiAward />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
