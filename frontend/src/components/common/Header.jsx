import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
// Get the current location object from React Router
const location = useLocation();

// Helper function to determine if a navigation link is active
// Returns 'active' if the current path matches the link's path, otherwise returns an empty string
const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
};

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Brand Section */}
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title">Vitis Veritas</h1>
            <p className="brand-subtitle">The Truth of Wine</p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/terroir" className={`nav-link ${isActive('/terroir')}`}>
                Understanding Terroir
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/avas" className={`nav-link ${isActive('/avas')}`}>
                AVAs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/varietals" className={`nav-link ${isActive('/varietals')}`}>
                Wine Varietals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sommelier" className={`nav-link ${isActive('/sommelier')}`}>
                The Sommelier
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle (for future mobile responsiveness) */}
        <button className="mobile-menu-toggle" aria-label="Toggle navigation menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
