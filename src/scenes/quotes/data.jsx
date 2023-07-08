import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import axios from 'axios'

const QuotePage = () => {
  const theme = useTheme();
  const { symbol } = useParams();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([]);



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

        const dates = timestamp.map(timestamp => new Date(timestamp * 1000));
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
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://yahoo-finance127.p.rapidapi.com/key-statistics/PETR4.SA', {
          headers: {
            'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

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
    <Grid container spacing={4} px={2} justifyContent="center" alignItems="center" textAlign="center" mb={10} mt={5} sx={{ '@media (min-width: 1280px)': { px: 20 } }}>
  <Grid item xs={12} sm={8} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Paper variant="outlined" sx={{ p: 6, borderRadius: '20px', flex: 1, m:2 }}>
        <Box sx={{ marginBottom: '0.5rem',  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
            P/VP
          </Typography>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
            {data.priceToBook?.fmt}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '0.5rem',  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
            P/L
          </Typography>
          <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
            {data.forwardPE?.fmt}
          </Typography>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ p: 6, borderRadius: '20px', flex: 1, m:2 }}>
        <Box sx={{ marginBottom: '0.5rem',  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.primary">
            VPA
          </Typography>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} component="h3" color="text.secondary">
            {data.bookValue?.fmt}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '0.5rem',  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
            LPA
          </Typography>
          <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary">
            {data.trailingEps?.fmt}
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
