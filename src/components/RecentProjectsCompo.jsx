import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import idate from '../assets/Idate.jpg';
import Artha from '../assets/Artha.jpg';
import afterParty from '../assets/after_party.jpg';
import MasterLinkedin from '../assets/MasterLinkedin.jpg';
import pixelwave from '../assets/PixelWave.jpg';

const projectData = [
    {
    title: 'PixelWave',
    imageUrl: pixelwave,
    description: 'Upcoming event!',
    projectID: 'PixelWave',
    images: [pixelwave]
  },
  {
    title: 'MasterInLinkedIn',
    imageUrl: MasterLinkedin,
    description: 'The MasterInLinkedIn session was a highly informative and engaging virtual event that drew over 100 undergraduate students from across the country. Mr. Dilshan Sanjeewa, Senior Technical Recruiter at PickMe Digital Mobility Solutions Lanka (PVT) Ltd, was the session\'s esteemed guest speaker.Mr. Sanjeewa provided valuable insights on how to manage a LinkedIn profile professionally and strategically. He shared useful tips and techniques to help students improve their online presence and attract potential employers, providing a comprehensive understanding of how to use LinkedIn for career advancement.',
    projectID: 'MasterInLinkedIn',
    images: [MasterLinkedin]
  },
  {
    title: 'Ideate360°',
    imageUrl: idate,
    description:
      'Held on February 11, 2025, at the FGS Auditorium, KDU, the workshop featured three key sessions covering entrepreneurship fundamentals, IT-driven business innovation, and digital marketing & freelancing, with insights from renowned industry leaders. Ideate360° brought together over 300 undergraduates from the Faculties of Computing, Engineering, and Technology, who gained valuable knowledge, networked with experts, and explored opportunities in the entrepreneurial landscape, making it a truly impactful and inspiring event.',
    projectID: 'ideate360',
    images: [idate]
  },
  {
    title: 'අර්ථ - A CSR Initiative',
    imageUrl: Artha,
    description:
      'In celebration of the 10th anniversary of the Faculty of Computing, the initiative was aimed at supporting students of Medagama Abhaya Model School, especially those preparing for the Ordinary Level Examinations. Held on February 3rd, 2025, the project featured interactive academic sessions on Mathematics, English, and Science, along with career guidance and an engaging robotics workshop. Beyond academics, the initiative also addressed the school’s need for UPS units in the computer lab, fulfilled through contributions from undergraduates. අර්ථ embodies a commitment to empowering students and giving back to the community.',
    projectID: 'artha-csr',
    images: [Artha]
  },
  {
    title: 'Microsoft Build After Party',
    imageUrl: afterParty,
    description:
      'The IEEE Computer Society Student Branch Chapter, The AI and Data Science Club of KDU and Microsoft Learn Student Ambassadors collaboratively organized Microsoft Build After Party. This event brought together top experts and dedicated leaders to discuss the most recent breakthroughs in AI, Data Analytics, NLP, and Microsoft Azure technologies. With enlightening workshops conducted by notable speakers. The event took place for 3 consecutive days from 30th July 2024 to 1st of August 2024 as online sessions via Microsoft Teams. The participants had the unique opportunity to gain industry insights, network with fellow AI & Data Science enthusiasts and to gain exciting prizes of MLSA Certificates, $100 Azure certificates, LinkedIn Premium Subscriptions. The event effectively cultivated a learning environment, providing attendees with practical experience and cutting-edge AI knowledge.',
    projectID: 'microsoft-build',
    images: [afterParty]
  },
];

function ProjectCard({ item }) {
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
    <div
      ref={ref}
      onClick={handleClick}
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-90 flex-shrink-0 mx-2 cursor-pointer
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        transition-opacity duration-500 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden rounded-t-xl h-100">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-poppins">{getShortDescription(item.description)}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
          <div className="mt-auto">
            <div className="text-sm text-gray-500 font-poppins hover:text-[#f9a319] transition-colors duration-300">
              click to read more...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecentProject() {
  const navigate = useNavigate();
  const duplicatedData = [...projectData, ...projectData];

  return (
    <section className="w-full py-16 mt-15 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 font-poppins">
            Recently <span className="text-[#f9a319]">Completed Projects!</span>
          </h1>
          <p className="text-lg text-gray-600 font-bellefair max-w-2xl mx-auto">
            Explore our latest successful events and workshops that brought innovation and learning to life.
          </p>
        </div>

        <div className="relative -mt-5">
          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll-right hover:pause">
              {duplicatedData.map((item, index) => (
                <div key={`${item.projectID}-${index}`} className="px-2">
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center px-8 py-3 bg-[#f9a319] text-white font-medium rounded-full hover:bg-[#e69517] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f9a319] focus:ring-opacity-50"
          >
            View All Projects
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
