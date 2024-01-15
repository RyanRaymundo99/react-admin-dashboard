import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const isMounted = useRef(true); // Track the mounted state

  useEffect(() => {
    // Remove previous script element
    const prevScript = container.current.querySelector('script');
    if (prevScript) {
      container.current.removeChild(prevScript);
    }

    // Create a new script element
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BMFBOVESPA:IBOV",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "br",
        "enable_publishing": false,
        "backgroundColor": "rgba(0, 0, 0, 1)",
        "gridColor": "rgba(101, 101, 101, 0.06)",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "hotlist": true,
        "studies": [
          "STD;24h%Volume"
        ],
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    // Cleanup the script element when the component is unmounted
    return () => {
      isMounted.current = false; // Set mounted state to false
      if (isMounted.current && container.current) {
        container.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="tradingview-widget-container custom-padding" ref={container} style={{ height: "100%", width: "100%" }}>
    </div>
  );
}

export default memo(TradingViewWidget);
