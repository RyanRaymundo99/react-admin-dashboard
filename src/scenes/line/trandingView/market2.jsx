import React, { useEffect, useRef} from 'react';

function Market2({ symbol }) {
  const container2 = useRef();

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';

    // Check if script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.id = scriptId;
      script.innerHTML = `
        {
          "symbols": [
            [
              "${symbol}|1D"
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container2.current.appendChild(script);
    }
  }, [symbol]);

  return (
    <div className="trad2" ref={container2}>
    </div>
  );
}

export default Market2;
