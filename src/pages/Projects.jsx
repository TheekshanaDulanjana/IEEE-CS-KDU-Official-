import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import ProjectBanner from '../assets/MainBGHome04.jpg';
import MainProjectCompo from '../components/MainProjectsCompo';
import ScrollTopComp from '../components/ScrollTopComp';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm.trim());
    }
  };

  return (
    <div className="w-full mt-28">
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={ProjectBanner}
          alt="Projects Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-4xl font-poppins font-semibold uppercase text-white">
            Projects <span className="text-[#f9a319]">Showcase!</span>
          </h1>
          <p className="text-md md:text-xl font-poppins text-white mt-2 max-w-3xl">
            Showcasing the completed projects by the IEEE Computer Society at KDU <br />
            highlighting our teamwork, skills, and passion for technology.
          </p>

          <div className="w-full max-w-md relative mt-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search Projects..."
              className="w-full font-poppins border rounded-full shadow-xl border-gray-400 hover:border-white px-4 py-2 pr-10 bg-transparent text-white focus:outline-none focus:border-white transition duration-300"
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-10 pb-20">
        <MainProjectCompo searchTerm={searchTerm} />
      </div>

      <ScrollTopComp />
    </div>
  );
};

export default Projects;
