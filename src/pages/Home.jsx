import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

const Experience = lazy(() => import('../components/Experience'));
const Projects = lazy(() => import('../components/Projects'));
const Education = lazy(() => import('../components/Education'));
const Certificates = lazy(() => import('../components/Certificates'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));

const SectionFallback = () => (
  <div className="flex h-64 items-center justify-center">
    <span className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
  </div>
);

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
