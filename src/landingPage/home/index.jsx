import React, { useState, useEffect } from 'react';
import HomeLoading from '../../components/HomeLoading'; // Import the HomeLoading component
import Hero from '../utilities/hero';
import TopBar from '../utilities/topbar';
import Companies from '../utilities/stockTicker';
import Charts from '../utilities/charts';
import Footer from '../utilities/footer';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Conditionally render loading screen */}
      {loading ? (
        <HomeLoading />
      ) : (
        <>
          {/* Render regular content once loading is complete */}
          <TopBar />
          <Hero />
          <Companies />
          <Charts />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePage;
