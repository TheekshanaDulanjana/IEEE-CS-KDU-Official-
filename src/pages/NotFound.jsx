import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Randula Jey Photography";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center p-6">
      <div>
        <h1 className="text-6xl font-semibold font-poppins mb-4 ">404</h1>
        <p className="text-2xl  mb-6 font-poppins">Oops! We can’t seem to find the page you’re looking for.</p>
        <a
          href="/"
          className="font-poppins px-5 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full hover:shadow-lg bg-[#f9a319] text-white border border-[#f9a319]"
        >
          Go To Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
