import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable
        glareMaxOpacity={0.08}
        glareColor="#7C5CFF"
        glarePosition="all"
        scale={1.015}
        transitionSpeed={1200}
        className="h-full"
      >
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge/10 bg-surface/60 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgb(var(--accent)/0.45)]">
          <div className="relative overflow-hidden">
            <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
              {project.file}
            </div>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-6">
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{project.description}</p>

            {project.features?.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-edge/15 px-2.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 pt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                aria-label={`View live demo of ${project.title}`}
              >
                Live Demo <FiArrowUpRight />
              </a>
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
