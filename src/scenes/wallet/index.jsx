import React, { useState, useEffect } from 'react';
import { tokens } from '../../theme';
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';

import BarChartIcon from '@mui/icons-material/BarChart';
import LoadingSpinner from '../global/LoadingSpinner'

const Wallet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const iconStyles = {
    fontSize: '48px', // Adjust the size as needed
    color: 'white',  // Set the color to white
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = ['AGRO3', 'CIEL3', 'CPLE6F', 'CSNA3', 'MRFG3', 'TAEE4F', 'WIZC3', 'USIM5', 'VALE3', 'CSMG3'];
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

            const infoArray = (() => {
              if (symbol === 'AGRO3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'CIEL3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'CPLE6F') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'CSNA3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'MRFG3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'TAEE4F') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'WIZC3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'USIM5') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'VALE3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              } else if (symbol === 'CSMG3') {
                return ['CDI Acumulada - 13.58%', 'Carteira CVL - 26%', 'IBOvespa - 3.15%'];
              }
            })();

            const modifiedData = {
              title: responseData.shortName,
              price: responseData.regularMarketPrice.fmt,
              high: responseData.regularMarketDayHigh.fmt,
              low: responseData.regularMarketDayLow.fmt,
              volume: responseData.regularMarketVolume.fmt,
              changePercent: responseData.regularMarketChangePercent.fmt,
              symbol: responseData.symbol,
              info: infoArray,
            };

            fetchedData.push(modifiedData);
          } else {
            console.error('Failed to fetch data:', response.status);
          }
        }

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isSmallScreen = false; // Replace with your logic for detecting small screens
  const negativeColor = 'red'; // Replace with your desired colors
  const positiveColor = 'green'; // Replace with your desired colors

  const getTextInfo = (infoArray) => {
    return infoArray.map((info, index) => (
      <Typography
          key={index}
          variant="h3"
          color="white"
          fontWeight="bold"
          paragraph
          sx={{
            padding: '50px', // Adjust padding as needed
            border: '1px solid white', // Add border
            borderRadius: '50px', // Add border radius
            overflow: 'hidden', // Hide overflow content for ticker effect
            whiteSpace: 'nowrap', // Prevent text from wrapping
            animation: 'ticker 10s linear infinite', // Add animation
          }}
        >
           <span
    style={{
      display: 'inline-block',
      animation: 'ticker 20s linear infinite', // Add animation
    }}
  ></span>
          {info}
        </Typography>
    ));
  };

  return (
    <Box display="flex" padding="130px">
    {/* Left side - Stock Quotes */}
    {loading ? (
        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
          <LoadingSpinner />
        </Box>
      ) : (
      <>
    <Box flexGrow={1} overflow="auto" padding="20px" >
    <Typography
      variant="h2"
      fontWeight="600"
      padding="30px"
      textAlign="center"
      color={colors.grey[100]}
      >
        Principais Ações da Carteira
      </Typography>
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '40px',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            display: 'flex', // Display the typography components side by side
            justifyContent: 'space-between', // Spread them apart
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
          onClick={() => setSelectedItem(index)}
        >
          <Box>
            <Typography variant="h2" component="h6" color="text.primary">
              {item.symbol}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" component="h5" color="text.secondary" style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}>
              ({item.changePercent})
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>

    {/* Right side - Text Info */}
{selectedItem !== null && (
  <Box
    flexGrow={1}
    marginLeft="200px"
    paddingY="100px"
    borderRadius="50px"
    display="flex"
    flexDirection="column"
    alignItems="center" 
    justifyContent="center"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundColor={colors.blueAccent[400]}
  >
    <BarChartIcon style={iconStyles} />
    <Typography
      variant="h2"
      fontWeight="600"
      color="white"
      paddingBottom="20px"
      textAlign="center"
    >
      BenchMarks
    </Typography>
    {getTextInfo(data[selectedItem].info).map((text, index) => (
      <Typography
        key={index}
        variant="h1"
        component="h3"
        color="white"
        padding="20px"
        style={{ textAlign: 'center' }}
      >
        {text}
      </Typography>
    ))}
  </Box>
)}
</>
)}
  </Box>
)};

export default Wallet;
