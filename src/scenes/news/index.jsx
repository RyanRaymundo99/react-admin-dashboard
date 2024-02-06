import React, { useEffect, useRef } from 'react';

const News = () => {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: true,
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      colorTheme: 'dark',
      locale: 'en',
    });

    const prevScript = container.current.querySelector('script');
        if (prevScript) {
          container.current.removeChild(prevScript);
        }
    
        container.current.appendChild(script);
    
        // Cleanup the script element when the component is unmounted
        return () => {
          if (container.current) {
            container.current.removeChild(script);
          }
        };
      }, []); // Empty dependency array to run the effect only once
    
      return (
        <div className="tradingview-widg-container custom-padding" ref={container} style={{ height: "100%", width: "100%" }}>
        </div>
      );
    }
    
    export default News;