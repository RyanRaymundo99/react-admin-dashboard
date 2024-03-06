import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import Chart1 from '../../../assets/Chart1.mp4';
import Charts2 from '../../../assets/Charts2.mp4'; // Import Charts image
import Charts3 from '../../../assets/Charts3.mp4'; // Import Charts image

const Grids = () => {
  return (
    <div className="bg-slate-950 pb-32">
      {/* First div */}
      <div className="group relative cursor-pointer overflow-hidden bg-slate-950 border border-gray-400/10 px-10 py-48 mb-5 p shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10 w-full">
        <span className="absolute top-30 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 max-w-[calc(100%-5rem)]">
            <p>Content of the first div</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs &rarr;</a>
            </p>
          </div>
        </div>
        <video className="absolute top-0 right-10 h-full" autoPlay loop muted>
          <source src={Chart1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second div */}
      <div className="group relative cursor-pointer overflow-hidden bg-slate-950 border border-gray-400/10 px-10 py-48 mb-5 p shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10 w-full">
        <span className="absolute top-30 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 max-w-[calc(100%-5rem)]">
            <p>Content of the second div</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs &rarr;</a>
            </p>
          </div>
        </div>
        <video className="absolute top-0 right-10 h-full" autoPlay loop muted>
          <source src={Charts2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Third div */}
      <div className="group relative cursor-pointer overflow-hidden bg-slate-950 border border-gray-400/10 px-10 py-48 mb-5 p shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10 w-full">
        <span className="absolute top-30 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 max-w-[calc(100%-5rem)]">
            <p>Content of the third div</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs &rarr;</a>
            </p>
          </div>
        </div>
        <video className="absolute top-0 right-10 h-full" autoPlay loop muted>
          <source src={Charts3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Grids;
