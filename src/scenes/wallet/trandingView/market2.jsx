import React, { useEffect, useRef } from 'react';

const Market2 = ({ symbol }) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    // Check if the script has already been appended
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": symbol,
        "width": 350,
        "isTransparent": true,
        "colorTheme": "dark",
        "locale": "en"
      });
      document.getElementsByClassName('tradingvie2')[0].appendChild(script);
      
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
    <div className="tradingvieg2">
      <div className="tradingvie2"></div>
    </div>
  );
};

export default Market2;
