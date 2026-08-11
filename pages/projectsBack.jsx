import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/componentsb/Hero';
import { TechStack } from '../components/componentsb/TechStack';
import { ProjectsSection } from '../components/componentsb/ProjectsSection';
import { AboutSection } from '../components/componentsb/AboutSection';
import { ContactSection } from '../components/componentsb/ContactSection';
import { ProjectModal } from '../components/componentsb/ProjectModal';
import AmbientCanvas from '../src/components/AmbientCanvas';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-back-page relative min-h-screen overflow-hidden bg-base font-body text-ink pt-20">
      <AmbientCanvas />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 min-h-screen text-ink"
      >
        <Hero />
        <TechStack />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <AboutSection />
        <ContactSection />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </motion.div>
    </div>
  );
}
