import React from 'react';
import Surf from '../../../assets/Surf3.jpg';
import HikingIcon from '@mui/icons-material/Hiking';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';

function ProfileStats() {
  return (
    <section className="relative py-16">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: `url(${Surf})`}}></div>
      {/* Black overlay with linear gradient */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {/* Content */}
      <div className="relative z-20 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl lg:leading-tight">
            O QUE ESTÁ ESPERANDO?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-300">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="xl:w-1/4 md:w-1/2 p-4 relative">
              
              <div className="p-6 rounded-lg text-center">
                <HikingIcon style={{ fontSize: 130 }} className="text-white/80 mx-auto mb-6 border rounded-full p-1" alt="content"/>
                <h2 className="text-lg text-gray-100 font-bold mb-4 uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Iniciando</h2>
                <p className="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="dots-container hidden lg:flex mt-24 h-full items-center justify-center ">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="p-6 rounded-lg text-center">
                <SpeedOutlinedIcon style={{ fontSize: 130 }} className="text-white/80 mx-auto mb-6 border rounded-full p-1" alt="content"/>
                <h2 className="text-lg text-gray-100 font-bold mb-4 uppercase bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Aprendendo</h2>
                <p className="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="dots-container hidden lg:flex mt-24 h-full items-center justify-center">
                <div className="dot ml-20"></div>
                <div className="dot ml-20"></div>
                <div className="dot ml-20"></div>
              </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="p-6 rounded-lg text-center">
                <LandscapeOutlinedIcon style={{ fontSize: 130 }} className="text-white/80 mx-auto mb-6 border rounded-full p-1" alt="content"/>
                <h2 className="text-lg text-gray-100 font-bold mb-4 uppercase bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">Avançado</h2>
                <p className="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            {/* Add more similar divs for other items */}
          </div>
          
        <div className="mt-8 text-center md:mt-16">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-white10 backdrop-blur-sm border border-gray-300/50 rounded-md px-14 hover:bg-red-700/20 focus:bg-red-700"
            role="button"
          >
            Criar uma conta
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileStats;
