import { useState } from 'react';
import { 
  IoApps, 
  IoGlobe, 
  IoPhonePortrait, 
  IoCog 
} from 'react-icons/io5';
import petchinguImage from '../assets/petchingu.png';
import myaptImage from '../assets/myapt.png';
import hdrpImage from '../assets/hdrp.png';
import eqImage from '../assets/eq.png';
import jptImage from '../assets/jpt.png'; // Import the jpt image

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: 'MyAPT',
      category: 'Web Development',
      image: myaptImage,
      isEmoji: false,
      description: 'An Apartment Management System that streamlines tasks like rent collection, maintenance, and tenant management, improving efficiency and communication.',
      technologies: ['React', 'Firebase', 'JavaScript', 'SCSS'],
      liveDemo: 'https://myaptt.netlify.app/login',
      github: 'https://github.com/clivebixby0/myapt-july8-2025-main'
    },
    {
      id: 2,
      title: 'PetChinGU',
      category: 'App Development',
      image: petchinguImage,
      isEmoji: false,
      description: 'A Pet Social Platform that connects pet lovers for adoption, lost-and-found alerts, and social interaction, creating a community that supports pet care and companionship.',
      technologies: ['React', 'AppWrite', 'JavaScript', 'SCSS'],
      github: 'https://github.com/clivebixby0/petchinguuu'
    },
    {
      id: 3,
      title: 'Heart Disease Risk Prediction',
      category: 'Machine Learning',
      image: hdrpImage,
      isEmoji: false,
      description: 'A machine learning project for predicting heart disease risk based on patient data. Models: Logistic Regression, Support Vector Classification (SVC), and Random Forest Classifier.',
      technologies: ['Python'],
      github: 'https://github.com/flatearther666/Heart-Disease-Risk-Prediction'
    },
    {
      id: 4,
      title: 'Earthquake Prediction Analysis Tool',
      category: 'Machine Learning',
      image: eqImage,
      isEmoji: false,
      description: 'A machine learning tool for analyzing earthquake data and predicting seismic activities using advanced algorithms and data visualization.',
      technologies: ['Streamlit', 'Python'],
      liveDemo: 'https://earfquake-atjsxhtyuvwrcjwyfbjyx2.streamlit.app/',
      github: 'https://github.com/clivebixby0/EARFQUAKE/blob/main/EARFQUAKE/EARFQUAKE.py'
    },
    {
      id: 5,
      title: 'Job Trends Analysis',
      category: 'Machine Learning',
      image: jptImage, // Use the actual jpt.png image
      isEmoji: false,
      description: 'A data warehousing project that analyzes over 5,000 global job postings from Google Jobs using data warehousing and mining techniques to uncover trends in in-demand skills and roles.',
      technologies: ['Python', 'PostgreSQL'],
      github: 'https://github.com/flatearther666/Analysis-of-Job-Market-Trends-Using-Google-Job-Postings'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="text-center">Our Projects</h2>
        <p className="text-center section-subtitle">Check out some of our recent work</p>
        
        <div 
          className="projects-nav-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="projects-nav-trigger">
            <span className="nav-label">Filter Projects</span>
            <div className={`nav-indicator ${isDropdownOpen ? 'open' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
          </div>
          <div className={`projects-filter-dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <div className="filter-options">
              <button 
                className={`filter-option ${filter === 'All' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('All');
                  setIsDropdownOpen(false);
                }}
              >
                <IoApps className="option-icon" />
                <span className="option-text">All Projects</span>
              </button>
              <button 
                className={`filter-option ${filter === 'Web Development' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('Web Development');
                  setIsDropdownOpen(false);
                }}
              >
                <IoGlobe className="option-icon" />
                <span className="option-text">Web Development</span>
              </button>
              <button 
                className={`filter-option ${filter === 'App Development' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('App Development');
                  setIsDropdownOpen(false);
                }}
              >
                <IoPhonePortrait className="option-icon" />
                <span className="option-text">App Development</span>
              </button>
              <button 
                className={`filter-option ${filter === 'Machine Learning' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('Machine Learning');
                  setIsDropdownOpen(false);
                }}
              >
                <IoCog className="option-icon" />
                <span className="option-text">Machine Learning</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="projects-grid">
          {projects
            .filter(project => filter === 'All' || project.category === filter)
            .map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setExpandedCard(project)}
            >
              <div className="project-image">
                {project.isEmoji ? (
                  <div className="project-emoji">{project.image}</div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                )}
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      className="btn btn-outline project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        style={{ marginRight: '8px' }}
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="btn btn-outline project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        style={{ marginRight: '8px' }}
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal Overlay for Expanded Card */}
        {expandedCard && (
          <div className={`card-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setExpandedCard(null);
              setIsClosing(false);
            }, 300);
          }}>
            <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setExpandedCard(null);
                    setIsClosing(false);
                  }, 300);
                }}
              >
                ×
              </button>
              
              <div className="modal-card">
                <div className="modal-image">
                  {expandedCard.isEmoji ? (
                    <div className="project-emoji">{expandedCard.image}</div>
                  ) : (
                    <img 
                      src={expandedCard.image} 
                      alt={expandedCard.title}
                    />
                  )}
                  <div className="project-category">{expandedCard.category}</div>
                </div>
                
                <div className="modal-content">
                  <h3 className="modal-title">{expandedCard.title}</h3>
                  <p className="modal-description">{expandedCard.description}</p>
                  
                  <div className="modal-technologies">
                    {expandedCard.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="modal-buttons">
                    {expandedCard.liveDemo && (
                      <a 
                        href={expandedCard.liveDemo} 
                        className="btn btn-outline modal-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          style={{ marginRight: '8px' }}
                        >
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {expandedCard.github && (
                      <a 
                        href={expandedCard.github} 
                        className="btn btn-outline modal-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          style={{ marginRight: '8px' }}
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;