import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import BootScreen from '@/components/ui/BootScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import DeployPipeline from '@/components/sections/DeployPipeline';
import DevOpsLab from '@/components/sections/DevOpsLab';
import Projects from '@/components/sections/Projects';
import KubernetesCluster from '@/components/sections/KubernetesCluster';
import ControlCenter from '@/components/sections/ControlCenter';
import Terminal from '@/components/sections/Terminal';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [booted, setBooted] = useState(() => {
    return typeof window !== 'undefined' && sessionStorage.getItem('booted') === '1';
  });

  const handleBootDone = () => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  };

  return (
    <>
      {!booted && <BootScreen onDone={handleBootDone} />}
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <DeployPipeline />
        <DevOpsLab />
        <Projects />
        <KubernetesCluster />
        <ControlCenter />
        <Terminal />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
