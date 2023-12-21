import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const InflationChart = () => {
  const [inflationData, setInflationData] = useState([]);
  const [chartWidth, setChartWidth] = useState(Math.min(955, window.innerWidth * 0.9));

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(Math.min(955, window.innerWidth * 0.9));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchInflationData = async () => {
      try {
        const response = await fetch(
          'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/7?formato=json'
        );
        const data = await response.json();

        if (data.length > 0) {
          const formattedInflationData = data.map(entry => ({
            name: entry.data,
            value: parseFloat(entry.valor),
          }));
          setInflationData(formattedInflationData);
        }
      } catch (error) {
        console.error('Error fetching inflation data:', error);
      }
    };

    fetchInflationData();
  }, []);

  return (
    <div>
      <div style={{ height: '400px', width: '100%'}}>
        {inflationData.length > 0 ? (
          <ResponsiveContainer>
          <LineChart width={chartWidth} height={400} data={inflationData} margin={{ top: 50, right: 50, bottom: 50, left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Inflation Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  );
};

export default InflationChart;
