import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import idate from '../assets/Idate.jpg';
import Artha from '../assets/Artha.jpg';
import afterParty from '../assets/after_party.jpg';
import MasterLinkedin from '../assets/MasterLinkedin.jpg';

const images = [
  {
    title: 'Master Linkedin',
    imageUrl: MasterLinkedin,
    description: 'waiting for message!',
    projectID: 'MasterLinkedin',
    images: [MasterLinkedin],
  },
  {
    title: 'Ideate360°',
    imageUrl: idate,
    description:
      'Held on February 11, 2025, at the FGS Auditorium, KDU, the workshop featured three key sessions covering entrepreneurship fundamentals, IT-driven business innovation, and digital marketing & freelancing, with insights from renowned industry leaders. Ideate360° brought together over 300 undergraduates from the Faculties of Computing, Engineering, and Technology, who gained valuable knowledge, networked with experts, and explored opportunities in the entrepreneurial landscape, making it a truly impactful and inspiring event.',
    projectID: 'ideate360',
    images: [idate],
  },
  {
    title: 'අර්ථ - A CSR Initiative',
    imageUrl: Artha,
    description:
      'In celebration of the 10th anniversary of the Faculty of Computing, the initiative was aimed at supporting students of Medagama Abhaya Model School, especially those preparing for the Ordinary Level Examinations. Held on February 3rd, 2025, the project featured interactive academic sessions on Mathematics, English, and Science, along with career guidance and an engaging robotics workshop. Beyond academics, the initiative also addressed the school’s need for UPS units in the computer lab, fulfilled through contributions from undergraduates. අර්ථ embodies a commitment to empowering students and giving back to the community.',
    projectID: 'artha-csr',
    images: [Artha],
  },
  {
    title: 'Microsoft Build After Party',
    imageUrl: afterParty,
    description:
      'The IEEE Computer Society Student Branch Chapter, The AI and Data Science Club of KDU and Microsoft Learn Student Ambassadors collaboratively organized Microsoft Build After Party. This event brought together top experts and dedicated leaders to discuss the most recent breakthroughs in AI, Data Analytics, NLP, and Microsoft Azure technologies. With enlightening workshops conducted by notable speakers. The event took place for 3 consecutive days from 30th July 2024 to 1st of August 2024 as online sessions via Microsoft Teams. The participants had the unique opportunity to gain industry insights, network with fellow AI & Data Science enthusiasts and to gain exciting prizes of MLSA Certificates, $100 Azure certificates, LinkedIn Premium Subscriptions. The event effectively cultivated a learning environment, providing attendees with practical experience and cutting-edge AI knowledge.',
    projectID: 'microsoft-build',
    images: [afterParty],
  },
];

const INITIAL_COUNT = 6;
const INCREMENT = 6;

function ProjectCard({ item, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleClick = () => {
    navigate(`/project/${item.projectID}`, {
      state: { title: item.title, description: item.description, images: item.images },
    });
  };

  const getShortDescription = (text) => {
    const firstSentence = text.split('. ')[0];
    return firstSentence.endsWith('.') ? firstSentence : firstSentence + '...';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-[25rem] overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col w-full h-full">
        <div className="relative overflow-hidden rounded-t-lg aspect-square w-full">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end font-poppins p-4">
            <p className="text-white text-sm">{getShortDescription(item.description)}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
          <div className="-mt-2">
            <div className="text-sm text-gray-500 font-poppins group-hover:text-[#f9a319] transition-colors duration-300">
              click to read more...
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MainProjectCompo({ searchTerm = '' }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = images.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl justify-items-center">
        {filteredImages.length === 0 ? (
          <div className="col-span-3 text-center py-20">
            <p className="text-2xl font-semibold text-gray-900">No results found!</p>
            <p className="text-gray-600 mt-2">Sorry, we couldn't find anything matching your search.</p>
          </div>
        ) : (
          filteredImages.slice(0, visibleCount).map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))
        )}
      </div>

      {filteredImages.length > INITIAL_COUNT && (
        <div className="pb-10">
          {visibleCount < filteredImages.length ? (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + INCREMENT, filteredImages.length))}
              className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Show More Projects
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(INITIAL_COUNT)}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
