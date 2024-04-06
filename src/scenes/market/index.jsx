import React, { useEffect, useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Index = () => {
  const container1 = useRef();
  const container2 = useRef();
  const container3 = useRef();

  useEffect(() => {
    // First TradingView Widget
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.async = true;
    script1.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script1.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "symbolsGroups": [
        {
          "name": "Indices Mundias",
          "originalName": "Indices",
          "symbols": [
            { "name": "BMFBOVESPA:IBOV" },
            { "name": "BMFBOVESPA:IFNC" },
            { "name": "BLACKBULL:US30" },
            { "name": "XETR:DAX" },
            { "name": "AMEX:SPY" }
          ]
        },
        {
          "name": "Commodities",
          "originalName": "Futures",
          "symbols": [
            { "name": "TVC:UKOIL" },
            { "name": "PEPPERSTONE:COFFEE" },
            { "name": "TVC:USOIL" },
            { "name": "CBOT:ZS1!" },
            { "name": "TVC:GOLD" },
          ]
        },
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "locale": "br"
    });

    // Cleanup the script element when the component is unmounted
    const prevScript1 = container1.current.querySelector('script');
    if (prevScript1) {
      container1.current.removeChild(prevScript1);
    }

    container1.current.appendChild(script1);

    // Second TradingView Widget
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script2.async = true;
    script2.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: '100%',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
      plotLineColorFalling: 'rgba(41, 98, 255, 1)',
      gridLineColor: 'rgba(240, 243, 250, 0)',
      scaleFontColor: 'rgba(106, 109, 120, 1)',
      belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
      belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      tabs: [
        {
          title: 'Ganhadores',
          symbols: [
            { s: 'BMFBOVESPA:PETZ3' },
            { s: 'BMFBOVESPA:PRIO3' },
            { s: 'BMFBOVESPA:SOMA3' },
            { s: 'BMFBOVESPA:NTCO3' },
            { s: 'BMFBOVESPA:ARZZ3' }
          ],
          originalTitle: 'Indices'
        },
        {
          title: 'Perdedores',
          symbols: [
            { s: 'BMFBOVESPA:EMBR3' },
            { s: 'BMFBOVESPA:CPFE3' },
            { s: 'BMFBOVESPA:FLRY3' },
            { s: 'BMFBOVESPA:SBSP3' },
            { s: 'BMFBOVESPA:IRBR3' }
          ],
          originalTitle: 'Perdedores'
        }
      ]
    });

    // Cleanup the script element when the component is unmounted
    const prevScript2 = container2.current.querySelector('script');
    if (prevScript2) {
      container2.current.removeChild(prevScript2);
    }

    container2.current.appendChild(script2);



      const script3 = document.createElement('script');
      script3.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
      script3.async = true;
      script3.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en",
        "isTransparent": true
      });
  
      const container = document.getElementsByClassName('cryptostats-widget-container__widget')[0];
      container.appendChild(script3);

    // Cleanup the script element when the component is unmounted
    return () => {
      if (container1.current) {
        container1.current.removeChild(script1);
      }
      if (container2.current) {
        container2.current.removeChild(script2);
      }
      if (container3.current) {
        container3.current.removeChild(script3);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div style={{height: "60%"}}>
    <Grid container spacing={2} >
      <Grid item xs={12} md={6}>
        <div className="trad-wid-conta responsive-padding-performance" style={{ height: '89%' }} ref={container1}></div>
      </Grid>
      <Grid item xs={12} md={6} paddingRight={2}>
        <div className="trad-wid-conta responsive-padding-performance" style={{ height: '89%' }} ref={container2}></div>
      </Grid>
      <Grid item xs={12} md={12} paddingRight={2}>
      <div className="cryptostats-widget-container__widget responsive-padding-performance" style={{ height: '100%' }} ref={container3}></div>
      </Grid>
    </Grid>
    </div>
  );
}

export default Index;
