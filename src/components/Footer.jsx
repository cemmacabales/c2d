import LightRays from './LightRays';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* LightRays positioned at bottom with 180-degree rotation */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: 'rotate(180deg)',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={0.8}
          saturation={0.7}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.1}
          distortion={0.05}
          className="footer-light-rays"
        />
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#" className="footer-logo">C2D</a>
            <p>We are a group of passionate Computer Science students specializing in web development, mobile app development, and UI/UX design.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/c2d.tech/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:createcodedevelop@gmail.com" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
              <a href="tel:+639662678981" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-container">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li>Email: createcodedevelop@gmail.com</li>
              <li>Instagram: @c2d.tech</li>
              <li>Phone: +63 966 267 8981</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} C2D - Create. Code. Develop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;