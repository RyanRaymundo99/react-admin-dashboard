import React, { useEffect, useRef } from 'react';

function Br() {
  const container = useRef();
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!scriptAdded.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "AllBR",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
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
    <div className="tradingview-widget-container responsive-padding" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default Br;
