import { motion } from 'framer-motion';

/**
 * A vertical timeline styled like a git log — each entry reads as a
 * commit, which fits a developer's education/experience history well.
 */
const Timeline = ({ items = [] }) => {
  return (
    <ol className="relative ml-3 border-l border-dashed border-edge/20 pl-8">
      {items.map((item, i) => (
        <motion.li
          key={item.id ?? i}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pb-12 last:pb-0"
        >
          <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg">
            <span className="h-2 w-2 rounded-full bg-accent2" />
          </span>

          <div className="rounded-xl border border-edge/10 bg-surface/50 p-5 transition-colors hover:border-accent/30">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs text-accent">
                commit &middot; {item.year}
              </p>
              {item.score && (
                <span className="rounded-full bg-accent2/10 px-2.5 py-0.5 font-mono text-[11px] text-accent2">
                  {item.score}
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold sm:text-xl">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.institute}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
};

export default Timeline;
