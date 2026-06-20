import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/componentsb/Navbar';
import { Hero } from '../components/componentsb/Hero';
import { TechStack } from '../components/componentsb/TechStack';
import { ProjectsSection } from '../components/componentsb/ProjectsSection';
import { AboutSection } from '../components/componentsb/AboutSection';
import { ContactSection } from '../components/componentsb/ContactSection';
import { ProjectModal } from '../components/componentsb/ProjectModal';
import { BackgroundGradientAnimation } from '../components/Ui/background-gradient-animation';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(14, 42, 71)"
      gradientBackgroundEnd="rgb(15, 23, 42)"
      firstColor="59, 130, 246"
      secondColor="168, 85, 247"
      thirdColor="56, 189, 248"
      fourthColor="129, 140, 248"
      fifthColor="34, 197, 94"
      pointerColor="59, 130, 246"
      blendingValue="screen"
      containerClassName="relative min-h-screen overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 min-h-screen bg-slate-950/20 backdrop-blur-xl text-white"
      >
        <Navbar />
        <Hero />
        <TechStack />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <AboutSection />
        <ContactSection />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </motion.div>
    </BackgroundGradientAnimation>
  );
}
