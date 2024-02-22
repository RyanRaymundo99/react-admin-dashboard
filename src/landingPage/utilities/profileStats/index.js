import React, { useRef, useEffect, useState } from 'react';
import { Favorite } from '@mui/icons-material'; // Importing the Favorite icon from Material-UI
import styles from './ProfileStats.module.css'; // Import the CSS module
import Surf3 from '../../../assets/Surf3.jpg';
import Surf2 from '../../../assets/Surf2.jpg';
import Surf1 from '../../../assets/Surf1.jpg';
import SpeedIcon from '@mui/icons-material/Speed';
import TerrainIcon from '@mui/icons-material/Terrain';
import HikingIcon from '@mui/icons-material/Hiking';

function ProfileStats() {
  const placeholderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const placeholder = placeholderRef.current;
      const scrollPosition = window.scrollY;
      const elementTop = placeholder.offsetTop;
      const elementHeight = placeholder.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollPosition >= elementTop - windowHeight + windowHeight * 0.2 &&
        scrollPosition < elementTop - windowHeight + windowHeight * 0.8
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            People who made it successful
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div
          ref={placeholderRef}
          className={`${styles.placeholder} ${isVisible ? styles.show : ''}`}
        >
          <div className="max-w-7xl mx-auto lg:mx-auto flex justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 items-center">
              <div className="relative text-center">
                <div className="card">
                  <img
                    className="w-full h-112 object-cover"
                    src={Surf1}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center justify-center">
                    <TerrainIcon sx={{ fontSize: '2rem', marginBottom: '10px' }} className="mr-2" />
                    <span className="text-2xl">Iniciando</span>
                  </div>
                </div>
              </div>
              <div className="relative text-center">
                <div className="card">
                  <img
                    className="w-full h-112 object-cover"
                    src={Surf2}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center justify-center">
                    <HikingIcon sx={{ fontSize: '2rem', marginBottom: '10px' }} className="mr-2 h-10 w-10" />
                    <span className='text-2xl'>Intermediário</span>
                  </div>
                </div>
              </div>

              <div className="relative text-center">
                <div className="card">
                  <img
                    className="w-full h-112 object-cover"
                    src={Surf3}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-white p-2 flex items-center justify-center">
                    <SpeedIcon sx={{ fontSize: '2rem', marginBottom: '10px' }} className="mr-2" />
                    <span className="text-2xl">Avançado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-16">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            {' '}
            Join our team{' '}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileStats;
