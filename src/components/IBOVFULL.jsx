import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

const Ibovfull = () => {
  const chartContainerRef = useRef(null);
  const theme = useTheme();
  const [inflationData, setInflationData] = useState([]);

  useEffect(() => {
    console.log("Current Theme Mode:", theme.palette.mode);

    const fetchData = async () => {
      const apiEndpoints = [
        {
          url: 'https://yahoo-finance127.p.rapidapi.com/historic/%5EBVSP/1d/120d',
          headers: {
            'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
        },
        {
          url: 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/7?formato=json',
          // No headers needed for this API
        },
        // Add more API endpoints if needed
      ];

      try {
        const promises = apiEndpoints.map(async (endpoint) => {
          if (endpoint.headers) {
            const response = await axios.get(endpoint.url, { headers: endpoint.headers });
            return response.data;
          } else {
            const response = await fetch(endpoint.url);
            return response.json();
          }
        });

        const rawDataArray = await Promise.all(promises);

        // Process data for each API
        const seriesDataArray = rawDataArray.map((rawData, index) => {
          if (index === 1) {
            // Process data for the second API (inflation data)
            const initialInflationValue = rawData[0].valor;
            return rawData.map(entry => ({
              time: new Date(entry.data).getTime(),
              value: ((entry.valor - initialInflationValue) / initialInflationValue) * 100,
            }));
          } else {
            // Process data for other APIs as needed
            const timestamp = rawData.timestamp;
            const quote = rawData.indicators.quote[0];

            const initialValue = quote.close[0];
            return timestamp.map((time, index) => ({
              time: time * 1000,
              value: ((quote.close[index] - initialValue) / initialValue) * 100,
            }));
          }
        });

        // Combine data from multiple APIs
        const combinedData = seriesDataArray.reduce((result, seriesData) => {
          return result.concat(seriesData);
        }, []);

        // Sort combined data based on time
        combinedData.sort((a, b) => a.time - b.time);

        // Cleanup: Destroy the existing chart
        if (chartContainerRef.current) {
          chartContainerRef.current.innerHTML = ''; // Clear the container
        }

        // Create a new chart with background color
        const chart = createChart(chartContainerRef.current, {
          width: chartContainerRef.current.offsetWidth,
          height: chartContainerRef.current.offsetHeight,
          crosshair: {
            mode: CrosshairMode.Normal,
          },
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
            tickMarkFormatter: (time, tickMarkType, locale) => {
              // Format time for x-axis labels
              const date = new Date(time);
              return `${date.toLocaleDateString(locale, {
                month: 'short',
                day: 'numeric',
              })}`;
            },
          },
        });

        // Add line series for each API
        seriesDataArray.forEach((seriesData, index) => {
          const lineSeries = chart.addLineSeries();
          lineSeries.setData(seriesData);
          // You can customize the appearance of each line series here if needed
          if (index === 1) {
            lineSeries.applyOptions({
              color: 'red', // Set the color to red for the second line
            });
          }
        });

        // Configure the crosshair to display the date correctly
        chart.subscribeCrosshairMove((param) => {
          if (param.time && param.seriesPrices.length > 0) {
            const date = new Date(param.time);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(date);
        
            console.log('Hovered Date:', formattedDate);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Clear the container and destroy the chart when the component is unmounted
      if (chartContainerRef.current) {
        chartContainerRef.current.innerHTML = '';
      }
    };
  }, [theme.palette.mode]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }} />;
};

export default Ibovfull;
