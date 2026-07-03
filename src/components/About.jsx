import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { PERSONAL } from '../data/site';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import { education } from '../data/education';
import SectionTitle from './SectionTitle';

const getCgpa = (id) => {
  const item = education.find((e) => e.id === id);
  if (!item) return 0;
  const m = String(item.score).match(/([0-9]+\.?[0-9]*)/);
  return m ? parseFloat(m[1]) : 0;
};

const stats = [
  { label: 'Projects', value: projects.length },
  { label: 'Certifications', value: certificates.length },
  { label: 'CGPA (MCA)', value: getCgpa('mca'), decimals: 2 },
  { label: 'CGPA (BCA)', value: getCgpa('bca'), decimals: 2 },
];

const Counter = ({ value, decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(v.toFixed(decimals)));
    return () => unsub();
  }, [spring, decimals]);

  return <span ref={ref}>{display}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle file="about.jsx" eyebrow="01." title="About Me" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-accent2/10 blur-2xl" />
            <div className="glass overflow-hidden rounded-3xl border p-6">
              <p className="font-mono text-xs text-muted">// professional-summary.txt</p>
              <p className="mt-4 text-sm leading-relaxed text-text/90">{PERSONAL.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-edge/15 px-3 py-1 font-mono text-[11px] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center gap-8"
          >
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I build interfaces that feel considered — componentized, accessible and fast by
              default. Currently pursuing an MCA at Savitribai Phule Pune University while
              shipping projects that pair React with clean, reusable design systems.
            </p>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-edge/10 bg-surface/50 px-4 py-5 text-center"
                >
                  <p className="font-display text-3xl font-bold text-accent">
                    <Counter value={s.value} decimals={s.decimals ?? 0} />
                    {!s.decimals && '+'}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
