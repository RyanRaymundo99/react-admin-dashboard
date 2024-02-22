import React, { useEffect, useRef } from 'react';

function Crypto() {
  const container = useRef();
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!scriptAdded.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
          "blockColor": "change",
          "locale": "br",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "width": "100%",
          "height": "100%"
        }`;
      container.current.appendChild(script);
      scriptAdded.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container  responsive-padding" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default Crypto;
