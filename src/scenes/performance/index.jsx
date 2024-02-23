import React, { useEffect, useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import Brazil from '../../assets/Brazil.svg';
import USA from '../../assets/USA.svg';

const Performance = () => {
  const container1 = useRef();
  const container2 = useRef();

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
          "name": "Educação",
          "originalName": "Indices",
          "symbols": [
            { "name": "BMFBOVESPA:ANIM3" },
            { "name": "BMFBOVESPA:COGN3" },
            { "name": "BMFBOVESPA:SEER3" },
            { "name": "BMFBOVESPA:YDUQ3" }
          ]
        },
        {
          "name": "Finança",
          "originalName": "Futures",
          "symbols": [
            { "name": "BMFBOVESPA:B3SA3" },
            { "name": "BMFBOVESPA:BBAS3" },
            { "name": "BMFBOVESPA:BBDCP1!" },
            { "name": "BMFBOVESPA:BRAP4" },
            { "name": "BMFBOVESPA:BRSR3" },
            { "name": "BMFBOVESPA:CIEL3" },
            { "name": "BMFBOVESPA:ITUB4" },
            { "name": "BMFBOVESPA:ITSA4" },
            { "name": "BMFBOVESPA:SANB11" },
            { "name": "BMFBOVESPA:BPAC11" }
          ]
        },
        {
          "name": "Saúde",
          "originalName": "Bonds",
          "symbols": [
            { "name": "BMFBOVESPA:HAPV3" },
            { "name": "BMFBOVESPA:ODPV3" },
            { "name": "BMFBOVESPA:QUAL3" },
            { "name": "BMFBOVESPA:FLRY3" },
            { "name": "BMFBOVESPA:PGMN3" },
            { "name": "BMFBOVESPA:AALR3" },
            { "name": "BMFBOVESPA:HYPE3" },
            { "name": "BMFBOVESPA:RADL3" }
          ]
        },
        {
          "name": "Alimentos",
          "originalName": "Forex",
          "symbols": [
            { "name": "BMFBOVESPA:ABEV3" },
            { "name": "BMFBOVESPA:BEEF3" },
            { "name": "BMFBOVESPA:BRFS3" },
            { "name": "BMFBOVESPA:CRFB3" },
            { "name": "BMFBOVESPA:JBSS3" },
            { "name": "BMFBOVESPA:MEAL3" },
            { "name": "BMFBOVESPA:MDIA3" },
            { "name": "BMFBOVESPA:MRFG3" },
            { "name": "BMFBOVESPA:PCAR3" }
          ]
        },
        {
          "name": "telecom",
          "symbols": [
            { "name": "BMFBOVESPA:OIBR3" },
            { "name": "BMFBOVESPA:TIMS3" },
            { "name": "BMFBOVESPA:VIVT3" }
          ]
        },
        {
          "name": "varejo",
          "symbols": [
            { "name": "BMFBOVESPA:AMER3" },
            { "name": "BMFBOVESPA:PETZ3" },
            { "name": "BMFBOVESPA:CEAB3" }
          ]
        },
        {
          "name": "turismo",
          "symbols": [
            { "name": "BMFBOVESPA:CVCB3" }
          ]
        },
        {
          "name": "celulose",
          "symbols": [
            { "name": "BMFBOVESPA:KLBN4" },
            { "name": "BMFBOVESPA:PETR4" },
            { "name": "BMFBOVESPA:SUZB3" }
          ]
        },
        {
          "name": "vestuário",
          "symbols": [
            { "name": "BMFBOVESPA:ARZZ3" },
            { "name": "BMFBOVESPA:GUAR3" },
            { "name": "BMFBOVESPA:LREN3" },
            { "name": "BMFBOVESPA:ALPA4" },
            { "name": "BMFBOVESPA:VIVA3" },
            { "name": "BMFBOVESPA:VULC3" },
            { "name": "BMFBOVESPA:GRND3" }
          ]
        },
        {
          "name": "energia",
          "symbols": [
            { "name": "BMFBOVESPA:CMIG4" },
            { "name": "BMFBOVESPA:CPLE3" },
            { "name": "BMFBOVESPA:ELET6" },
            { "name": "BMFBOVESPA:ENGI11" },
            { "name": "BMFBOVESPA:EQTL3" },
            { "name": "BMFBOVESPA:LIGT3" }
          ]
        },
        {
          "name": "combustível",
          "symbols": [
            { "name": "BMFBOVESPA:CSAN3" },
            { "name": "BMFBOVESPA:UGPA3" }
          ]
        },
        {
          "name": "Shopping",
          "symbols": [
            { "name": "BMFBOVESPA:IGTI11" },
            { "name": "BMFBOVESPA:JHSF3" },
            { "name": "BMFBOVESPA:MULT3" }
          ]
        },
        {
          "name": "imobiliaria",
          "symbols": [
            { "name": "ECONOMICS:BRPROD" },
            { "name": "BMFBOVESPA:CYRE3" },
            { "name": "BMFBOVESPA:EVEN3" },
            { "name": "BMFBOVESPA:GFSA3" },
            { "name": "BMFBOVESPA:MRVE3" },
            { "name": "BMFBOVESPA:TCSA3" },
            { "name": "BMFBOVESPA:JHSF3" },
            { "name": "BMFBOVESPA:EZTC3" },
            { "name": "BMFBOVESPA:TEND3" },
            { "name": "BMFBOVESPA:HBOR3" }
          ]
        },
        {
          "name": "seguros",
          "symbols": [
            { "name": "BMFBOVESPA:BBSE3" },
            { "name": "BMFBOVESPA:IRBR3" },
            { "name": "BMFBOVESPA:PSSA3" }
          ]
        },
        {
          "name": "saneamento",
          "symbols": [
            { "name": "BMFBOVESPA:CSMG3" },
            { "name": "BMFBOVESPA:SAPR11" },
            { "name": "BMFBOVESPA:SBSP3" }
          ]
        },
        {
          "name": "transporte",
          "symbols": [
            { "name": "BMFBOVESPA:CCRO3" },
            { "name": "BMFBOVESPA:ECOR3" },
            { "name": "BMFBOVESPA:EMBR3" },
            { "name": "BMFBOVESPA:POMO4" },
            { "name": "BMFBOVESPA:RAIL3" },
            { "name": "BMFBOVESPA:RAPT4" }
          ]
        },
        {
          "name": "aviação",
          "symbols": [
            { "name": "BMFBOVESPA:AZUL4" },
            { "name": "BMFBOVESPA:GOLL4" },
            { "name": "BMFBOVESPA:MOVI3" },
            { "name": "BMFBOVESPA:RENT3" }
          ]
        }
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
    script2.async = true;
    script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script2.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "exchange": "US",
      "showChart": true,
      "locale": "br",
      "width": "100%",
      "height": "80%",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "scaleFontColor": "rgba(106, 109, 120, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
    });

    // Cleanup the script element when the component is unmounted
    const prevScript2 = container2.current.querySelector('script');
    if (prevScript2) {
      container2.current.removeChild(prevScript2);
    }

    container2.current.appendChild(script2);

    // Cleanup the script element when the component is unmounted
    return () => {
      if (container1.current) {
        container1.current.removeChild(script1);
      }
      if (container2.current) {
        container2.current.removeChild(script2);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div style={{height: "60%"}}>
    <Grid container spacing={2} >
      <Grid item xs={12} md={6}>
        <Box display="flex" alignItems="center" justifyContent="center" paddingBottom="20px">
          <img src={Brazil} alt="Your Image" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <Typography variant="h3" color="textPrimary" style={{ marginLeft: '16px' }}>Mercado Brasileiro</Typography>
        </Box>
        <div className="trad-wid-conta responsive-padding-performance" style={{ height: '89%' }} ref={container1}></div>
      </Grid>
      <Grid item xs={12} md={6} paddingRight={2}>
      <Box display="flex" alignItems="center" justifyContent="center" p={2}>
          <img src={USA} alt="Your Image" style={{ width: '50px', height: '50px'}} />
          <Typography variant="h3" color="textPrimary" style={{ marginLeft: '16px' }}>Mercado Americano</Typography>
      </Box>
        <div className="trad-wid-conta responsive-padding-performance-2" style={{ height: '60%' }} ref={container2}></div>
      </Grid>
    </Grid>
    </div>
  );
}

export default Performance;
