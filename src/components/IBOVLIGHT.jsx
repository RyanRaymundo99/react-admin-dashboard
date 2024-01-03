import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createChart, CrosshairMode } from 'lightweight-charts';

import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-finance127.p.rapidapi.com/historic/%255EBVSP/1d/245d',
        headers: {
          'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
          'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setChartData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [theme]);

  useEffect(() => {
    if (chartData) {
      createChartWithData(chartData);
    }
  }, [chartData]);

  const createChartWithData = (data) => {
    const container = document.getElementById('chart-container');

    // Remove existing chart if any
    container.innerHTML = '';

    const newChart = createChart(container, {
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        tickMarkFormatter: (time, tickMarkType, locale) => {
          const date = new Date(time * 1000);
          return date.toLocaleString(locale, { month: 'long' });
        },
      },
      layout: {
        background: { color: colors.primary[400] },
        textColor: colors.grey[100],
      },
      grid: {
        vertLines: { color: colors.grey[700] },
        horzLines: { color: colors.grey[700] },
      },
    });

    // Add candlestick series
    const candleSeries = newChart.addCandlestickSeries({
      upColor: colors.greenAccent[500],
      downColor: colors.redAccent[500],
      borderDownColor: colors.redAccent[700],
      borderUpColor: colors.greenAccent[700],
      wickDownColor: colors.redAccent[700],
      wickUpColor: colors.greenAccent[700],
    });

    candleSeries.setData(generateBarsData(data.timestamp, data.indicators.quote[0]));

    // Add moving average series
    const smaData = calculateSMA(data, 10);
    const smaLine = newChart.addLineSeries({
      color: colors.yourColor,
      lineWidth: 2,
    });
    smaLine.setData(smaData);

    newChart.subscribeCrosshairMove((param) => {
      const priceData = param.seriesPrices.get(candleSeries);
      const movingAverageData = param.seriesPrices.get(smaLine);
      if (!priceData || !movingAverageData) {
        return;
      }
      const price = priceData.value !== undefined ? priceData.value : priceData.close;
      const movingAverage = movingAverageData.value !== undefined ? movingAverageData.value : movingAverageData.close;
    });
  };

  const generateBarsData = (timestamp, quoteData) => {
    const res = [];
    for (let i = 0; i < timestamp.length; i++) {
      res.push({
        time: timestamp[i],
        open: quoteData.open[i],
        high: quoteData.high[i],
        low: quoteData.low[i],
        close: quoteData.close[i],
      });
    }
    return res;
  };

  const calculateSMA = (data, count) => {
    const avg = (values) => values.reduce((acc, val) => acc + val.close, 0) / values.length;

    const result = [];
    const realData = generateBarsData(data.timestamp, data.indicators.quote[0]);

    for (let i = count - 1, len = realData.length; i < len; i++) {
      const val = avg(realData.slice(i - count + 1, i + 1));
      result.push({ time: realData[i].time, value: val });
    }
    return result;
  };

  return (
    <div
      id="chart-container"
      style={{
        width: '100%',
        height: '90%',
        paddingTop: '30px',
        marginBottom: '30px',
      }}
    ></div>
  );
};

export default ChartComponent;
