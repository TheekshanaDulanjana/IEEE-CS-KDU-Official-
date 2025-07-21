import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import KDU_CS_LOGO from '../assets/KDU_CS_LOGO.png';

export default function Header() {
  const [fadeClass, setFadeClass] = useState('opacity-0');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerFadeTransition = (callback) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      callback();
      setFadeClass('opacity-100');
      setIsMobileMenuOpen(false);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${location.state.scrollTo}`);
        }
      }, 100);
      window.history.replaceState({}, '', '/');
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => setFadeClass('opacity-100'), 100);
  }, []);

  const handleLogoClick = () => {
    triggerFadeTransition(() => {
      navigate('/');
      const el = document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#home');
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '#about', label: 'About Us', sectionId: 'about' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '#contact', label: 'Contact Us', sectionId: 'contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (item) => {
    if (item.sectionId && location.pathname === '/') {
      return location.hash === `#${item.sectionId}`;
    }
    return location.pathname === item.path;
  };

  const renderNavItem = ({ path, label, sectionId }) => {
    const base = "cursor-pointer px-4 py-2 lg:px-0 lg:py-0 text-lg lg:text-md transition-all duration-200";
    const hover = "hover:text-black hover:underline hover:underline-offset-4 hover:decoration-[#f9a319]";
    const active = "text-black underline-offset-4 decoration-[#f9a319]";
    const classes = `${base} ${hover} ${isActive({ path, sectionId }) ? active : ''}`;

    if (sectionId === 'about' || sectionId === 'contact') {
      return (
        <button onClick={() => triggerFadeTransition(() => scrollToSection(sectionId))} className={classes}>
          {label}
        </button>
      );
    }

    if (path === '/') {
      return (
        <button
          onClick={() => triggerFadeTransition(() => {
            navigate('/');
            const el = document.getElementById('home');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', '#home');
          })}
          className={classes}
        >
          {label}
        </button>
      );
    }

    return (
      <Link
        to={path}
        onClick={() => triggerFadeTransition(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
        className={classes}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="bg-white fixed top-0 mt-10 left-0 w-full z-50 h-18">
      <div className="bg-white fixed top-0 left-0 mt-10 w-full z-50 h-18 shadow-sm backdrop-blur-lg duration-[1500ms]">
        <div className="flex justify-between items-center max-w-full lg:px-12 xl:px-20 mx-auto px-4 sm:px-6 h-full">
          {/* Logo */}
          <button onClick={handleLogoClick} className="cursor-pointer">
            <img src={KDU_CS_LOGO} alt="KDU IEEE CS" className="h-13 w-auto transition-all" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-4 font-poppins font-light text-gray-600">
              {navItems.map((item) => (
                <li key={item.path}>{renderNavItem(item)}</li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="lg:hidden focus:outline-none" aria-label="Toggle menu">
            <div className="space-y-2">
              <span className={`block w-6 h-0.5 bg-[#f9a319] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#f9a319] ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-[#f9a319] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col font-poppins text-gray-600">
            {navItems.map((item) => (
              <li key={item.path} className="relative transition-all duration-300 border-b border-gray-100 last:border-b-0">
                <div className="px-6 py-2">{renderNavItem(item)}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
