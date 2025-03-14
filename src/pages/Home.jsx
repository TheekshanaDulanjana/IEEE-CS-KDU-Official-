import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';
import SlideInSection from '../SlideInSection';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function Home() {
  return (
    <SlideInSection>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen mt-20"
    >
      <div className="relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="w-screen h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {[img1, img2, img3, img4].map((image, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <motion.img
                src={image}
                alt={`CoverImage${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-8"
        >
          <h3 className="text-3xl font-bold text-white -mt-35 mb-1 uppercase text-center sm:text-4xl">
            IEEE Computer Society Student Chapter of
          </h3>
          <p className="text-xl text-white transform transition-transform duration-300 hover:scale-105 text-center sm:text-2xl">
            General Sir John Kotelawala Defence University
          </p>
        </motion.div>
      </div>
    </motion.div>
    </SlideInSection>
  );
}