import React, { useEffect, useRef } from 'react';

function Calendar() {
  const widgetContainerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Initialize TradingView script
    if (!scriptRef.current) {
      scriptRef.current = document.createElement('script');
      scriptRef.current.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
      scriptRef.current.async = true;
      scriptRef.current.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "isTransparent": true,
        "locale": "en",
        "importanceFilter": "-1,0,1",
        "countryFilter": "br"
      });

      widgetContainerRef.current.appendChild(scriptRef.current);
    }

    // Create a MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Check if the widget container has been removed
          if (!widgetContainerRef.current.contains(scriptRef.current)) {
            // If container is removed, remove the script
            scriptRef.current.remove();
            scriptRef.current = null;
            observer.disconnect(); // Stop observing once cleanup is done
          }
        }
      }
    });

    // Start observing the widget container
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup function
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-cont responsive-padding-performance-2" style={{ height: '100vh', width: '100%' }}>
      <div className="tradingview-widget-cont__widget" ref={widgetContainerRef} style={{ height: '100vh', width: '100%' }}></div>
    </div>
  );
}

export default Calendar;
