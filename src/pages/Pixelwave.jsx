import React, { useState, useEffect } from 'react';
import Pixcelwave from '../assets/Pixcelwave.png';
import Lady from '../assets/LadyI.png';
import Yaka from '../assets/DigitalYaka.png';
import Quote from '../assets/quote.png';
import { useNavigate } from 'react-router-dom';

export default function ApplicationForm() {
  const navigate = useNavigate();

  // Toggle registration form visibility
  const [isClosed, setIsClosed] = useState(true); // Change to false to open the form

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0
  });

  // Countdown effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('July 30, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          Seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen text-white bg-black flex items-center justify-center px-4"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(169, 169, 169, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(169, 169, 169, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {isClosed ? (
        <div className="text-center max-w-xl mx-auto bg-white/10 p-8 rounded-xl border border-white/20">
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins uppercase text-[#7f00ff] mb-4">Registrations Closed</h1>
          <p className="text-sm font-poppins sm:text-base text-white mb-3">
            Thank you for your interest in <strong>PixelWave 2025</strong> 
          </p>
          <p className="text-sm font-poppins sm:text-base text-gray-300">
            Stay tuned for <span className="text-[#7f00ff] font-semibold font-poppins">Task 01 Submissions</span> and further updates!
          </p>

          {/* Optional: Countdown Timer */}
          <div className="mt-6">
            <h3 className="text-sm sm:text-base uppercase font-semibold mb-2">Next update in:</h3>
            <div className="flex justify-center gap-2 sm:gap-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-[#7f00ff] rounded-lg p-2 w-16 sm:w-20">
                    <div className="text-xl sm:text-2xl font-bold">{value}</div>
                    <div className="text-xs">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="mt-8 text-white uppercase text-xs sm:text-sm font-medium hover:text-[#7f00ff] transition"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      ) : (
        <>
          {/* Form content goes here if reopened */}
          <div className="text-center text-white">
            {/* You can place the full application form code here when reopening */}
            <p className="text-xl">Form is open</p>
          </div>
        </>
      )}
    </div>
  );
}
