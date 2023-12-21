import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceLineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://yahoo-finance127.p.rapidapi.com/historic/%5EBVSP/1d/15d', {
          headers: {
            'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
          }
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

        const dates = timestamp.map(timestamp => new Date(timestamp * 1000));
        const closeData = indicators.quote[0].close.map((value, index) => ({ date: dates[index], close: value }));

        setChartData(closeData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      {chartData && (
        <ResponsiveContainer>
          <LineChart data={chartData} margin={{ top: 50, right: 50, bottom: 50, left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
            <YAxis />
            <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default FinanceLineChart;
