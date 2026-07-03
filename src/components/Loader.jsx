import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + Math.random() * 18 + 6);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 350);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => onFinish?.(), 500);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [visible, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bg font-mono"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-64 sm:w-80"
          >
            <p className="mb-3 text-sm text-muted">
              <span className="text-accent2">$</span> booting portfolio.jsx
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <p className="mt-2 text-right text-xs text-muted">{Math.floor(progress)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
