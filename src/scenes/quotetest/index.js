import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://yahoo-finance127.p.rapidapi.com/key-statistics/aapl',
    headers: {
      'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
      'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;

    // Extract the specific fields from the API response
    const priceToBook = data.priceToBook?.fmt;
    const forwardPe = data.forwardPE?.fmt;
    const bookvalue = data.bookValue?.fmt;
    const trailingEps = data.epsTrailingTwelveMonths?.fmt;

    // Return the extracted data as an object
    return { priceToBook, forwardPe, bookvalue, trailingEps };
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, show an error message, etc.
    return { error: 'Error fetching data' };
  }
};

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAndSetState();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    {data ? (
      <div>
        <h1>Price To Book: {data.priceToBook}</h1>
        <h1>Forward PE: {data.forwardPe}</h1>
        <h1>Book Value: {data.bookvalue}</h1>
        <h1>Trailing EPS: {data.trailingEps}</h1>
      </div>
    ) : (
      <h1>Loading...</h1>
    )}
  </div>
  );
};

export default App;
