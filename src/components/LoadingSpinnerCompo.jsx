import KDU_CS_LOGO from '../assets/KDU_CS_LOGO.png';

const LoadingSpinnerCompo = () => {
  const animationStyle = {
    animation: 'pulseScale 1.5s ease-in-out infinite'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <style>
        {`
          @keyframes pulseScale {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.15);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}
      </style>

      <img
        src={KDU_CS_LOGO}
        alt="KDU_CS_LOGO"
        className="w-50 h-20"
        style={animationStyle}
      />
    </div>
  );
};

export default LoadingSpinnerCompo;
