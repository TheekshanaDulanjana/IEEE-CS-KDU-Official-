import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'aos/dist/aos.css';

import ScrollTopComp from '../components/ScrollTopComp';

import MainBG1L from '../assets/MainBGHome01.jpg';
import MainBG2L from '../assets/MainBGHome02.jpg';
import MainBG3L from '../assets/MainBGHome03.jpg';
import MainBG4L from '../assets/MainBGHome04.jpg';

import MainBG1P from '../assets/MainBG1P.jpg';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const currentSlideshowImages = (isMobile || isTablet)
    ? [MainBG1P]
    : [MainBG1L, MainBG2L, MainBG3L, MainBG4L, MainBG1L];

  const swiperKey = isMobile || isTablet ? 'portrait' : 'landscape';

  const [recentRef, recentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="w-full mt-28 h-screen overflow-hidden relative">
        <Swiper
          key={swiperKey}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1200}
          modules={[Autoplay]}
          className="w-screen h-screen"
        >
          {currentSlideshowImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-screen">
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute inset-0 flex flex-col -mt-6 items-center justify-center text-center z-20 text-white 
            ${isMobile ? 'px-4' : isTablet ? 'px-10' : 'px-20'}`}
        >
          <h1 className={`font-poppins font-semibold uppercase mb-1 
            ${isMobile ? 'text-3xl' : isTablet ? 'text-5xl' : 'text-5xl'}`}>
            IEEE Computer Society Student Branch Chapter of 
          </h1>
          <p className={`font-poppins 
            ${isMobile ? 'text-lg mb-1' : isTablet ? 'text-xl mb-1.5' : 'text-2xl mb-2'}`}>
            General Sir John Kotelawala Defence University
          </p>

          
{/* <motion.button
  onClick={() => navigate('/pixelwave')}
  className="mt-4 px-6 py-2 bg-gradient-to-r from-[#7f00ff] to-[#b344ec] text-white font-semibold rounded-full cursor-pointer"
  animate={{
    y: [0, -6, 0], 
  }}
  transition={{
    duration: 0.6,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  Apply to PixelWave
</motion.button> */}

        </motion.div>
      </div>

      <div className="absolute">
        <ScrollTopComp isMobile={isMobile} />
      </div>
    </>
  );
};

export default Home;
