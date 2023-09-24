import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, useTheme, Paper, Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { tokens } from '../../theme';
import CustomLineChart from '../../components/IBOV';
import Selic from '../../components/Selic';
import IPCA from '../../components/IPCA';
import LoadingSpinner from '../global/LoadingSpinner';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [closeData, setCloseData] = useState(null);
  const [closeDifference, setCloseDifference] = useState(null);

  const initialItemsToShow = 2;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
    const fetchData = async () => {
      try {
        const symbols = ['ABEV3', 'RRRP3', 'ALSO3', 'ALPA4', 'ARZZ3', 'CRFB3', 'AZUL4', 'B3SA3', 'BPAC11', 'BBSE3'];

        const fetchStockData = async (symbol) => {
          const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`, {
            headers: {
              'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
              'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
            },
          });

          if (response.ok) {
            const responseData = await response.json();
            return {
              changePercent: responseData.regularMarketChangePercent.fmt,
              symbol: responseData.symbol,
            };
          } else {
            console.error('Failed to fetch data for', symbol, response.status);
            return null;
          }
        };

        const fetchedData = [];

        for (let i = 0; i < symbols.length; i++) {
          const symbol = symbols[i];
          const stockData = await fetchStockData(symbol);
          if (stockData) {
            fetchedData.push(stockData);
          }
        }

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
        setLoading(false);
      }
    };

    const updateInterval = setInterval(fetchData, 60000); // Fetch data every minute

    fetchData(); // Initial data fetch

    return () => clearInterval(updateInterval); // Clear the interval on unmount
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
       <div className="stock-ticker-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="stock-ticker-list">
          {data.map((item, index) => (
            <li key={index}>
              <span className="stock-ticker-symbol">{item.symbol}: </span>
              <span className={`stock-ticker-percent ${item.changePercent.startsWith('-') ? 'negative' : 'positive'}`}>
                ({item.changePercent})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 12"
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
          gridColumn="span 6"
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
          gridColumn="span 6"
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




