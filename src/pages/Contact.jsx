import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import SlideInSection from '../SlideInSection';

export default function Contact() {
  
  return (
    <SlideInSection>
    <div className="w-screen mt-60 flex items-center justify-center p-4">
      <div className="text-center px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-poppins ">
          <span className="text-black font-bold">Contact</span> <span className="text-[#f9a319] font-bold">Us!</span>
        </h2>
        <p className="text-sm text-gray-400 mt-4">If you have any questions or need more information, feel free to reach out to us.</p>
        <p className="text-sm text-gray-400">You can use our contact form for easy communication, or you can contact us directly using the details below.</p>
        <p className="text-sm text-gray-400">We are here to help and look forward to hearing from you!</p>

        <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center">

          <div className="mb-6 md:mb-0">
            <div className="mb-6">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-black" />
                <h3 className="text-lg font-medium text-black">Email</h3>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ieeecskdu@kdu.ac.lk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-600 flex hover:text-[#f9a319] font-normal">ieeecskdu@kdu.ac.lk</p>
              </a>
            </div>
            
            <div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-black" />
                <h3 className="text-lg font-medium text-black">Location</h3>
              </div>
              <p className="text-gray-600 flex ">IEEE Computer Society Student Chapter,</p>
              <p className="text-gray-600 flex -mt-1">Kotelawala Defence University,</p>
              <p className="text-gray-600 flex -mt-1">Ratmalana,</p>
              <p className="text-gray-600 flex -mt-1">Sri Lanka.</p>
            </div>

            <div className="mb-6 mt-8 flex">
              <div className="flex items-center space-x-4 justify-center">
                <a href="https://www.facebook.com/ieeecskdu" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mr-2 text-3xl text-black hover:text-[#f9a319]" />
                </a>

                <a href="https://www.linkedin.com/company/ieee-computer-society-of-kdu/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 text-3xl text-black hover:text-[#f9a319]" />
                </a>

                <a href="https://www.instagram.com/ieeecskdu/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mr-2 text-3xl text-black hover:text-[#f9a319]" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2xl bg-white p-5 w-full sm:w-80 rounded-md shadow-md border border-gray-200">
            <h2 className="text-2xl font-poppins mb-4 ">
              <span className="text-gray-700 font-bold">Drop a</span> <span className="text-black font-bold">Message!</span>
            </h2>
            <form>
              <div className="mb-4">
                <label className="text-gray-700 text-sm font-semibold mb- flex" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-2 py-1 border rounded-md text-gray-300 focus:outline-none text-sm focus:ring-1 focus:ring-gray-500"
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm font-semibold mb- flex" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-2 py-1 border rounded-md text-gray-300 focus:outline-none text-sm focus:ring-1 focus:ring-gray-500"
                  id="email"
                  type="email"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm font-semibold mb- flex" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-2 py-1 border rounded-md text-gray-300 focus:outline-none text-sm focus:ring-1 focus:ring-gray-500"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-80 bg-black h-8  text-white rounded-md hover:bg-[#f9a319] hover:text-gray-100"
              >
                Submit your request
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
    </SlideInSection>
  );
}
