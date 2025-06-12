import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Shakya from "../assets/Shakya.png";
import Lasindu from "../assets/Lasindu.png";
import Isali from "../assets/Isali.png";
import Sarani from "../assets/Sarani.png";
import Adeesha from "../assets/Adeesha.png";
import Pasindu from "../assets/Pasindu.png";
import Danushka from "../assets/Danushka.png";
import Haritha from "../assets/Haritha.png";
import Shenal from "../assets/Shenal.png";
import Kesara from "../assets/Kesara.png";
import Senuda from "../assets/Senuda.png";
import Vethum from "../assets/Vethum.png";
import Yasas from "../assets/Yasas.png";
import Chamika from "../assets/Chamika.png";

export default function Board25_26() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const executiveCommittee = [
    { name: "Shakya Dissanayake", role: "Chairperson", image: Shakya },
    { name: "Lasindu Ranasinghe", role: "Vice Chairperson", image: Lasindu },
    { name: "Isali Perera", role: "Secretary", image: Isali },
    { name: "Sarani Salawahura", role: "Assistant Secretary", image: Sarani },
    { name: "Adeesha Ravindi", role: "Treasurer", image: Adeesha },
    { name: "Pasindu Nuwan", role: "Assistant Treasurer", image: Pasindu },
    { name: "Danushka Sehan", role: "Webmaster", image: Danushka },
    { name: "Haritha Naveen", role: "Cheaf Organizer", image: Haritha },
  ];

  const standingCommitteeHeads = [
    { name: "Shenal Perera", role: "Head of Public Visibility", image: Shenal },
    { name: "Kesara Hansajith", role: "Head of Editorial", image: Kesara },
    { name: "Senuda Weliwatta", role: "Head of Industry Engagement", image: Senuda },
    { name: "Vethum Hewage", role: "Head of Membership Development", image: Vethum },
    { name: "Yasas Amarasekara", role: "Head of Volunteer Management", image: Yasas },
    { name: "Chamika Lakmal", role: "Head of Logistics", image: Chamika },
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

  const renderCard = (member, index) => (
    <motion.div
      key={index}
      className="p-3 bg-white text-center shadow-lg rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105 border border-gray-300 relative"
      variants={itemVariants}
      onClick={() => member.isChairperson && navigate("/presidentMessage")}
      style={{ cursor: member.isChairperson ? "pointer" : "default" }}
    >
      <img src={member.image} className="w-full h-100 object-cover mb-5" alt={member.name} />
      <p className="text-black text-md font-semibold">{member.name}</p>
      <p className="text-gray-500 text-sm mb-4">{member.role}</p>
    </motion.div>
  );

  return (
    <div className="text-center w-full">
      {/* Executive Committee */}
      <div className="p-10">
        <p className="text-lg text-black font-poppins font-semibold -mt-5">Executive Committee</p>
        <p className="text-sm text-gray-500 font-poppins mb-4">2024 - 2025</p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
        >
          {executiveCommittee.map(renderCard)}
        </motion.div>
      </div>

      {/* Standing Committee Heads */}
      <div className="p-10">
        <p className="text-lg text-black font-poppins font-semibold -mt-5">Standing Committee Heads</p>
        <p className="text-sm text-gray-500 font-poppins mb-4">2024 - 2025</p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
        >
          {standingCommitteeHeads.map(renderCard)}
        </motion.div>
      </div>
    </div>
  );
}
