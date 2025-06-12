import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

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

export default function Board25_26() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const executiveCommittee = [
    {
      name: "Dinuka Wickramasinghe",
      role: "Chairperson",
      image: Dinuka,
      linkedin: "https://www.linkedin.com/in/dinuka-wickramasinghe-70b111248",
      mail: "https://mail.google.com/mail/?view=cm&to=dinukaw2002@gmail.com",
      isChairperson: true,
    },
    {
      name: "Tharusha Bandara",
      role: "Vice Chairperson",
      image: Tharusha,
      linkedin: "http://www.linkedin.com/in/tharusha-bhanuka-bandara-7299a9265",
      mail: "https://mail.google.com/mail/?view=cm&to=tharushabandara2k2@gmail.com",
    },
    {
      name: "Masha Kasthuriarachchi",
      role: "Secretary",
      image: Masha,
      linkedin: "https://www.linkedin.com/in/masha-kasthuriarachchi-b44496240",
      mail: "https://mail.google.com/mail/?view=cm&to=mashakasthuriarachchi@gmail.com",
    },
    {
      name: "Pinipa Attanayake",
      role: "Assistant Secretary",
      image: Pinipa,
      linkedin: "https://www.linkedin.com/in/pinipa-attanayake-6879182a9",
      mail: "https://mail.google.com/mail/?view=cm&to=pinipa.attanayake@gmail.com",
    },
    {
      name: "Sasini Lekamalage",
      role: "Treasurer",
      image: Sasini,
      linkedin: "http://www.linkedin.com/in/sasini-lekamalage-647b89263",
      mail: "https://mail.google.com/mail/?view=cm&to=sasinilekamge2001@gmail.com",
    },
    {
      name: "Kavishka Lakshitha",
      role: "Assistant Treasurer",
      image: Kavishka,
      linkedin: "#",
      mail: "#",
    },
    {
      name: "Theekshana Dulanjana",
      role: "Webmaster",
      image: Theekshana,
      linkedin: "https://www.linkedin.com/in/theekshanadulanjana",
      mail: "https://mail.google.com/mail/?view=cm&to=theekshanadulanjana35@gmail.com",
    },
    {
      name: "Criston Himasha",
      role: "Chief Organizer",
      image: Criston,
      linkedin: "https://www.linkedin.com/in/criston-himasha-75b988274",
      mail: "https://mail.google.com/mail/?view=cm&to=Cristonhimasha73@gmail.com",
    },
  ];

  const standingCommitteeHeads = [
    {
      name: "Sanhinda Liyanage",
      role: "Head of Public Visibility",
      image: Sanhinda,
      linkedin: "https://www.linkedin.com/in/sanhinda-liyanage-7840b9261",
      mail: "https://mail.google.com/mail/?view=cm&to=sanhinda.liyanage@gmail.com",
    },
    {
      name: "Malithi Induwari",
      role: "Head of Editorial",
      image: Malithi,
      linkedin: "https://www.linkedin.com/in/malithi-induwari-530b2a272",
      mail: "https://mail.google.com/mail/?view=cm&to=induwarimalithi@gmail.com",
    },
    {
      name: "Sumudu Ratnayake",
      role: "Head of Industry Engagement",
      image: Sumudu,
      linkedin: "http://www.linkedin.com/in/sumudu-ratnayake-782b90235",
      mail: "https://mail.google.com/mail/?view=cm&to=ishadi.leoni@gmail.com",
    },
    {
      name: "Hiruni Rathnamalala",
      role: "Head of Membership Development",
      image: Hiruni,
      linkedin: "http://linkedin.com/in/pabodya-hiruni-6809a6265",
      mail: "https://mail.google.com/mail/?view=cm&to=pabodyahiruni@gmail.com",
    },
    {
      name: "Themiya Thawalpitiya",
      role: "Head of Volunteer Management",
      image: Themiya,
      linkedin: "https://www.linkedin.com/in/themiya-thawalpitiya-657a25265",
      mail: "https://mail.google.com/mail/?view=cm&to=themiya.shanu.tt@gmail.com",
    },
    {
      name: "Hasith Nirmal",
      role: "Head of Logistics",
      image: Hasith,
      linkedin: "http://www.linkedin.com/in/hasith-nirmal-a93a5b264",
      mail: "https://mail.google.com/mail/?view=cm&to=hasithkaushalya076@gmail.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const MemberGrid = ({ title, members }) => (
    <div className="p-10">
      <p className="text-lg text-black font-poppins font-semibold -mt-5">{title}</p>
      <p className="text-sm text-gray-500 font-poppins mb-4">2025 - 2026</p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-poppins justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="p-3 bg-white text-center shadow-lg rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105 border border-gray-300 relative"
            variants={itemVariants}
            onClick={() => member.isChairperson && navigate("/chairPersonMessage")}
            style={{ cursor: member.isChairperson ? "pointer" : "default" }}
          >
            <img src={member.image} alt={member.name} className="w-full h-100 object-cover mb-5" />
            <p className="text-black text-md font-semibold">{member.name}</p>
            <p className="text-gray-500 text-sm mb-4">{member.role}</p>
            <div className="absolute bottom-3 right-3 flex space-x-2 text-gray-600">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="hover:text-blue-600" />
              </a>
              <a href={member.mail} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="hover:text-yellow-400" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="text-center w-full">
      <MemberGrid title="Executive Committee" members={executiveCommittee} />
      <MemberGrid title="Standing Committee Heads" members={standingCommitteeHeads} />
    </div>
  );
}
