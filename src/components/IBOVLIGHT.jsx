import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';

const Ibovlight = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    console.log("Current Theme Mode:", theme.palette.mode);
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://yahoo-finance127.p.rapidapi.com/historic/%5EBVSP/1d/160d',
        headers: {
          'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
          'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);

        const rawData = response.data;
        const timestamp = rawData.timestamp;
        const quote = rawData.indicators.quote[0];

        const data = timestamp.map((time, index) => ({
          time: time * 1000,
          open: quote.open[index],
          high: quote.high[index],
          low: quote.low[index],
          close: quote.close[index],
        }));

        data.sort((a, b) => a.time - b.time);

        // Cleanup: Destroy the existing chart
        if (chartRef.current) {
          chartRef.current.remove();
        }

        // Create a new chart with background color
        const chart = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.offsetWidth, // Set the width dynamically
          height: chartContainerRef.current.offsetHeight, // Set the height dynamically
          crosshair: {
            mode: CrosshairMode.Normal,
          },
     
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
            tickMarkFormatter: (time, tickMarkType, locale) => {
              const date = new Date(time);
              return `${date.toLocaleDateString(locale, {
                month: 'short',
                day: 'numeric',
              })}`;
            },
          },
        });

        // Apply background color based on the current theme
        chart.applyOptions({
          layout: {
            background: { color: colors.primary[400] },
            textColor: colors.grey[100],
          },
          grid: {
            vertLines: {
              color: colors.grey[700], // Set the color for vertical grid lines (X lines)
            },
            horzLines: {
              color: colors.grey[700], // Set the color for horizontal grid lines (Y lines)
            },
          },
        });

        const candleSeries = chart.addCandlestickSeries({
          upColor: colors.greenAccent[500],
          downColor: colors.redAccent[500],
          borderVisible: true,
          wickVisible: true,
          borderUpColor: colors.greenAccent[500],
          borderDownColor: colors.redAccent[500],
          wickUpColor: colors.greenAccent[500],
          wickDownColor: colors.redAccent[500],
        });

        candleSeries.setData(data);

        const calculateSMA = (data, count) => {
          var avg = function (data) {
            var sum = 0;
            for (var i = 0; i < data.length; i++) {
              sum += data[i].close;
            }
            return sum / data.length;
          };
          var result = [];
          for (var i = count - 1, len = data.length; i < len; i++) {
            var val = avg(data.slice(i - count + 1, i + 1));
            result.push({ time: data[i].time, value: val });
          }
          return result;
        };

        const smaData = calculateSMA(data, 10);
        smaData.sort((a, b) => a.time - b.time);

        const smaLine = chart.addLineSeries({
          color: colors.grey[200],
          lineWidth: 2,
        });
        smaLine.setData(smaData);

        // Save the chart instance to the ref
        chartRef.current = chart;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [theme.palette.mode]); // Update the effect to run when the theme mode changes

  return (
    <div
      style={{
        width: '97%',
        height: '100%',
        paddingTop: '30px',
        paddingLeft: '10px', // Adjust padding as needed
        paddingRight: '10px', // Adjust padding as needed
        marginBottom: '30px', // Add margin for separation
      }}
      ref={chartContainerRef}
    />
  );
};

export default Ibovlight;
