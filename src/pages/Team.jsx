import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Theekshana from "../assets/Theekshana.png";
import Dinuka from "../assets/Dinuka.png";
import Tharusha from "../assets/Tharusha.png";
import Masha from "../assets/Masha.png";
import Pinipa from "../assets/Pinipa.png";
import Sasini from "../assets/Sasini.png";
import Kavishka from "../assets/Kavishka.png";
import Criston from "../assets/Criston.png";
import Sanhinda from "../assets/Sanhinda.png";
import Malithi from "../assets/Malithi.png";
import Sumudu from "../assets/Sumudu.png";
import Hiruni from "../assets/Hiruni.png";
import Themiya from "../assets/Themiya.png";
import Hasith from "../assets/Hasith.png";



export default function Team() {
  const [visible, setVisible] = useState(false);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const executiveCommittee = [
    { name: "Dinuka Wickramasinghe", role: "Chairperson", image: Dinuka },
    { name: "Tharusha Bandara", role: "Vice Chairperson", image: Tharusha },
    { name: "Masha Kasthuriarachchi", role: "Secretary", image: Masha },
    { name: "Pinipa Attanayake", role: "Assistant Secretary", image: Pinipa },
    { name: "Sasini Navodya", role: "Treasurer", image: Sasini },
    { name: "Kavishka Lakshitha", role: "Assistant Treasurer", image: Kavishka },
    { name: "Theekshana Dulanjana", role: "Webmaster", image: Theekshana },
    { name: "Criston Himasha", role: "Chapter Coordinator", image: Criston },
  ];

  const standingCommitteeHeads = [
    { name: "Sanhinda Liyanage", role: "Head of Public Visibility", image: Sanhinda },
    { name: "Malithi Induwari", role: "Head of Editorial", image: Malithi },
    { name: "Sumudu Ishadi", role: "Head of Industry Engagement", image: Sumudu },
    { name: "Hiruni Pabodhya", role: "Head of Membership Development", image: Hiruni },
    { name: "Themiya Thawalpitiya", role: "Head of Volunteer Management", image: Themiya },
    { name: "Hasith Nirmal", role: "Head of Logistics", image: Hasith },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-screen mt-30 flex items-center justify-center p-10">
      <div className="text-center w-full">
        <h2 className="text-3xl font-poppins -mt-10">
          <span className="text-black font-bold">Meet</span>{" "}
          <span className="text-[#f9a319] font-bold">Our Team!</span>
        </h2>
        <p className="text-sm text-gray-400 mb-2">2025 - 2026</p>

        {/* Executive Committee */}
        <div className="p-10">
          <p className="text-lg text-black mb-3 -mt-5">Executive Committee</p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
          >
            {executiveCommittee.map((member, index) => (
              <motion.div
                key={index}
                className="p-2 bg-white text-center shadow-lg rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105 border border-gray-300"
                variants={itemVariants}
              >
                <img src={member.image} className="w-full h-50 object-cover mb-2" alt={member.name} />
                <p className="text-black text-sm font-semibold">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Standing Committee Heads */}
        <div className="p-10">
          <p className="text-lg text-black mb-3">Standing Committee Heads</p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
          >
            {standingCommitteeHeads.map((member, index) => (
              <motion.div
                key={index}
                className="p-2 bg-white text-center shadow-lg rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105 border border-gray-300"
                variants={itemVariants}
              >
                <img src={member.image} className="w-full h-50 object-cover mb-2" alt={member.name} />
                <p className="text-black text-sm font-semibold">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
