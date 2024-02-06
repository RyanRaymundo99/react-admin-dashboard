import React from 'react';
import { Link } from 'react-router-dom';
import DashboardPic from '../../../assets/Dashboard.png'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-r from-black to-slate-950 sm:py-24 lg:py-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-8 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-7xl">Liberte seu Potencial de Investimento</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-100">Aprimore suas escolhas de investimento e impulsione seu sucesso financeiro com nossa plataforma personalizada e repleta de recursos</p>

          {/* Use Link component instead of anchor tag */}
          <Link to="/login">
            <button className="inline-flex items-center justify-center px-6 py-4 mt-10 text-base font-semibold bg-white rounded-md">
              <svg className="w-5 h-5 mr-2 -ml-1 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Explorar </span>
            </button>
          </Link>
        </div>

        <img className="w-full max-w-8xl mx-auto mt-8 rounded-lg shadow-xl sm:mt-20" src={DashboardPic} alt="" />

        <div className="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
          <div className="flex items-center flex-1">
            <svg className="flex-shrink-0 text-white/50 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug text-white">Create powerful websites fast</p>
          </div>

          <div className="flex items-center flex-1">
            <svg className="flex-shrink-0 text-white/50 w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug text-white">Easy to customize, ready to launch</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
