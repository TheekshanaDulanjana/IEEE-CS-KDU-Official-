import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';

import GroupImg25 from '../assets/GroupImg25.jpg';

const About = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full mt-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full items-center justify-between gap-8">
        <div className="w-full lg:w-3/4 px-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-poppins font-semibold">
              Who <span className="text-[#f9a319]">We Are?</span>
            </h1>
            <h3 className="text-lg sm:text-md text-gray-600 mb-2 font-poppins">
              The IEEE Computer Society of KDU
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bellefair leading-relaxed mb-4 mt-4 text-justify">
              Established in 2023,<span className="font-semibold"> The IEEE Computer Society </span> Student Chapter at <br className="hidden sm:block" />
              <span className="font-semibold"> General Sir John Kotelawala Defence University (KDU) </span>
              serves as a vibrant platform for computer science enthusiasts and future technology leaders. 
              Dedicated to advancing knowledge, fostering collaboration, and promoting innovation, 
              the chapter provides students with valuable educational resources, industry connections, 
              and hands-on experiences. With a strong focus on professional development, 
              it empowers members with the skills and expertise needed to thrive in 
              the ever-evolving world of technology.
              
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bellefair leading-relaxed mb-4 mt-4 text-justify">Follow us on!</p>
                <a href="https://www.linkedin.com/company/ieee-computer-society-of-kdu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center text-black hover:text-[#f9a319]"><SiLinkedin size={isMobile ? 18 : 24} /></a>
                <a href="https://web.facebook.com/ieeecskdu?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center text-black hover:text-[#f9a319]"><SiFacebook size={isMobile ? 18 : 24} /></a>
                <a href="https://www.instagram.com/ieeecskdu/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 flex items-center justify-center text-black hover:text-[#f9a319]"><SiInstagram size={isMobile ? 18 : 24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
          >
            <img src={GroupImg25} alt="IEEE Group" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
