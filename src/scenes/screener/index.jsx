import React, { useEffect } from 'react';

const Screener = () => {
  useEffect(() => {
    const container = document.querySelector('.tradingview-widget-screener__screener');
    
    // Clear the container content
    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "defaultColumn": "moving_averages",
      "defaultScreen": "general",
      "market": "crypto",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "br",
      "isTransparent": true
    });

    container.appendChild(script);

    return () => {
      // Clear the container content on unmount
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="h-full responsive-padding-performance">
      <div className="tradingview-widget-screener__screener h-full"></div>
    </div>
  );
};

export default Screener;
