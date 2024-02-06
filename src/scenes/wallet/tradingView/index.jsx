import React from 'react';

const TradingViewWidget = ({ symbol }) => {
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Monitore todos os mercados no TradingView</span>
        </a>
      </div>
      <script
        type="text/javascript"
        src={`https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js`}
        async
      >
        {`
        {
          "symbol": "${symbol}",
          "width": 350,
          "isTransparent": false,
          "colorTheme": "dark",
          "locale": "br"
        }
      `}
      </script>
    </div>
  );
};

export default TradingViewWidget;
