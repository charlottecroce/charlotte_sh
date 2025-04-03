import React, { useState, useEffect } from 'react';

// Import pages
import HomePage from './pages/HomePage';
import { Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';

/* 
==============================================
Main App Component
==============================================
*/
const App = () => {
  /* 
  ==============================================
  State Management
  ==============================================
  */
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  /* 
  ==============================================
  Effects
  ==============================================
  */
  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Add resize listener to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close mobile menu on desktop
      if (!mobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  /* 
  ==============================================
  Event Handlers
  ==============================================
  */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to open social links
  const openSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Social links data
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/charlottecroce' },
    { name: 'Codeberg', url: 'https://codeberg.org/charlottecroce' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/charlottecroce' },
    { name: 'Mastodon', url: 'https://hachyderm.io/@charlotte200' }
  ];

  return (
    <div className="app-container">
      {/* 
      ==============================================
      Navbar
      ==============================================
      */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            ./charlotte.sh
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {socialLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => openSocialLink(link.url)}
                className="navbar-button"
              >
                {link.name} <ExternalLink size={16} className="ml-1" />
              </button>
            ))}
            <button 
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="icon-button"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="icon-button mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ display: isMobile ? 'flex' : 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      
      {/* 
      ==============================================
      Mobile Menu
      ==============================================
      */}
      <div className={`mobile-menu ${mobileMenuOpen && isMobile ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          {/* Social Links for Mobile */}
          {socialLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => {
                openSocialLink(link.url);
                setMobileMenuOpen(false);
              }}
              className="mobile-button"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={toggleDarkMode} 
            className="mobile-button mobile-button-with-icon"
          >
            {darkMode ? 
              <Sun size={18} className="icon-left" /> : 
              <Moon size={18} className="icon-left" />
            }
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      
      {/* 
      ==============================================
      Main Content
      ==============================================
      */}
      <main className="main-content">
        <HomePage />
      </main>
      
      {/* 
      ==============================================
      Footer
      ==============================================
      */}
      <footer className="site-footer">
        <div className="social-footer-links" style={{ marginBottom: '16px' }}>
          {socialLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span style={{ margin: '0 8px' }}>•</span>}
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.name}
              </a>
            </React.Fragment>
          ))}
        </div>
        <p>©{new Date().getFullYear()} Charlotte Croce • Made with React JS & Codeberg Pages</p>
      </footer>
    </div>
  );
};

export default App;