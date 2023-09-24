import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';

const Index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbols = {
          Educação: ['ANIM3', 'COGN3', 'SEER3', 'YDUQ3'],
          Finança: ['B3DS3', 'B3SA3'],
          Saúde: ['CRFB3', 'BBSE3'],
          Alimentos: ['ABEV3', 'ALSO3'], 
          Telecom: ['CRFB3', 'BBSE3'], 
          Varejo: ['CRFB3', 'BBSE3'],   
          Turismo: ['CRFB3', 'BBSE3'],  
          Celulose: ['CRFB3', 'BBSE3'],  
          Vestuario: ['CRFB3', 'BBSE3'], 
          Financeiro: ['CRFB3', 'BBSE3'], 
          Energia: ['CRFB3', 'BBSE3'], 
          Combustivel: ['CRFB3', 'BBSE3'], 
          Shoppings: ['CRFB3', 'BBSE3'], 
          Imobiliarios: ['CRFB3', 'BBSE3'],
          Seguros: ['CRFB3', 'BBSE3'], 
          Saneamento: ['CRFB3', 'BBSE3'], 
          Transporte: ['CRFB3', 'BBSE3'], 
          Aviação: ['CRFB3', 'BBSE3'],
        };

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
              price: responseData.regularMarketPrice.fmt,
              symbol: responseData.symbol,
              daily: responseData.regularMarketDayRange.raw,
              yearly: responseData.fiftyTwoWeekRange.raw,
            };
          } else {
            console.error('Failed to fetch data for', symbol, response.status);
            return null;
          }
        };

        const fetchedData = {};

        for (const category in symbols) {
          const categorySymbols = symbols[category];
          const categoryData = [];
          for (let i = 0; i < categorySymbols.length; i++) {
            const symbol = categorySymbols[i];
            const stockData = await fetchStockData(symbol);
            if (stockData) {
              categoryData.push(stockData);
            }
          }
          fetchedData[category] = categoryData;
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

  const categoryStyles = {
    Educação: {
      backgroundColor: '#f5f5f5',
    },
    Finança: {
      backgroundColor: '#f5f5f5',
    },
    Saúde: {
      backgroundColor: '#f5f5f5',
    },
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Object.keys(data).map((category) => (
              <Paper
                key={category}
                style={{ ...categoryStyles[category], padding: '10px', margin: '10px', minWidth: '400px', borderRadius: '20px', borderStyle:'none' }}
              >
                <Typography variant="h3" style={{  backgroundColor: '#4f1fed', padding: '10px', borderRadius: '20px', color: 'white', textAlign: 'center' }} fontWeight="bold">{category}</Typography>
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
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
                      <span style={{ fontWeight: 'bold' }}>ATIVO </span>
                      <span style={{ fontWeight: 'bold' }}>PREÇO </span>
                      <span style={{ fontWeight: 'bold' }}>OSC. DIA </span>
                      <span style={{ fontWeight: 'bold' }}>OSC. ANO </span>
                    </li>
                </ul>
                <ul className="style" style={{ listStyleType: 'none', padding: 0 }}>
                  {data[category].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        borderTop: '1px solid white',
                        borderBottom: '1px solid white',
                        borderRadius: '5px',
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



