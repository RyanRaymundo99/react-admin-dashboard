import React, { useEffect, useRef } from 'react';

const Market1 = ({ symbol }) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    // Check if the script has already been appended
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
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
      document.getElementsByClassName('tradingvie')[0].appendChild(script);
      
      // Update the ref to indicate that the script has been appended
      scriptRef.current = script;
    }
    
    return () => {
      // Don't remove the script if the component is unmounting due to a change in the symbol prop
      if (scriptRef.current && symbol === scriptRef.current.innerHTML.symbol) {
        return;
      }
      // Otherwise, remove the script
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [symbol]);

  return (
    <div className="tradingvieg">
      <div className="tradingvie"></div>
    </div>
  );
};

export default Market1;
