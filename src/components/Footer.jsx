import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import KDU_CS_LOGO_BW from '../assets/KDU_CS_LOGO_BW.png';

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLink = (hash) => {
    return location.pathname === "/team" ? `/#${hash}` : `#${hash}`;
  };

  return (
    <footer className="p-2 bg-[#f9a319] text-white text-center w-screen">
      <div className="container w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src={KDU_CS_LOGO_BW}
              alt="KDU_CS_LOGO_BW"
              className="h-12 -mb-3 mx-auto md:ml-20"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 md:mr-20">
            <a href={getNavLink("home")} className="text-white hover:text-gray-200 cursor-pointer">Home</a>
            <a href={getNavLink("about")} className="text-white hover:text-gray-200 cursor-pointer">About</a>
            <Link to="/team" className="text-white hover:text-gray-200 cursor-pointer">Our Team</Link>
            <a href={getNavLink("projects")} className="text-white hover:text-gray-200 cursor-pointer">Projects</a>
            <a href={getNavLink("contact")} className="text-white hover:text-gray-200 cursor-pointer">Contact Us</a>
          </div>
        </div>

        <div className="mt-4 border-t border-white pt-4">
          <p className="text-sm">Copyright © 2025. IEEE CS KDU. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;