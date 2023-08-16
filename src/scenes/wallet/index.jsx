import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SelicInterestRateChart = () => {
  const [selicInterestRateData, setSelicInterestRateData] = useState([]);

  useEffect(() => {
    const fetchSelicInterestRate = async () => {
      try {
        const today = new Date();
        const currentYear = today.getFullYear();
        const threeYearsAgo = currentYear - 3;

        const response = await fetch(
          `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1095?formato=json`
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
    <div style={{ paddingLeft: '60px', marginBottom: '30px' }}>
      <h1>SELIC Interest Rates - Past 3 Years</h1>
      {selicInterestRateData.length > 0 ? (
        <LineChart width={800} height={400} data={selicInterestRateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Interest Rate (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      ) : (
        <p>Loading SELIC interest rate data...</p>
      )}
    </div>
  );
};



const App = () => {
  return (
    <div>
      <SelicInterestRateChart />
      <InflationChart />
    </div>
  );
};

export default App;



const InflationChart = () => {
  const [inflationData, setInflationData] = useState([]);

  useEffect(() => {
    const fetchInflationData = async () => {
      try {
        const today = new Date();
        const currentYear = today.getFullYear();

        const response = await fetch(
          `https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/7?formato=json`
        );
        const data = await response.json();
        console.log('Fetched inflation data:', data);

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
    <div style={{ paddingLeft: '80px' }}>
      <h1>IPCA Inflation Rates - Last 7 Months</h1>
      {inflationData.length > 0 ? (
        <LineChart width={800} height={400} data={inflationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Inflation Rate (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>Loading inflation rates...</p>
      )}
    </div>
  );
};