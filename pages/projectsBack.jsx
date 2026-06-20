import { useState } from 'react';
import { Navbar } from '../components/componentsb/Navbar';
import { Hero } from '../components/componentsb/Hero';
import { TechStack } from '../components/componentsb/TechStack';
import { ProjectsSection } from '../components/componentsb/ProjectsSection';
import { AboutSection } from '../components/componentsb/AboutSection';
import { ContactSection } from '../components/componentsb/ContactSection';
import { ProjectModal } from '../components/componentsb/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <AboutSection />
      <ContactSection />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
