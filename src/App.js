import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Quotes from './scenes/quotes';
import QuotePage from './scenes/quotepage';
import Line from './scenes/line';
import Wallet from './scenes/wallet';
import News from './scenes/news';
import Educative from './scenes/educative';
import Performance from './scenes/performance';
import Login from './scenes/login/signIn';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { auth } from './api/firebase'; // Replace with the actual path
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add a listener to detect user authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        // User is signed in
        setUser(userData);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && <Sidebar />} {/* Display Sidebar only when the user is authenticated */}
          <main className="content">
            {user && <Topbar />} {/* Display Topbar only when the user is authenticated */}
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              {user && (
                <React.Fragment>
                  <Route path="/quotes" element={<Quotes />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/quotepage/:symbol" element={<QuotePage />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/educative" element={<Educative />} />
                  <Route path="/performance" element={<Performance />} />
                </React.Fragment>
              )}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
