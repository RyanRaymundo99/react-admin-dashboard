import React, { useState, useEffect } from 'react';
import { tokens } from '../../theme';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner';

const Wallet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = ['AGRO3'];

        const fetchedData = [];

        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (let i = 0; i < symbols.length; i++) {
          const symbol = symbols[i];
          const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`, {
            headers: {
              'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
              'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
            },
          });

          if (response.ok) {
            const responseData = await response.json();

            const infoArray = [
              'CDI Acumulada  13.58%',
              'Carteira CVL  26%',
              'IBOvespa  3.15%',
            ];

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

          // Introduce a delay between requests (adjust the delay time as needed)
          await delay(100); // 100 milliseconds delay
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

  const getTextInfo = (infoArray) => {
    return infoArray.map((info, index) => (
      <Typography
        key={index}
        variant="h4"
        color="white"
        fontWeight="bold"
        paragraph
        sx={{
          animation: 'ticker 10s linear infinite',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: 'ticker 20s linear infinite',
          }}
        ></span>
        {info}
      </Typography>
    ));
  };

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const isSmallScreen = true; // Replace with your logic for detecting small screens
  const negativeColor = 'red'; // Replace with your desired colors
  const positiveColor = 'rgb(12, 250, 12)'; // Replace with your desired colors

  return (
    <Box display="flex" flexDirection={isSmallScreen ? 'column-reverse' : 'row'} paddingX={{ xs: '5px', sm: '5px', md: '100px', lg: '100px', xl: '100px' }} paddingY="30px">
      {/* Left side - Stock Quotes */}
      {loading ? (
        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
          <LoadingSpinner />
        </Box>
      ) : (
        <>
          <Box flexGrow={1} overflow="auto">
            <Typography variant="h1" fontWeight="600" paddingY="50px" textAlign="center" color={colors.grey[100]}>
              CARTERIA CVL
            </Typography>

            {selectedItem === null && (
              <Box paddingBottom="20px">
                <Typography variant="h5" fontWeight="600" paddingLeft="10px" paddingBottom="20px" textAlign="center" color={colors.grey[400]}>
                  Clique nas ações para abrir a Benchmark
                </Typography>
              </Box>
            )}

            {data.map((item, index) => (
              <Paper
                key={index}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 2,
                  marginBottom: '10px',
                  cursor: 'pointer',
                  backgroundColor: `${colors.primary[400]} !important`,
                  borderRadius: '20px',
                  transition: isSmallScreen ? 'none' : 'transform 0.2s', // Remove hover animation for small screens
                  boxShadow: selectedItem === index ? '0px 0px 10px 5px rgba(255, 255, 255, 0.3)' : 'none', // Color change on click
                  paddingLeft: '30px', // Add left padding
                }}
              >
                <Box>
                  <Typography variant="h3" component="h5" color="text.primary">
                    {item.symbol}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    component="h5"
                    color="text.secondary"
                    style={{ color: item.changePercent.startsWith('-') ? negativeColor : positiveColor }}
                  >
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
              margin={isSmallScreen ? '0' : '0 0 0 200px'} // Adjust margin for small devices
              borderRadius="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              paddingY="20px"
              backgroundColor={colors.blueAccent[500]}
            >
              <Box alignItems="center" justifyItems="center" color="text.primary">
                <Typography variant="h2" fontWeight="600" color="white" paddingBottom="20px" textAlign="center">
                  BenchMarks
                </Typography>
              </Box>

              {getTextInfo(data[selectedItem].info).map((text, index) => (
                <Typography
                  key={index}
                  variant="h4"
                  component="h6"
                  padding="2px"
                  style={{ textAlign: 'center', color: 'text.primary' }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Wallet;