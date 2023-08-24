import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SelicInterestRateChart = () => {
  const [selicInterestRateData, setSelicInterestRateData] = useState([]);
  const chartWidth = Math.min(955, window.innerWidth * 0.9); // Calculate chart width

  useEffect(() => {
    const fetchSelicInterestRate = async () => {
      try {
        const response = await fetch(
          'https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1095?formato=json'
        );
        const data = await response.json();

        if (data.length > 0) {
          const formattedData = data.map(entry => ({
            name: entry.data,
            value: parseFloat(entry.valor),
          }));
          setSelicInterestRateData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching SELIC interest rate:', error);
      }
    };

    fetchSelicInterestRate();
  }, []);

  return (
    <div>
      <div style={{ height: '400px', width: '100%', overflow: 'hidden' }} >
        {selicInterestRateData.length > 0 ? (
          <ResponsiveContainer>
          <LineChart width={chartWidth} height={400} data={selicInterestRateData} margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Interest Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    </div>
  );
};

export default SelicInterestRateChart;
