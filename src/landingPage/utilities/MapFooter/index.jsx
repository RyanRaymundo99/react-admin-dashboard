import React from 'react';

function Index() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-slate-950/30">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
      </div>
      <div className="py-20 lg:w-1/3 lg:ml-auto pr-10">
      <div className="h-full bg-black bg-opacity-75 px-8 py-4 lg:py-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">CATEGORY</h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-200 mb-3">Ennui Snackwave Thundercats</h1>
        <p className="leading-relaxed text-gray-400 mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Index;
