import React, { useState, useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { format } from 'date-fns';

const InflationChart = () => {
  const [inflationData, setInflationData] = useState([]);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/7?formato=json'
        );
        const data = await response.json();

        if (data.length > 0) {
          const formattedData = data.map(entry => ({
            time: new Date(entry.data).getTime(),
            value: parseFloat(entry.valor),
            formattedDate: format(new Date(entry.data), 'MM/dd/yyyy'), // Format date using date-fns
          })).sort((a, b) => a.time - b.time);

          setInflationData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch initial data
    fetchData();

    // Set up interval to fetch data periodically (every 5 seconds in this example)
    const intervalId = setInterval(fetchData, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (inflationData.length > 0 && chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const lineSeries = chart.addLineSeries();
      lineSeries.setData(inflationData);

      return () => chart.remove();
    }
  }, [inflationData]);

  return (
    <div>
      <div style={{ height: '400px', width: '100%' }} ref={chartContainerRef} />
    </div>
  );
};

export default InflationChart;
