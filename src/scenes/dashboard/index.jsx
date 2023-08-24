import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, useTheme, Paper, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from '@mui/material';
import { tokens } from '../../theme';
import CustomLineChart from '../../components/IBOV';
import Selic from '../../components/Selic';
import IPCA from '../../components/IPCA';


const LoadingSpinner = () => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
  width="100px"
  height="100px"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <circle cx="50" cy="50" r="0" fill="none" stroke="#3f51b5" strokeWidth="10">
    <animate
      attributeName="r"
      repeatCount="indefinite"
      dur="1.1627906976744184s"
      values="0;40"
      keyTimes="0;1"
      keySplines="0 0.2 0.8 1"
      calcMode="spline"
      begin="0s"
    ></animate>
    <animate
      attributeName="opacity"
      repeatCount="indefinite"
      dur="1.1627906976744184s"
      values="1;0"
      keyTimes="0;1"
      keySplines="0.2 0 0.8 1"
      calcMode="spline"
      begin="0s"
    ></animate>
  </circle>
  <circle cx="50" cy="50" r="0" fill="none" stroke="#3f51b5" strokeWidth="10">
    <animate
      attributeName="r"
      repeatCount="indefinite"
      dur="1.1627906976744184s"
      values="0;40"
      keyTimes="0;1"
      keySplines="0 0.2 0.8 1"
      calcMode="spline"
      begin="-0.5813953488372092s"
    ></animate>
    <animate
      attributeName="opacity"
      repeatCount="indefinite"
      dur="1.1627906976744184s"
      values="1;0"
      keyTimes="0;1"
      keySplines="0.2 0 0.8 1"
      calcMode="spline"
      begin="-0.5813953488372092s"
    ></animate>
  </circle>
</svg>
);

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [closeData, setCloseData] = useState(null);
  const [closeDifference, setCloseDifference] = useState(null);

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
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-finance127.p.rapidapi.com/price/%5EBVSP',
        headers: {
          'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
          'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const closePrice = response.data.regularMarketPrice.raw;
        const previousClosePrice = response.data.regularMarketPreviousClose.raw;

        setCloseData(closePrice);

        const difference = closePrice - previousClosePrice;
        setCloseDifference(difference);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const symbols = ['ABEV3', 'RRRP3', 'ALSO3', 'ALPA4', 'ARZZ3', 'CRFB3', 'AZUL4', 'B3SA3', 'BPAC11', 'BBSE3'];
        const fetchedData = [];

        for (let i = 0; i < symbols.length; i++) {
          const symbol = symbols[i];
          const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`, {
            headers: {
              'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
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

            fetchedData.push(modifiedData);
          } else {
            console.error('Failed to fetch data:', response.status);
          }
        }

        setData(fetchedData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData2();
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
    <Box ml="100px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                
                fontWeight="600"
                color={colors.grey[100]}
              >
                IBOVESPA
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                paddingBottom="50px"
                color={closeDifference !== null && closeDifference < 0 ? colors.red : colors.greenAccent}
              >
                {closeData !== null ? closeData.toFixed(2) : 'Loading...'}
              </Typography>
            </Box>
            {closeDifference !== null && (
              <Typography
                variant="h6"
                fontWeight="600"
                color={closeDifference < 0 ? colors.redAccent[400] : colors.greenAccent[400]}
              >
                {closeDifference.toFixed(2)}
              </Typography>
            )}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <CustomLineChart isDashboard={true} />
          </Box>
          
        </Box>
         {/* ROW 2 */}
         
        <Box
          gridColumn="span 4"
          gridRow="span 10"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Cotações
            </Typography>
          </Box>

          {data.map((item, index) => (
          <Grid item xs={12} sm={8} md={6} key={index} padding={2}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Typography variant={isSmallScreen ? 'h7' : 'h6'} component="h6" color="text.primary">
                    {item.symbol}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="h5" color="text.secondary" style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}>
                    ({item.changePercent})
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h4" color="text.secondary" style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}>
                    R${item.price}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant={isSmallScreen ? 'h5' : 'h5'} component="h5" color="text.secondary">
                    Max: {item.high} Min: {item.low}
                  </Typography>
                  <Typography variant={isSmallScreen ? 'h5' : 'h5'} component="h5" color="text.secondary">
                    Vol: {item.volume}
                  </Typography>
                </Box>
              </Paper>
          </Grid>
        ))}
        </Box>
         
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                
                fontWeight="600"
                color={colors.grey[100]}
              >
                SELIC - Ultimos 3 anos
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="20px 0 0 0">
            <Selic isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 4 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                
                fontWeight="600"
                color={colors.grey[100]}
              >
                IPCA - Ultimos 7 meses
              </Typography>
            </Box>
            
          </Box>
          <Box height="250px" m="20px 0 0 0">
            <IPCA isDashboard={true} />
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Dashboard;




