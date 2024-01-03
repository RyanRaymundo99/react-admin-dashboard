import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createChart, LineSeries, TimeScale, CrosshairMode } from 'lightweight-charts';
import axios from 'axios';
import { tokens } from '../../theme';

// Helper function to format market cap
const formatMarketCap = (marketCap) => {
  if (marketCap >= 1e12) {
    // If market cap is in trillions, convert to trillions format
    return (marketCap / 1e12).toFixed(2) + 'T';
  } else if (marketCap >= 1e9) {
    // If market cap is in billions, convert to billions format
    return (marketCap / 1e9).toFixed(2) + 'B';
  } else {
    // Otherwise, use the default format (in dollars)
    return marketCap.toFixed(2);
  }
};

const QuotePage = () => {
  const theme = useTheme();
  const { symbol } = useParams();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const chartContainerRef = useRef(null);

  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState({});
  const [marketCap, setMarketCap] = useState('');
  const [profitMargins, setProfitMargins] = useState('');
  const [returnOnEquity, setReturnOnEquity] = useState('');
  const [totalDebt, setTotalDebt] = useState('');

  const colors = tokens(theme.palette.mode);

  const [chartCreated, setChartCreated] = useState(false); // Declare chartCreated state

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: `https://yahoo-finance127.p.rapidapi.com/historic/${symbol}/1d/10d`,
        headers: {
          'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
          'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(options.url, { headers: options.headers });
        const data = await response.json();

        if (!data || !data.indicators || !data.timestamp) {
          console.error('Invalid data format');
          return;
        }

        const { timestamp, indicators } = data;

        if (!indicators.quote || !indicators.quote[0].close) {
          console.error('Invalid data format');
          return;
        }

        const closeData = indicators.quote[0].close.map((value, index) => ({ x: timestamp[index], y: value }));

        setChartData(closeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [symbol, theme]);

  useEffect(() => {
    if (chartData) {
      createChartWithData(chartData);
    }
  }, [chartData, theme]);
  


  const fetchData3 = async (symbol) => {
    const options = {
      method: 'GET',
      url: `https://yahoo-finance127.p.rapidapi.com/finance-analytics/${symbol}`,
      headers: {
        'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
        'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      // Extract the specific fields from the API response
      const totalDebt = data.totalDebt?.fmt;
      const profitMargins = data.profitMargins?.fmt;
      const returnOnEquity = data.returnOnEquity?.fmt; 

      // Return the extracted data as an object
      return { totalDebt, profitMargins, returnOnEquity};
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, show an error message, etc.
      return { error: 'Error fetching data' };
    }
  };

  const fetchData2 = async (symbol) => {
    const options = {
      method: 'GET',
      url: `https://yahoo-finance127.p.rapidapi.com/key-statistics/${symbol}`,
      headers: {
        'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
        'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      // Extract the specific fields from the API response
      const priceToBook = data.priceToBook?.fmt;
      const forwardPe = data.forwardPE?.fmt;
      const bookvalue = data.bookValue?.fmt;
      const trailingEps = data.epsTrailingTwelveMonths?.fmt;
      const trailingAnnualDividendRate = data.trailingAnnualDividendRate?.fmt;
      const marketCap = data.marketCap?.raw; // Get the market cap value in dollars
      const totalCash = data.totalCash?.raw; 
     

      // Return the extracted data as an object
      return { priceToBook, forwardPe, bookvalue, trailingEps, trailingAnnualDividendRate, marketCap };
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, show an error message, etc.
      return { error: 'Error fetching data' };
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const result = await fetchData2(symbol);
      setData(result);
  
      // Format the market cap and set it in the state
      const formattedMarketCap = formatMarketCap(result.marketCap);
      setMarketCap(formattedMarketCap);
  
      // Fetch profitMargins and totalDebt data and set them in the state
      const { profitMargins, totalDebt, returnOnEquity } = await fetchData3(symbol);
      setProfitMargins(profitMargins);
      setTotalDebt(totalDebt);
      setReturnOnEquity(returnOnEquity);
    };
  
    fetchDataAndSetState();
  }, [symbol]);

  const createChartWithData = useCallback((data) => {
    if (chartContainerRef.current) {
      // Clear existing chart
      chartContainerRef.current.innerHTML = '';

      // Create new chart
      const newChart = createChart(chartContainerRef.current, {
        width: 400,
        height: 300,
        layout: {
          background: { color: colors.primary[400] },
          textColor: colors.grey[100],
        },
        grid: {
          vertLines: { color: colors.grey[700] },
          horzLines: { color: colors.grey[700] },
        },
      });

      const lineSeries = newChart.addLineSeries({
        color: colors.blueAccent[500],
        lineStyle: 0,
        lineWidth: 2,
        crosshairMarkerVisible: true,
      });

      const sortedChartData = [...data].sort((a, b) => new Date(a.x) - new Date(b.x));

      const chartDataFormatted = sortedChartData.map((dataPoint) => ({
        time: new Date(dataPoint.x).getTime(),
        value: dataPoint.y,
      }));

      lineSeries.setData(chartDataFormatted);

      const timeScale = newChart.timeScale;

      newChart.applyOptions({
        timeScale: {
          tickMarkFormatter: (time, tickMarkType, locale) => {
            const date = new Date(time);
            return date.toLocaleDateString(locale, {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
          },
        },
      });

      chartContainerRef.current._chart = newChart;
      setChartCreated(true);
    }
  }, [chartContainerRef, colors]);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (chartContainerRef.current && chartContainerRef.current._chart) {
        chartContainerRef.current._chart.remove();
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data logic remains the same
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [symbol, theme]);

  useEffect(() => {
    if (chartData) {
      createChartWithData(chartData);
    }
  }, [chartData, createChartWithData]);

  
  
  
  

  return (
    <>
      <Grid container spacing={4} justifyContent="center" alignItems="center" textAlign="center" mb={isSmallScreen ? 4 : 10} px={isSmallScreen ? 1 : 2} sx={{ '@media (min-width: 1280px)': { px: 20 } }}>
        <Grid item xs={12}>
          <Typography variant={isSmallScreen ? 'h4' : 'h1'} component="h1" mb={2} color="text.primary">
            {symbol}
          </Typography>
          <Typography variant={isSmallScreen ? 'body1' : 'h3'} mb={5} color="text.secondary">
            Informações detalhadas
          </Typography>
        </Grid>
      </Grid>
  
      <div ref={chartContainerRef} style={{ height: '400px', width: '100%' }} sx={{ '@media (min-width: 1280px)': { pl: 100 } }}></div>
  
      <Grid container paddingBottom="100px" spacing={4} justifyContent="center" alignItems="center" textAlign="center" mb={isSmallScreen ? 4 : 10} mt={isSmallScreen ? 2 : 5} px={isSmallScreen ? 1 : 2} sx={{ '@media (min-width: 1280px)': { px: 10, pl: 10 } }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 2 }}>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', flex: 1, minWidth: '300px', mb: isSmallScreen ? 2 : 0, mr: isSmallScreen ? 0 : 2 }}>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.primary">
                  P/VP
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.secondary">
                  {data.priceToBook}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  P/L
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  {data.forwardPe}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.primary">
                  DY
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.secondary">
                  {data.trailingAnnualDividendRate}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  ROE
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  {returnOnEquity}
                </Typography>
              </Box>
            </Paper>
  
            <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', flex: 1, minWidth: '300px', mx: isSmallScreen ? 0 : 2 }}>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.primary">
                  Profit Margin
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.secondary">
                  {profitMargins}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  Market Cap
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  {marketCap}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.primary">
                  Enterprise Value
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.secondary">
                  here
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  Total Debt
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  {totalDebt}
                </Typography>
              </Box>
            </Paper>
  
            <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', flex: 1, minWidth: '300px', mx: isSmallScreen ? 0 : 2 }}>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.primary">
                  VPA
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h3" color="text.secondary">
                  {data.bookvalue}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  LPA
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h4'} component="h4" color="text.secondary">
                  {data.trailingEps}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
          };  

export default QuotePage;