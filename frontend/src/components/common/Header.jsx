import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/vv_logo_nb.png';

const Header = () => {
// Get the current location object from React Router
const location = useLocation();
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Helper function to determine if a navigation link is active
// Returns 'active' if the current path matches the link's path, otherwise returns an empty string
const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
};

// Toggle mobile menu
const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
};

// Close mobile menu when a link is clicked
const closeMobileMenu = () => {
    setMobileMenuOpen(false);
};

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Brand Section */}
        <div className="header-logo-title">
          <Link to="/" className="brand-link">
            <img src={logo} alt="Vitis Veritas Logo" className="header-logo" />
            <div>
              <h1 className="brand-title">Vitis Veritas</h1>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/terroir" className={`nav-link ${isActive('/terroir')}`} onClick={closeMobileMenu}>
                Tasting The Terroir
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alchemy" className={`nav-link ${isActive('/alchemy')}`} onClick={closeMobileMenu}>
                The Alchemy Of Wine
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
