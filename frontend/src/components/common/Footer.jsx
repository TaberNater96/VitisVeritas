import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-brand-title">Vitis Veritas</h3>
            <p className="footer-brand-subtitle">The truth of wine</p>
            <p className="footer-description">
              Exploring the special relationship between land and wine in Oregon's 
              famous Willamette Valley AVA through interactive technology and educational content.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section footer-nav">
            <h4 className="footer-section-title">Explore</h4>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link to="/" className="footer-nav-link">Home</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/terroir" className="footer-nav-link">Tasting The Terroir</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/alchemy" className="footer-nav-link">The Alchemy Of Wine</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/avas" className="footer-nav-link">AVAs</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/about" className="footer-nav-link">About</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section footer-resources">
            <h4 className="footer-section-title">Open Source Data</h4>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <a 
                  href="https://www.oregonwine.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-nav-link external-link"
                >
                  Oregon Wine Board
                </a>
              </li>
              <li className="footer-nav-item">
                <a 
                  href="https://www.ttb.gov/wine/american-viticultural-areas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-nav-link external-link"
                >
                  TTB AVA Database
                </a>
              </li>
              <li className="footer-nav-item">
                <a 
                  href="https://www.usda.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-nav-link external-link"
                >
                  USDA
                </a>
              </li>
              <li className="footer-nav-item">
                <a 
                  href="https://www.usgs.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-nav-link external-link"
                >
                  USGS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div className="footer-section footer-contact">
            <h4 className="footer-section-title">About This Project</h4>
            <p className="footer-contact-text">
              Created as a free educational resource for wine enthusiasts and students of viticulture and software engineering. Built from 
              scratch with modern web development and data engineering technologies/techniques.
            </p>
            <div className="footer-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Mapbox GL JS</span>
              <span className="tech-badge">PostGIS</span>
              <span className="tech-badge">Jupyter</span>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright-container">
              <p className="footer-copyright">
                © {currentYear} Vitis Veritas. Created by{' '}
                <a 
                  href="https://www.linkedin.com/in/elijah-taber-17377b2a9/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-author-link"
                >
                  Elijah Taber
                </a>
              </p>
              <div className="footer-social-links">
                <a 
                  href="https://github.com/TaberNater96" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link github-link"
                  aria-label="GitHub Profile"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/elijah-taber-17377b2a9/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link linkedin-link"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="footer-disclaimer">
              <em>"In vino veritas"</em> — Educational use only. Please drink responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
