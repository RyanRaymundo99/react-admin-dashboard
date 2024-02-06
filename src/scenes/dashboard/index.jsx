import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BMFBOVESPA:BOVA11",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "studies": [
            "STD;EMA",
            "STD;RSI"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
       // Remove previous script element
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
    <div className="tradingview-widget-container custom-padding" ref={container} style={{ height: "100%", width: "100%", backgroundColor: "#131722" }}>
    </div>
  );
}

export default memo(TradingViewWidget);
