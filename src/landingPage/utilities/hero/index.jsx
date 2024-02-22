import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardVideo from '../../../assets/Dashboard.mp4';
import lines from '../../../assets/lines.svg';

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Liberte seu Potencial de Investimento", "Escolha seu Perfil"];
  
  const TypingAnimation = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, [text, speed]);

    return <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-7xl">{displayText}</h2>;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <section className="relative py-52 bg-gradient-to-r from-black to-slate-950 lg:py-52">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <img src={lines} alt="" />
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-8 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <TypingAnimation text={texts[textIndex]} speed={100} />
          <p className="mt-4 text-base leading-relaxed text-gray-100">Aprimore suas escolhas de investimento e impulsione seu sucesso financeiro com nossa plataforma personalizada e repleta de recursos</p>
          <Link to="/login">
            <button className="inline-flex items-center justify-center px-6 py-4 mt-10 text-base font-semibold bg-transparent border border-gray-500 rounded-md">
              <svg className="w-5 h-5 mr-2 -ml-1 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600"> Explorar </span>
            </button>
          </Link>
        </div>
        <video className="w-full max-w-8xl mx-auto mt-8 rounded-lg shadow-xl sm:mt-20" autoPlay loop muted>
          <source src={DashboardVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Hero;
