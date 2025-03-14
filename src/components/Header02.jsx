import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import KDU_CS_LOGO from '../assets/KDU_CS_LOGO.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLink = (hash) => {
    return location.pathname === "/team" ? `/#${hash}` : `#${hash}`;
  };

  return (
    <header className='bg-white shadow-md fixed top-8 left-0 h-12 w-full z-50'>
      <div className='flex justify-between items-center -mt-2 px-5 ml-20 md:px-10 py-3'>
        {/* Logo */}
        <a href={getNavLink("home")}>
          <img
            src={KDU_CS_LOGO}
            alt="KDU_CS_LOGO"
            className="h-12 -mt-2 sm:h-10 sm:mt-0 sm:ml-0"
          />
        </a>
        
        {/* Desktop Navigation */}
        <ul className='hidden md:flex font-normal text-lg gap-5 mr-20'>
          <li><a href={getNavLink("home")} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black">Home</a></li>
          <li><a href={getNavLink("about")} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black">About</a></li>
          <li><Link to="/team" className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black">Team</Link></li>
          <li><a href={getNavLink("projects")} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black">Projects</a></li>
          <li><a href={getNavLink("contact")} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="text-white rounded-lg mt-1 bg-[#f9a319] hover:text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-12 rounded-xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-5">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Links */}
          <ul className='mt-10 space-y-5 text-lg'>
            <li><a href={getNavLink("home")} onClick={toggleMenu} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black block">Home</a></li>
            <li><a href={getNavLink("about")} onClick={toggleMenu} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black block">About</a></li>
            <li><Link to="/team" onClick={toggleMenu} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black block">Team</Link></li>
            <li><a href={getNavLink("projects")} onClick={toggleMenu} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black block">Projects</a></li>
            <li><a href={getNavLink("contact")} onClick={toggleMenu} className="text-gray-600 font-semibold hover:underline hover:decoration-[#f9a319] hover:text-black block">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
