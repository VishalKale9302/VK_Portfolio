import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const Skills = () => {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.id === active)?.skills ?? [];

  return (
    <section id="skills" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="skills.jsx"
          eyebrow="02."
          title="Skills &amp; Tools"
          description="A working toolkit refined through real projects — from markup to state management."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive('all')}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              active === 'all'
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-edge/15 text-muted hover:text-text'
            }`}
          >
            All
          </button>
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                active === c.id
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-edge/15 text-muted hover:text-text'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
