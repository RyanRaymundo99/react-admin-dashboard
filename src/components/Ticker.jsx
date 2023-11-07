// apiTicker.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

export async function fetchStockData(symbol) {
  const options = {
    method: 'GET',
    url: `https://yahoo-finance127.p.rapidapi.com/price/${symbol}.SA`,
    headers: {
      'X-RapidAPI-Key': '37e7621ab5msh8ca6d117cb08066p1bb2b2jsn269b699edad8',
      'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    if (response.ok) {
      const responseData = response.data;
      return {
        changePercent: responseData.regularMarketChangePercent.fmt,
        symbol: responseData.symbol,
      };
    } else {
      console.error('Failed to fetch data for', symbol, response.status);
      return null;
    }
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    return null;
  }
}

export function useStockData(symbols) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = [];

      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const stockData = await fetchStockData(symbol);
        if (stockData) {
          fetchedData.push(stockData);
        }
      }

      setData(fetchedData);
      setLoading(false);
    };

    const updateInterval = setInterval(fetchData, 60000); // Fetch data every minute

    fetchData(); // Initial data fetch

    return () => clearInterval(updateInterval); // Clear the interval on unmount
  }, [symbols]);

  return { data, loading };
}

export function StockTicker({ data, loading }) {
  return (
    <div className="stock-ticker-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul className="stock-ticker-list">
          {data.map((item, index) => (
            <li key={index}>
              <span className="stock-ticker-symbol">{item.symbol}: </span>
              <span className={`stock-ticker-percent ${item.changePercent.startsWith('-') ? 'negative' : 'positive'}`}>
                ({item.changePercent})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
