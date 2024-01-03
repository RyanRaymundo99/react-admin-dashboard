import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import TradingViewWidget from 'react-tradingview-widget';
import axios from 'axios';


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
        const response = await fetch(`https://yahoo-finance127.p.rapidapi.com/historic/${symbol}/1d/10d`, {
          headers: {
            'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
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
            data: closeData,
          },
        ];

        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [symbol]);


  return (
    <>
      <div style={{ height: '400px', width: '100%' }} sx={{ '@media (min-width: 1280px)': { pl: 100 } }}>
        {chartData && (
          <TradingViewWidget
            symbol={`NASDAQ`}
            theme={isSmallScreen ? 'light' : 'dark'}
            autosize
          />
        )}
      </div>

    </>
  );
};

export default QuotePage;
