import React, { useEffect, useState } from 'react';
import KDU_CS_LOGO from '../assets/KDU_CS_LOGO.png';
import SlideInSection from '../SlideInSection';

export default function AboutUs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideInSection> 
    <div
      className={`min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6 md:p-10 transition-all duration-700 ease-in-out ${
        visible
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-10' 
      }`}
    >
      <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-6 md:mb-0 ">
        <img
          src={KDU_CS_LOGO}
          alt="KDU CS Logo"
          className="w-72 h-48 object-contain md:w-80 md:h-60 transition-all duration-700 ease-in-out -mb-7 mt-13 md:mb-0" />
      </div>

      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-poppins mb-4 md:mx-10">
          <span className="text-black font-bold">Who</span>{' '}
          <span className="text-[#f9a319] font-bold">We Are?</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 -mt-5 md:mx-10">
          The IEEE Computer Society of KDU
        </p>

        <p className="text-base md:text-lg text-black mx-4 mt-3 md:mx-10">
          Established in 2023, The IEEE Computer Society Student Chapter at 
          General Sir John Kotelawala Defence University (KDU) serves as a 
          vibrant platform for computer science enthusiasts and future technology leaders. 
          Dedicated to advancing knowledge, fostering collaboration, and promoting innovation, 
          the chapter provides students with valuable educational resources, 
          industry connections, and hands-on experiences. With a strong focus on 
          professional development, it empowers members with the skills and expertise 
          needed to thrive in the ever-evolving world of technology.
        </p>
      </div>
    </div>
    </SlideInSection>
  );
}
