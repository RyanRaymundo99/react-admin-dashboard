import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PQueue from 'p-queue';
import { Box, Typography, Paper, useTheme, Grid, Container } from '@mui/material';
import { tokens } from '../../theme';

import Loading from '../../components/LoadingSpinner'

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = {
          Educação: ['ANIM3', 'COGN3', 'SEER3', 'YDUQ3'],
          Finança: ['B3SA3', 'BBAS3', 'BBDC4', 'BPAC11', 'BRAP4', 'BRSR6', 'CIEL3', 'ITUB4', 'ITSA4', 'SANB11', 'BIDI4'],
          Saúde: ['HAPV3', 'ODPV3', 'QUAL3', 'SULA11', 'FLRY3', 'PGMN3', 'AALR3', 'PARD3', 'HYPE3', 'RADL3'],
          Alimentos: ['ABEV3', 'BEEF3', 'BKBR3', 'BRFS3', 'CRFB3', 'JBSS3', 'MEAL3', 'MDIA3', 'MRFG3', 'PCAR3'], 
          Telecom: ['OIBR3', 'TIMS3', 'VIVT3'], 
          Varejo: ['AMER3', 'NGLU3', 'VIIA3', 'PETZ3', 'CEAB3'],   
          Turismo: ['CVCB3'],  
          Celulose: ['KLBN4', 'PETR4', 'SUZB3'],  
          Vestuario: ['ARZZ3', 'GUAR3', 'LREN3', 'ALPA4', 'VIVA3', 'VULC3', 'GRND3'], 
          Energia: ['CMIG4', 'CPLE6', 'ELET6', 'ENGI11', 'EQTL3', 'LIGT3'], 
          Combustivel: ['CSAN3', 'UGPA3'], 
          Shoppings: ['ALSO3', 'BRML3', 'IGTI11', 'JHSF3', 'MULT3'], 
          Imobiliarios: ['BRPR3', 'CYRE3', 'EVEN3', 'GFSA3', 'MRVE3', 'TCSA3', 'JHSF3', 'EZTC3', 'TEND3', 'HBOR3'],
          Seguros: ['BBSE3', 'IRBR3', 'PSSA3'], 
          Saneamento: ['CSMG3', 'SAPR11', 'SBSP3'], 
          Transporte: ['CCRO3', 'ECOR3', 'EMBR3', 'POMO4', 'RAIL3', 'RAPT4'], 
          Aviação: ['AZUL4', 'GOLL4', 'MOVI3', 'RENT3'],
        };

        const cache = {}; // Create a cache for storing fetched data

        const fetchStockData = async (symbol) => {
          if (cache[symbol]) {
            return cache[symbol];
          }

          try {
            const response = await axios.get(`https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`, {
              headers: {
                'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
                'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
              },
            });

            if (response.status === 200) {
              const responseData = response.data;
              const stockData = {
                changePercent: responseData.regularMarketChangePercent.fmt,
                price: responseData.regularMarketPrice.fmt,
                symbol: responseData.symbol,
                daily: responseData.regularMarketDayRange.raw,
                yearly: responseData.fiftyTwoWeekRange.raw,
              };

              // Store data in cache
              cache[symbol] = stockData;

              return stockData;
            } else {
              console.error('Failed to fetch data for', symbol, response.status);
              return null;
            }
          } catch (error) {
            console.error('Error fetching data for', symbol, error);
            return null;
          }
        };

        const queue = new PQueue({ concurrency: 1 }); // Adjust concurrency as needed

        const categoryPromises = [];

        for (const category in symbols) {
          const categorySymbols = symbols[category];
          const categoryDataPromises = categorySymbols.map((symbol) => {
            const fetchPromise = async () => {
              const stockData = await fetchStockData(symbol);
              if (stockData) {
                return stockData;
              }
            };

            return queue.add(fetchPromise);
          });

          categoryPromises.push(
            Promise.all(categoryDataPromises).then((categoryData) => ({
              category,
              data: categoryData.filter(Boolean), // Filter out null data
            }))
          );
        }

        const categoryResults = await Promise.all(categoryPromises);

        const fetchedData = {};
        categoryResults.forEach(({ category, data }) => {
          fetchedData[category] = data;
        });

        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categoryStyles = {
    Educação: {
      backgroundColor: 'gray[100}',
    },
    Finança: {
      backgroundColor: 'primary[100]',
    },
    Saúde: {
      backgroundColor: 'greenAccent[100]',
    },
  };

  return (
    <Container style={{ justifyItems: 'center' }}>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="responsive-grid">
            {Object.keys(data).map((category, index) => (
              <Paper
                key={category}
                style={{
                  ...categoryStyles[category],
                  padding: '10px',
                  margin: '10px',
                  borderRadius: '20px',
                  borderStyle: 'none',
                  width: '100%', // Set width to 100% to fill the available space
                }}
              >
                <Typography
                  variant="h3"
                  style={{
                    backgroundColor: '#4f1fed',
                    padding: '10px',
                    borderRadius: '20px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                  fontWeight="bold"
                >
                  {category}
                </Typography>
                <ul
                  style={{
                    listStyleType: 'none',
                    padding: 0,
                    textAlign: 'center',
                  }}
                >
                  <li
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                      marginTop: '20px',
                      marginLeft: '5px',
                      marginRight: '5px',
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>ATIVO</span>
                    <span style={{ fontWeight: 'bold' }}>PREÇO</span>
                    <span style={{ fontWeight: 'bold' }}>OSC. DIA</span>
                    <span style={{ fontWeight: 'bold' }}>OSC. ANO</span>
                  </li>
                </ul>
                <ul
                  className="style"
                  style={{ listStyleType: 'none', padding: 0 }}
                >
                  {data[category].map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        borderBottom: '1px solid ${colors.primary[400]}',
                        padding: '5px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                        marginTop: '10px',
                      }}
                    >
                      <span className="stock-ticker-symbol">{item.symbol}: </span>
                      <span className="stock-ticker-price">R${item.price} </span>
                      <span className="stock-ticker-price">{item.daily} </span>
                      <span className="stock-ticker-price">{item.yearly} </span>
                    </li>
                  ))}
                </ul>
              </Paper>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Index;



