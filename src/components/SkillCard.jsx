import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaMobileAlt,
  FaGitAlt,
  FaGithub,
  FaCode,
} from 'react-icons/fa';
import { SiJavascript, SiRedux, SiPostman, SiNetlify, SiVercel } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const ICON_SETS = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaMobileAlt,
  FaGitAlt,
  FaGithub,
  FaCode,
  SiJavascript,
  SiRedux,
  SiPostman,
  SiNetlify,
  SiVercel,
  RiTailwindCssFill,
  VscVscode,
  TbApi,
};

const RADIUS = 26;
const CIRC = 2 * Math.PI * RADIUS;

const SkillCard = ({ skill, index }) => {
  const Icon = ICON_SETS[skill.icon] ?? FaCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col items-center gap-3 rounded-xl border border-edge/10 bg-surface/60 p-5 text-center transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_0_35px_-12px_rgb(var(--accent)/0.6)]"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <svg width="64" height="64" className="-rotate-90">
          <circle
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="4"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={RADIUS}
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.05, ease: 'easeOut' }}
          />
        </svg>
        <Icon className="absolute text-2xl text-accent transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div>
        <p className="font-display text-sm font-semibold">{skill.name}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
