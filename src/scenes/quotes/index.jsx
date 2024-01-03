import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';

const Quotes = () => {
  const theme = useTheme();
  const initialItemsToShow = 2;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const positiveColor = 'green';
  const negativeColor = 'red';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const handleClick = () => {
    setItemsToShow(prevItems => prevItems + 2);
  };

  useEffect(() => {
    const symbols = ['ABEV3', 'RRRP3', 'ALSO3', 'ALPA4', 'ARZZ3', 'CRFB3', 'AZUL4', 'B3SA3', 'BPAC11', 'BBSE3'];
  
    const fetchStockData = async (symbolIndex) => {
      if (symbolIndex >= symbols.length) {
        setLoading(false); // Set loading to false after all data is fetched
        return;
      }
  
      const symbol = symbols[symbolIndex];
      try {
        const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`, {
          headers: {
            'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
        });
  
        if (response.ok) {
          const responseData = await response.json();
          const modifiedData = {
            title: responseData.shortName,
            price: responseData.regularMarketPrice.fmt,
            high: responseData.regularMarketDayHigh.fmt,
            low: responseData.regularMarketDayLow.fmt,
            volume: responseData.regularMarketVolume.fmt,
            changePercent: responseData.regularMarketChangePercent.fmt,
            symbol: responseData.symbol,
          };
          setData(prevData => [...prevData, modifiedData]);
        } else {
          console.error('Failed to fetch data:', response.status);
        }
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
      }
  
      // Introduce a delay before processing the next symbol
      setTimeout(() => {
        fetchStockData(symbolIndex + 1);
      }, 1000); // 1000 milliseconds (adjust as needed)
    };
  
    fetchStockData(0); // Start fetching data with the first symbol
  }, []);
  
  

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <LoadingSpinner />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">
          Error loading data. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={4} px={2} justifyContent="center" alignItems="center" textAlign="center" mb={10} sx={{ '@media (min-width: 1280px)': { px: 20 } }}>
        <Grid item xs={12}>
          <Typography variant={isSmallScreen ? 'h3' : 'h1'} component="h1" mb={2} mt={5} color="text.primary">
            Principais Ações de Hoje
          </Typography>
          <Typography variant={isSmallScreen ? 'body1' : 'h3'} mb={5} color="text.secondary">
            Clique em cada item para obter mais informações detalhadas
          </Typography>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={12} sm={8} md={6} key={index}>
            <Link to={`/quotepage/${item.symbol}`} style={{ textDecoration: 'none' }}>
              <Paper variant="outlined" sx={{ p: 6, borderRadius: '50px', borderColor: 'text.secondary'  }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.primary">
                    {item.symbol}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary" style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}>
                    ({item.changePercent})
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary" style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}>
                    R${item.price}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                    Max: {item.high} Min: {item.low}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                    Vol: {item.volume}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ padding: '16px' }}>
        {itemsToShow < data.length && (
          <Button variant="contained" size="large" onClick={handleClick} sx={{ fontSize: '1.2rem', borderRadius: '50px' }}>
            Show More
          </Button>
        )}
      </Box>
    </>
  );
};

export default Quotes;