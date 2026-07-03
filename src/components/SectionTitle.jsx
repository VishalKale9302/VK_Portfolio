import { motion } from 'framer-motion';

/**
 * Every section is framed like an open file tab in a code editor —
 * a small nod to the fact that this is, quite literally, a developer's work.
 */
const SectionTitle = ({ file, eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 rounded-t-md border border-b-0 border-edge/15 bg-surface px-3 py-1.5 font-mono text-xs text-muted ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-accent2" />
        {file}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="border-t border-edge/15 bg-surface/40 px-3 pb-5 pt-3 font-display text-3xl font-semibold sm:text-4xl md:text-5xl"
      >
        {eyebrow && <span className="mr-2 text-accent">{eyebrow}</span>}
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-2 max-w-xl text-sm text-muted sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
