import React, { useState, useEffect } from 'react';
import { tokens } from '../../theme';
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';

const Wallet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = ['ABEV3', 'RRRP3', 'ALSO3', 'ALPA4', 'ARZZ3'];
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
              if (symbol === 'ABEV3') {
                return ['Rendimento da Carteira - 27%', 'Rendimento IBOV Anual - 12%', 'Rendimento CDI Anual - 33%'];
              } else if (symbol === 'RRRP3') {
                return ['Rendimento da Carteira - 33%', 'Rendimento IBOV Anual - 44%', 'Rendimento CDI Anual - 93%'];
              } else if (symbol === 'ALSO3') {
                return ['Rendimento da Carteira - 44%', 'Rendimento IBOV Anual - 12%', 'Rendimento CDI Anual - 9%'];
              } else if (symbol === 'ALPA4') {
                return ['Rendimento da Carteira - 24%', 'Rendimento IBOV Anual - 22%', 'Rendimento CDI Anual - 92%'];
              } else if (symbol === 'ARZZ3') {
                return ['Rendimento da Carteira - 233%', 'Rendimento IBOV Anual - 232%', 'Rendimento CDI Anual - 932%'];
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
      <Typography key={index} variant="h3" color="text.primary"  paragraph>
        {info}
      </Typography>
    ));
  };

  return (
    <Box display="flex" paddingX="130px">
    {/* Left side - Stock Quotes */}
    <Box flexGrow={1} overflow="auto" padding="20px">
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '10px',
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
            <Typography variant="h3" component="h5" color="text.secondary">
              ({item.changePercent})
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>

    {/* Right side - Text Info */}
    {selectedItem !== null && (
        <Box flexGrow={1} backgroundColor={colors.primary[400]} marginLeft="220px" paddingTop="100px" borderRadius="10px" display="flex" flexDirection="column" alignItems="left">
        {getTextInfo(data[selectedItem].info).map((text, index) => (
          <Typography key={index} variant="h1" component="h3" color="text.primary" padding="20px" style={{ textAlign: 'left' }}>
            {text}
          </Typography>
        ))}
      </Box>
      
    )}
  </Box>
);
};

export default Wallet;
