import { useState, useEffect } from 'react';
import logo from '../assets/C2D (1).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    
    const sectionName = sectionId.replace('#', '');
    
    // Immediately set active section without waiting for scroll
    setActiveSection(sectionName);
    
    // Set scrolling flag to prevent scroll handler from changing active section
    setIsScrolling(true);
    
    // Manually scroll to the section
    const section = document.getElementById(sectionName);
    if (section) {
      // Use requestAnimationFrame to ensure the UI updates before scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: section.offsetTop - 120, // Increased from 100 to 120 for better positioning
          behavior: 'smooth'
        });
        
        // Reset scrolling flag after animation completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Increased timeout for better stability
      });
    } else {
      // If section not found, reset scrolling flag
      setIsScrolling(false);
    }
  };

  // Track if a manual navigation is in progress with a ref to avoid re-renders
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section during manual navigation
      if (isScrolling) return;
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      // Check if we're at the very top of the page
      if (window.scrollY < 100) {
        currentSection = 'home';
      } else {
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 150; // Adjusted offset
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.scrollY;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
          }
        });
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Only run initial position check if not during manual navigation
    if (!isScrolling) {
      handleScroll(); // Check initial position
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]); // Re-run effect when isScrolling changes

  return (
    <header className="header">
      <div className="nav-container container">
        <div className="logo-container">
          <a href="#" className="logo-text">
            <img src={logo} alt="C2D Logo" width="40" height="40" />
          </a>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#team" className={`nav-link ${activeSection === 'team' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#team')}>Team</a>
          <a href="#pricing" className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#pricing')}>Pricing</a>
          <a href="#process" className={`nav-link ${activeSection === 'process' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#process')}>Process</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;