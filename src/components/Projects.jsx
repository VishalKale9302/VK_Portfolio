import { projects } from '../data/projects';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionTitle
          file="projects.jsx"
          eyebrow="04."
          title="Projects"
        />
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
