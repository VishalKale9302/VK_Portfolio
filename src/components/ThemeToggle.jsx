import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      className="relative flex h-8 w-14 items-center rounded-full border border-edge/15 bg-surface2 px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white"
        style={{ marginLeft: isDark ? 0 : 'auto' }}
      >
        {isDark ? <FiMoon size={13} /> : <FiSun size={13} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
