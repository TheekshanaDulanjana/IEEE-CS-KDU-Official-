import React, { useState } from "react";
import { motion } from "framer-motion";
import Idate from "../assets/Idate.jpg";
import Artha from "../assets/Artha.jpg";
import after_party from "../assets/after_party.jpg";
import SlideInSection from "../SlideInSection";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const projects = [
    {
      title: "Ideate360° – Entrepreneurship Workshop",
      image: Idate,
      description:
        "Held on February 11, 2025, at the FGS Auditorium, KDU, the workshop featured three key sessions covering entrepreneurship fundamentals, IT-driven business innovation, and digital marketing & freelancing, with insights from renowned industry leaders. Ideate360° brought together over 300 undergraduates from the Faculties of Computing, Engineering, and Technology, who gained valuable knowledge, networked with experts, and explored opportunities in the entrepreneurial landscape, making it a truly impactful and inspiring event.",
    },
    {
      title: "අර්ථ - A CSR initiative by the IEEE CS Student Chapter at KDU",
      image: Artha,
      description:
        "In celebration of the 10th anniversary of the Faculty of Computing, the initiative was aimed at supporting students of Medagama Abhaya Model School, especially those preparing for the Ordinary Level Examinations. Held on February 3rd, 2025, the project featured interactive academic sessions on Mathematics, English, and Science, along with career guidance and an engaging robotics workshop. Beyond academics, the initiative also addressed the school’s need for UPS units in the computer lab, fulfilled through contributions from undergraduates. අර්ථ embodies a commitment to empowering students and giving back to the community.",
    },
    {
      title: "Microsoft Build After Party",
      image: after_party,
      description:
        "The IEEE Computer Society Student Branch Chapter, The AI and Data Science Club of KDU and Microsoft Learn Student Ambassadors collaboratively organized Microsoft Build After Party. This event brought together top experts and dedicated leaders to discuss the most recent breakthroughs in AI, Data Analytics, NLP, and Microsoft Azure technologies. With enlightening workshops conducted by notable speakers. The event took place for 3 consecutive days from 30th July 2024 to 1st of August 2024 as online sessions via Microsoft Teams. The participants had the unique opportunity to gain industry insights, network with fellow AI & Data Science enthusiasts and to gain exciting prizes of MLSA Certificates, $100 Azure certificates, LinkedIn Premium Subscriptions. The event effectively cultivated a learning environment, providing attendees with practical experience and cutting-edge AI knowledge.",
    },
  ];

  return (
    <SlideInSection>
      <div className="w-full mt-10 flex flex-col items-center px-4 sm:px-8 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">
            Recent <span className="text-[#f9a319]">Projects!</span>
          </h2>
          <p className="text-lg text-black mt-2 mb-8">What We Have Done!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const shortText = project.description.slice(0, 150) + "...";
            return (
              <motion.div
                key={index}
                className="p-5 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200"
              >
                <img
                  src={project.image}
                  alt="Project"
                  className="w-full h-64 object-cover rounded-lg mb-3"
                />
                <h3 className="text-black text-lg font-bold">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {isExpanded ? project.description : shortText}
                </p>
                <span
                  className="text-[#f9a319] mt-3 text-sm cursor-pointer block text-right"
                  onClick={() => toggleReadMore(index)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideInSection>
  );
}