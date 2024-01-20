import React, { useEffect } from 'react';

const Calendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;

    script.text = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "br",
      "importanceFilter": "-1,0,1",
      "countryFilter": "br"
    });

    const container = document.querySelector('.tradingview-widge-container__widge');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      try {
        const container = document.querySelector('.tradingview-widge-container__widge');
        if (container && container.contains(script)) {
          container.removeChild(script);
        }
      } catch (error) {
        console.error('Error removing script:', error);
      }
    };
  }, []);

  return (
    <div className="tradingview-widge-container" style={{ height: "100%", maxWidth: "100%" }}>
      <div className="tradingview-widge-container__widge responsive-padding"></div>
    </div>
  );
};

export default Calendar;
