import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Navigation and Info */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h3 className="footer-brand-title">Vitis Veritas</h3>
            <p className="footer-brand-subtitle">The Truth of Wine</p>
            <p className="footer-description">
              Exploring the intricate relationship between land and wine in Oregon's 
              renowned Willamette Valley through interactive maps and educational content.
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
                <Link to="/varietals" className="footer-nav-link">Wine Varietals</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/experiences" className="footer-nav-link">Experiences</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/sommelier" className="footer-nav-link">The Sommelier Engine</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/behind-the-vine" className="footer-nav-link">Behind The Vine</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/about" className="footer-nav-link">About</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section footer-resources">
            <h4 className="footer-section-title">Resources</h4>
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
                  href="https://www.willamettewines.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-nav-link external-link"
                >
                  Willamette Valley Wineries
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
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div className="footer-section footer-contact">
            <h4 className="footer-section-title">About This Project</h4>
            <p className="footer-contact-text">
              Created as an educational resource for wine enthusiasts and students 
              of viticulture. Built with modern web technologies and open data.
            </p>
            <div className="footer-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Mapbox GL JS</span>
              <span className="tech-badge">PostGIS</span>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Vitis Veritas. Created by{' '}
              <a 
                href="https://github.com/TaberNater96" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-author-link"
              >
                TaberNater96
              </a>
            </p>
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
