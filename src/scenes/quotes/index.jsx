import React, { useEffect, useRef, useState } from 'react';
import { Grid, Button, Menu, MenuItem } from '@mui/material';
import stocks from '../../components/stocks';

// Custom hook for managing selected symbol state
function useSymbolSelection(defaultSymbol) {
  const [selectedSymbol, setSelectedSymbol] = useState(defaultSymbol);

  const handleSymbolChange = (newSymbol) => {
    setSelectedSymbol(newSymbol);
    // You can perform additional actions or signals here when the symbol changes
  };

  return { selectedSymbol, handleSymbolChange };
}

function TradingViewWidget({ symbol, chartType, locale, scriptSrc, style }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
          "largeChartUrl": "",
          "displayMode": "regular",
          "width": "90%",
          "height": "90%",
          "colorTheme": "dark",
          "symbol": "${symbol || 'AAPL'}",
          "locale": "${locale || 'en'}"
      }`;

    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, [symbol, chartType, locale, scriptSrc]);

  return (
    <div className="trad-wid" ref={container} style={style}></div>
  );
}


  function TradingViewOverviewWidget({ handleSymbolChange, stocks }) {
    const container = useRef();
  
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            ["Animation Corp", "BMFBOVESPA:ANIM3|1D"],
    ["Cognitive Ltd", "BMFBOVESPA:COGN3|1D"],
    ["Seer Incorporated", "BMFBOVESPA:SEER3|1D"],
    ["Education Group", "BMFBOVESPA:YDUQ3|1D"],
    ["Brazil SA", "BMFBOVESPA:B3SA3|1D"],
    ["Brazilian Bank", "BMFBOVESPA:BBAS3|1D"],
    ["BBD Corp", "BMFBOVESPA:BBDCP1!|1D"],
    ["Brazilian Mining", "BMFBOVESPA:BRAP4|1D"],
    ["Brazilian Resources", "BMFBOVESPA:BRSR3|1D"],
    ["Consumer Emporium", "BMFBOVESPA:CIEL3|1D"],
    ["Itau Corporation", "BMFBOVESPA:ITUB4|1D"],
    ["Itausa Group", "BMFBOVESPA:ITSA4|1D"],
    ["Sanbank", "BMFBOVESPA:SANB11|1D"],
    ["Banco Pacific", "BMFBOVESPA:BPAC11|1D"],
    ["Health & Pharma", "BMFBOVESPA:HAPV3|1D"],
    ["Odyssey Pharma", "BMFBOVESPA:ODPV3|1D"],
    ["Quality Pharmaceuticals", "BMFBOVESPA:QUAL3|1D"],
    ["Flory Industries", "BMFBOVESPA:FLRY3|1D"],
    ["Progemin Corp", "BMFBOVESPA:PGMN3|1D"],
    ["Advanced Labs", "BMFBOVESPA:AALR3|1D"],
    ["Hypnosis Pharma", "BMFBOVESPA:HYPE3|1D"],
    ["Radar Laboratories", "BMFBOVESPA:RADL3|1D"],
    ["Brazilian Brewery", "BMFBOVESPA:ABEV3|1D"],
    ["Beef & Co", "BMFBOVESPA:BEEF3|1D"],
    ["Brazilian Foods", "BMFBOVESPA:BRFS3|1D"],
    ["Cerebral Foods", "BMFBOVESPA:CRFB3|1D"],
    ["Juicy Burgers", "BMFBOVESPA:JBSS3|1D"],
    ["Meals SA", "BMFBOVESPA:MEAL3|1D"],
    ["Media Industries", "BMFBOVESPA:MDIA3|1D"],
    ["Marfrig Group", "BMFBOVESPA:MRFG3|1D"],
    ["Petrochemicals SA", "BMFBOVESPA:PCAR3|1D"],
    ["Oi Communications", "BMFBOVESPA:OIBR3|1D"],
    ["Tim Telecom", "BMFBOVESPA:TIMS3|1D"],
    ["Vivo Telecommunications", "BMFBOVESPA:VIVT3|1D"],
    ["American Retailers", "BMFBOVESPA:AMER3|1D"],
    ["Petz Retail", "BMFBOVESPA:PETZ3|1D"],
    ["Creative Apparel", "BMFBOVESPA:CEAB3|1D"],
    ["CVC Brazil", "BMFBOVESPA:CVCB3|1D"],
    ["Klabin SA", "BMFBOVESPA:KLBN4|1D"],
    ["Petrobras", "BMFBOVESPA:PETR4|1D"],
    ["Suzano SA", "BMFBOVESPA:SUZB3|1D"],
    ["Arzato Apparel", "BMFBOVESPA:ARZZ3|1D"],
    ["Guarani SA", "BMFBOVESPA:GUAR3|1D"],
    ["La Renzo", "BMFBOVESPA:LREN3|1D"],
    ["Alpaca Clothing", "BMFBOVESPA:ALPA4|1D"],
    ["Viva Fashion", "BMFBOVESPA:VIVA3|1D"],
    ["Vulcan Co", "BMFBOVESPA:VULC3|1D"],
    ["Grand Retail", "BMFBOVESPA:GRND3|1D"],
    ["Cemig SA", "BMFBOVESPA:CMIG4|1D"],
    ["CPFL Energia", "BMFBOVESPA:CPLE3|1D"],
    ["Eletrobras", "BMFBOVESPA:ELET6|1D"],
    ["Engie SA", "BMFBOVESPA:ENGI11|1D"],
    ["Equatorial Energy", "BMFBOVESPA:EQTL3|1D"],
    ["Light SA", "BMFBOVESPA:LIGT3|1D"],
    ["Cosan SA", "BMFBOVESPA:CSAN3|1D"],
    ["Ultrapar", "BMFBOVESPA:UGPA3|1D"],
    ["IGTech Inc", "BMFBOVESPA:IGTI11|1D"],
    ["JHSF SA", "BMFBOVESPA:JHSF3|1D"],
    ["Multiplan SA", "BMFBOVESPA:MULT3|1D"],
    ["Brazilian Properties", "ECONOMICS:BRPROD|1D"],
    ["Cyrela Brazil", "BMFBOVESPA:CYRE3|1D"],
    ["Even SA", "BMFBOVESPA:EVEN3|1D"],
    ["Gafisa SA", "BMFBOVESPA:GFSA3|1D"],
    ["MRV Engineering", "BMFBOVESPA:MRVE3|1D"],
    ["Technisa SA", "BMFBOVESPA:TCSA3|1D"],
    ["JHSF SA", "BMFBOVESPA:JHSF3|1D"],
    ["EZTec Empreendimentos", "BMFBOVESPA:EZTC3|1D"],
    ["Tenda SA", "BMFBOVESPA:TEND3|1D"],
    ["Hibor SA", "BMFBOVESPA:HBOR3|1D"],
    ["BB Seguridade", "BMFBOVESPA:BBSE3|1D"],
    ["IRB Brasil", "BMFBOVESPA:IRBR3|1D"],
    ["Porto Seguro SA", "BMFBOVESPA:PSSA3|1D"],
    ["Copasa MG", "BMFBOVESPA:CSMG3|1D"],
    ["Sanepar", "BMFBOVESPA:SAPR11|1D"],
    ["Sabesp", "BMFBOVESPA:SBSP3|1D"],
    ["CCR SA", "BMFBOVESPA:CCRO3|1D"],
    ["Ecorodovias", "BMFBOVESPA:ECOR3|1D"],
    ["Embraer SA", "BMFBOVESPA:EMBR3|1D"],
    ["Pomona SA", "BMFBOVESPA:POMO4|1D"],
    ["Randon SA", "BMFBOVESPA:RAIL3|1D"],
    ["Randon SA", "BMFBOVESPA:RAPT4|1D"],
    ["Azul SA", "BMFBOVESPA:AZUL4|1D"],
    ["Gol Linhas Aereas", "BMFBOVESPA:GOLL4|1D"],
    ["Movida Participações", "BMFBOVESPA:MOVI3|1D"],
    ["Localiza Rent a Car", "BMFBOVESPA:RENT3|1D"]
          ],
          "chartOnly": false,
          "width": "99%",
          "height": "100%",
          "locale": "br",
          "colorTheme": "dark",
          "autosize": true,
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
  
      // Cleanup the script element when the component is unmounted
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
      <div className="trading-widg-contai" style={{ height: '800px' }} ref={container}></div>
    );
  }

function App() {
  const { selectedSymbol, handleSymbolChange } = useSymbolSelection("AAPL");
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    // Additional setup or actions when the component mounts or selectedSymbol changes
  }, [selectedSymbol]);
  

  return (
    <Grid container spacing={1} className='responsive-padding-quotes'>
      {/* First TradingViewWidget */}
      <Grid item xs={12} md={12}>
          <TradingViewOverviewWidget/>
      </Grid>
      {/* Symbol selector buttons */}
      <Grid item xs={12} md={12} mr={10}>
        <div>
          {stocks.slice(0, 13).map((stock, index) => (
            <Button
              key={index}
              variant="outlined"
              style={{ background: "#1e222d", color: "#fff", border: "1px solid gray" }}
              onClick={() => handleSymbolChange(stock.symbol)}
            >
              {stock.name}
            </Button>
          ))}
          <Button
            variant="outlined"
            style={{ background: "#1e222d", color: "#fff", border: "1px solid gray"}}
            onClick={handleShowMoreToggle}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
          <Menu
            anchorEl={showMore ? document.getElementById('moreButton') : null}
            open={showMore}
            onClose={handleShowMoreToggle}
          >
            {stocks.slice(13).map((stock, index) => (
              <MenuItem key={index} onClick={() => handleSymbolChange(stock.symbol)}>
                {stock.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Grid>
  
      {/* Second TradingViewWidget */}
      <Grid item xs={12} md={6}>
        <TradingViewWidget
          symbol={selectedSymbol}
          locale="br"
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-financials.js"
          style={{ height: "900px", width: "99%" }} // Adjusted width to 100%
        />
      </Grid>
     
      {/* Third TradingViewWidget */}
      <Grid item xs={12} md={6}>
        <TradingViewWidget
          symbol={selectedSymbol}
          chartType="candlestick"
          locale="br"
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
          style={{ height: "500px", width: "100%" }} // Adjusted width to 100%
        />
      </Grid>
    </Grid>
  );
}  

export default App;
