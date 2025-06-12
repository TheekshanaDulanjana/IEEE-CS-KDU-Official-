import React from 'react';

import Img1 from '../assets/IEEE KDU SB Logo.png';
import Img2 from '../assets/WIE Logo.png';
import Img3 from '../assets/KDU EMBS LOGO1.png';
import Img4 from '../assets/kducomsoc.png';
import Img5 from '../assets/PES1.png';

const logos = [
  { src: Img1, alt: 'IEEE KDU Logo', link: 'https://foc.kdu.ac.lk/student_chapters/IEEE-KDU/index.html' },
  { src: Img2, alt: 'WIE Logo' },
  { src: Img3, alt: 'EMBS Logo' },
  { src: Img4, alt: 'COMSOC Logo' },
  { src: Img5, alt: 'PES Logo' },
];

const SocietyBanner = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md mb-5 overflow-hidden">
      <div className="animate-scroll-left hover:pause flex items-center gap-6 w-max">
        {duplicatedLogos.map(({ src, alt, link }, i) => (
          <div
            key={`${alt}-${i}`}
            className={`flex justify-center items-center flex-shrink-0 ${
              link ? 'w-78' : 'h-24 w-56'
            }`}
          >
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
              </a>
            ) : (
              <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SocietyBanner;
