import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/KDU_CS_LOGO.png';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fadeClass, setFadeClass] = useState('opacity-0');

  const triggerFadeTransition = (callback) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      callback();
      setFadeClass('opacity-100');
    }, 1000);
  };

  const scrollToTop = (path, sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#`);
    }
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleLogoClick = () => {
    triggerFadeTransition(() => {
      navigate('/');
      scrollToTop('/', 'home');
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '#about', label: 'About Us', sectionId: 'about' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '#contact', label: 'Contact Us', sectionId: 'contact' },
  ];

  const renderNavItem = ({ path, label, sectionId }) => {
    const commonProps = {
      className: 'font-poppins font-medium text-gray-700 hover:text-black cursor-pointer',
    };

    if (label === 'Home') {
      return (
        <button {...commonProps} onClick={() => triggerFadeTransition(() => {
          scrollToTop(path, 'home');
          navigate('/');
        })}>
          {label}
        </button>
      );
    }

    if (sectionId) {
      return (
        <button {...commonProps} onClick={() => triggerFadeTransition(() => scrollToSection(sectionId))}>
          {label}
        </button>
      );
    }

    return (
      <Link to={path} {...commonProps} onClick={() => triggerFadeTransition(() => scrollToTop(path))}>
        {label}
      </Link>
    );
  };

  return (
    <footer className="bg-[#fef8ee] text-black px-6 py-8 text-sm overflow-hidden font-bellefair">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row">
        <div className="hidden lg:block w-full lg:w-3/7 mb-8 lg:mb-0 lg:pl-20">
          <button onClick={handleLogoClick}>
            <img src={logo} className="w-64 mb-4" alt="IEEE Computer Society Logo" />
          </button>
          <p className="text-gray-700 font-poppins text-sm">
            IEEE Computer Society <br />Student Chapter of 
            General Sir John <br />Kotelawala Defence University
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Relative Links</h3>
            <ul className="space-y-1 text-gray-700">
              {navItems.map((item) => (
                <li key={item.label}>{renderNavItem(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Useful Links</h3>
            <ul className="flex flex-col items-center sm:items-start gap-2 font-poppins font-medium text-gray-700">
              {[
                ['IEEE CS', 'https://www.ieee.org/'],
                ['IEEE CS Digital Library', 'https://www.computer.org/csdl/magazine/co'],
                ['IEEE CS Standards', 'https://www.computer.org/volunteering/boards-and-committees/standards-activities/home'],
                ['IEEE SB KDU', 'https://foc.kdu.ac.lk/student_chapters/IEEE-KDU/'],
                ['KDU', 'https://kdu.ac.lk/'],
              ].map(([label, link]) => (
                <li key={label}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-poppins font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ieeecskdu@kdu.ac.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-medium hover:text-black"
                >
                  ieeecskdu@kdu.ac.lk
                </a>
              </li>
              <li className="font-medium max-w-[500px] text-center sm:text-left">
                IEEE Computer Society Student Chapter,<br />
                Kotelawala Defence University,<br />
                Ratmalana,<br />
                Sri Lanka.
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-poppins font-semibold mb-4">Social Links</h3>
            <div className="flex flex-col space-y-2 text-gray-700">
              {[
                ['LinkedIn', 'https://www.linkedin.com/company/ieee-computer-society-of-kdu/posts/?feedView=all'],
                ['Facebook', 'https://web.facebook.com/ieeecskdu?_rdc=1&_rdr#'],
                ['Instagram', 'https://www.instagram.com/ieeecskdu/'],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-poppins font-medium hover:text-black transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-400 text-center">
        <div className="font-poppins font-thin text-black ">
          © {new Date().getFullYear()} IEEE Computer Society of KDU. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
