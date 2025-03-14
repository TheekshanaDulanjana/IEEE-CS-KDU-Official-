import React from 'react'; 
import IEEE_MAIN_LOGO_BW from '../assets/IEEE_MAIN_LOGO_BW.png';

export default function Header() {
  return (
    <header className="bg-[#f9a319] fixed top-0 h-9 left-0 w-full z-50 md:block hidden">
      <div className="flex justify-between items-center ml-10 max-w-7x1 mx-auto p-2">
        <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
          <img
            src={IEEE_MAIN_LOGO_BW}
            alt="IEEE_MAIN_LOGO_BW"
            className="w-full h-10 p-2 -mt-3"
          />
        </a>

        <form>
          <ul className="font-poppins text-sm font-normal flex gap-5 mr-10 -mt-3">
            <a href="https://www.computer.org/" target="_blank" rel="noopener noreferrer">
              <li className="hidden sm:inline text-white font-semibold hover:underline hover:decoration-white">
                IEEE CS
              </li>
            </a>

            <a href="https://www.computer.org/csdl/magazine/co" target="_blank" rel="noopener noreferrer">
              <li className="hidden sm:inline text-white font-semibold hover:underline hover:decoration-white">
                IEEE CS Digital Library
              </li>
            </a>

            <a href="https://www.computer.org/volunteering/boards-and-committees/standards-activities/home" target="_blank" rel="noopener noreferrer">
              <li className="hidden sm:inline text-white font-semibold hover:underline hover:decoration-white">
                IEEE CS Standards
              </li>
            </a>

            <a href="https://foc.kdu.ac.lk/student_chapters/IEEE-KDU/" target="_blank" rel="noopener noreferrer">
              <li className="hidden sm:inline text-white font-semibold hover:underline hover:decoration-white">
                IEEE SB KDU
              </li> 
            </a>
          </ul>
        </form>
      </div>
    </header>
  );
}
