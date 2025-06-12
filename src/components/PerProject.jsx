import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const PerProject = () => {
  const { projectID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const title = location.state?.title || 'Project Details';
  const description = location.state?.description || 'No description available';
  const images = location.state?.images || [];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openImage = (index) => setSelectedImageIndex(index);
  const closeImage = () => setSelectedImageIndex(null);
  const showPrevImage = () =>
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNextImage = () =>
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  const breakpointColumnsObj = { default: 3, 1100: 3, 700: 2, 500: 1 };
  const smoothTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        {images[0] && (
          <>
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10" />
          </>
        )}

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
        >
          <FaArrowLeft className="text-lg" />
        </button>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-10 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            className="text-4xl md:text-5xl font-semibold font-poppins text-white"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-black mb-4 font-poppins">
            About <span className="text-[#f9a319]">This Project</span>
          </h2>
          <p className="text-gray-600 leading-relaxed font-poppins text-justify">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-8 text-center">
            Gallery
          </h2>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="mb-6 relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => openImage(index)}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...smoothTransition, delay: index * 0.05 }}
              >
                <img
                  src={image}
                  alt={`${title} - ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View</span>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={smoothTransition}
          >
            <div className="relative max-w-6xl w-full p-4">
              <motion.img
                src={images[selectedImageIndex]}
                alt="Full Image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-h-[90vh] w-auto mx-auto rounded-md shadow-2xl"
              />

              <button
                className="absolute top-4 right-4 text-white text-3xl bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                onClick={closeImage}
              >
                &times;
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all duration-300"
                onClick={showPrevImage}
              >
                <FaChevronLeft className="text-gray-800 text-lg" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all duration-300"
                onClick={showNextImage}
              >
                <FaChevronRight className="text-gray-800 text-lg" />
              </button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerProject;
