import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import axios from 'axios';

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
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState({});
  const [marketCap, setMarketCap] = useState('');
  const [profitMargins, setProfitMargins] = useState('');
  const [returnOnEquity, setreturnOnEquity] = useState('');
  const [totalDebt, setTotalDebt] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/historic/${symbol}/1d/15d`, {
          headers: {
            'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
          }
        });

        const data = await response.json();
        console.log('Raw data:', data);

        if (!data || !data.indicators || !data.timestamp) {
          console.error('Invalid data format');
          return;
        }

        const { timestamp, indicators } = data;

        if (!indicators.quote || !indicators.quote[0].close) {
          console.error('Invalid data format');
          return;
        }

        const dates = timestamp.map((timestamp) => new Date(timestamp * 1000));
        const closeData = indicators.quote[0].close.map((value, index) => ({ x: dates[index], y: value }));

        const chartData = [
          {
            id: 'Close',
            data: closeData
          }
        ];

        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [symbol]);

  const fetchData3 = async (symbol) => {
    const options = {
      method: 'GET',
      url: `https://yahoo-finance127.p.rapidapi.com/finance-analytics/${symbol}`,
      headers: {
        'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
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
        'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
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
      setreturnOnEquity(returnOnEquity);
    };
  
    fetchDataAndSetState();
  }, [symbol]);

  return (
    <>
      <Grid container spacing={4} px={2} justifyContent="center" alignItems="center" textAlign="center" mb={10} sx={{ '@media (min-width: 1280px)': { px: 20 } }}>
        <Grid item xs={12}>
          <Typography variant={isSmallScreen ? 'h3' : 'h1'} component="h1" mb={2} color="text.primary">
            {symbol}
          </Typography>
          <Typography variant={isSmallScreen ? 'body1' : 'h3'} mb={5} color="text.secondary">
            Informações detalhadas
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: '400px', width: '100%' }}>
        {chartData && (
          <ResponsiveLine
            data={chartData}
            margin={{ top: 50, right: 100, bottom: 50, left: 150 }}
            xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
            xFormat="time:%b %d"
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisBottom={{
              format: '%b %d',
              tickValues: 'every 2 days',
              tickTextFill: '#fff'
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Price',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={true}
            colors={{ scheme: 'category10' }}
            enablePoints={false}
            enableArea={true}
            areaOpacity={0.2}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 40,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                textColor: 'white' // Customize the legend text color here
              }
            ]}
          />
        )}
      </div>
      <Grid container spacing={4} px={2} justifyContent="center" alignItems="center" textAlign="center" mb={10} mt={5} sx={{ '@media (min-width: 1280px)': { px: 10 } }}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Paper variant="outlined" sx={{ p: 6, borderRadius: '20px', flex: 1, minWidth: '300px', mr: 2 }}>
              <Box sx={{ marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                  P/VP
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
                  {data.priceToBook}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  P/L
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  {data.forwardPe}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                  DY
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
                  {data.trailingAnnualDividendRate}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  ROE
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  {returnOnEquity}
                </Typography>
              </Box>
            </Paper>
            <Paper variant="outlined" sx={{ p: 6, borderRadius: '20px', flex: 1, minWidth: '300px', mx: 2 }}>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                  Profit Margin
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
                  {profitMargins}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  Market Cap
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  {marketCap}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                  Enterprise Value
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
                  here
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  Total Debt
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  {totalDebt}
                </Typography>
              </Box>
            </Paper>
            <Paper variant="outlined" sx={{ p: 6, borderRadius: '20px', flex: 1, minWidth: '300px', mx: 2 }}>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
                  VPA
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
                  {data.bookvalue}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
                  LPA
                </Typography>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
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
