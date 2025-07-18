import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

import SpeechBanner from "../assets/SpeechBanner.jpg";
import Dinuka from "../assets/Dinuka.png";

const ProfileCard = () => (
  <div className="w-full mt-28">
    <div className="relative w-full h-72 md:h-72 overflow-hidden">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
      >
        <img src={SpeechBanner} alt="SpeechBanner" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.h1
          className="text-5xl md:text-4xl font-poppins font-semibold uppercase text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Chairperson <span className="text-[#f9a319]">Message!</span>
        </motion.h1>
        <motion.p
          className="text-md md:text-xl font-poppins text-white mt-2 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A note from our Chairperson sharing the vision, goals, and future plans <br />of our organization.
        </motion.p>
      </div>
    </div>

    <div className="flex mt-5 flex-col md:flex-row items-start md:items-center gap-10 p-6 max-w-6xl mx-auto">
      <img
        src={Dinuka}
        alt="Profile"
        className="w-full h-120 md:w-1/3 object-cover rounded-md shadow-md"
      />
      <div className="flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-semibold mt-15 font-poppins text-gray-800">Mr. Dinuka Wickramasinghe</h1>
          <p className="text-md text-gray-600 font-poppins">
            Chairperson,<br /> IEEE Computer Society KDU 2025-2026
          </p>
        </div>
        <p className="text-gray-700 text-justify">
          As the Chairperson, I am honored to lead a vibrant community of innovators, researchers, 
          and technology enthusiasts dedicated to advancing computing and fostering collaboration. Our society serves as a platform for students to explore cutting-edge technologies, engage in impactful projects, and connect with industry professionals.
          <br /> <br />
          Through workshops, hackathons, research initiatives, and community outreach programs, we strive to bridge the gap between theory and practice while contributing to technological advancements. Whether you are a student, professional, or tech enthusiast, we invite you to join us in shaping the future of computing.
          <br /><br />
          Stay connected and stay inspired!
        </p>
        <div className="flex items-center gap-1 text-lg mb-15">
          <a
            href="https://mail.google.com/mail/?view=cm&to=dinukaw2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/dinuka-wickramasinghe-70b111248"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black "
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
