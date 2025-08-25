import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dock from './components/Dock'
import { VscHome, VscPerson, VscTools, VscProject, VscTag, VscGitPullRequest, VscMail } from 'react-icons/vsc'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToSection('hero') },
    { icon: <VscPerson size={18} />, label: 'About', onClick: () => scrollToSection('about') },
    { icon: <VscTools size={18} />, label: 'Services', onClick: () => scrollToSection('services') },
    { icon: <VscProject size={18} />, label: 'Projects', onClick: () => scrollToSection('projects') },
    { icon: <VscTag size={18} />, label: 'Pricing', onClick: () => scrollToSection('pricing') },
    { icon: <VscGitPullRequest size={18} />, label: 'Process', onClick: () => scrollToSection('process') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <>
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Services id="services" />
        <Projects id="projects" />
        <Pricing id="pricing" />
        <Process id="process" />
        <Contact id="contact" />
      </main>
      <Footer />
      
      {/* Vertical Right-side Dock Navigation */}
      <div className="vertical-dock-container">
        <Dock
          items={dockItems}
          panelHeight={450}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </>
  )
}

export default App
