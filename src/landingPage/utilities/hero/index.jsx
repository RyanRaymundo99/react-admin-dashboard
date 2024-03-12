import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardVideo from '../../../assets/Dashboard.mp4';
import lines from '../../../assets/lines.svg';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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

    return <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text sm:text-4xl lg:text-8xl uppercase">{displayText}</h2>;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex ) % texts.length);
    }, 5000); // Change text every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <section className="relative py-52 bg-slate-950 lg:py-52">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <img src={lines} alt="" />
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-8 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <TypingAnimation text={texts[textIndex]} speed={100} />
          <p className="mt-4 leading-relaxed text-gray-400 text-2xl">Aprimore suas escolhas de investimento e impulsione seu sucesso financeiro com nossa plataforma personalizada e repleta de recursos</p>
          <Link to="/login">
            <div className="inline-flex items-center justify-center">
            <KeyboardDoubleArrowDownIcon className="text-pink-600 mt-5" style={{ width: '2em', height: '2em' }} />
            </div>
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
