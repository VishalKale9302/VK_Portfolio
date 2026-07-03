import { education } from '../data/education';
import SectionTitle from './SectionTitle';
import Timeline from './Timeline';

const Education = () => {
  return (
    <section id="education" className="relative py-28">
      <div className="container-px mx-auto max-w-4xl">
        <SectionTitle
          file="education.jsx"
          eyebrow="05."
          title="Education"
          description="Academic foundation in computer applications, logged like a commit history."
        />

        <div className="mt-14">
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
};

export default Education;
