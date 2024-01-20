import React, { useEffect, useRef } from 'react';

function TradingViewTickerTape() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }`;

    container.current.appendChild(script);

    // Cleanup the script element when the component is unmounted
    return () => {
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="tradingview-widget-container" style={{ width: "94%", maxWidth: "100%" }}>
      <div className="tradingview-widget-container__widget" ref={container}></div>
    </div>
  );
}

export default TradingViewTickerTape;






