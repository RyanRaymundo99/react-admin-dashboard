import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import MobileSidebar from './scenes/global/MobileSidebar';
import Dashboard from './scenes/dashboard';
import Quotes from './scenes/quotes';
import QuotePage from './scenes/quotepage';
import Line from './scenes/line';
import Wallet from './scenes/wallet';
import News from './scenes/news';
import Educative from './scenes/educative';
import Performance from './scenes/performance';
import Login from './scenes/login/signIn';
import Ibovfull from './components/IBOVFULL';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { auth } from './api/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import Calender from './scenes/calender';
import Crypto from './scenes/hotZoneCrypto';
import Br from './scenes/hotZoneBr';

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isUnauthorizedDialogOpen, setIsUnauthorizedDialogOpen] = useState(false);

  useEffect(() => {
    // Add a listener to detect user authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        // User is signed in
        setUser(userData);

        // Check if the user's email is authorized
        const userEmail = userData.email;
        const allowedEmails = [
          "rian981265@gmail.com",
          "layrton.lbss@gmail.com",
          "Cainan.carvalho1@oultook.com",
          "cainan.carvalho199601@gmail.com",
          "vladsonluizsilva@gmail.com",
          "Vladsonluizsilva@hotmail.com",
          "Leandrodeoliveira678@gmail.com",
          "ingridrodriguespubli@gmail.com",
        ];

        setIsAuthorized(allowedEmails.includes(userEmail));

        if (!isAuthorized) {
          setIsUnauthorizedDialogOpen(true);
        }
      } else {
        // User is signed out
        setUser(null);
        setIsAuthorized(true); // Reset authorization when the user signs out
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [isAuthorized]);

  const handleCloseUnauthorizedDialog = () => {
    setIsUnauthorizedDialogOpen(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user && isAuthorized && <Sidebar />}
          {user && isAuthorized && <MobileSidebar />}
          <main className="content">
            {user && isAuthorized && <Topbar />}
            <Routes>
              <Route
                path="/"
                element={
                  user && isAuthorized ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="/login" element={user && isAuthorized ? <Navigate to="/" /> : <Login />} />
              {user && isAuthorized && (
                <React.Fragment>
                  <Route path="/quotes" element={<Quotes />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/quotepage/:symbol" element={<QuotePage />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/educative" element={<Educative />} />
                  <Route path="/calender" element={<Calender />} />
                  <Route path="/crypto" element={<Crypto />} />
                  <Route path="/br" element={<Br />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/ibovfull" element={<Ibovfull />} />
              
                </React.Fragment>
              )}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
      <Dialog open={isUnauthorizedDialogOpen} onClose={handleCloseUnauthorizedDialog}>
        <DialogTitle style={{ backgroundColor: 'red', color: 'white' }}>Endereço de Email não cadastrado</DialogTitle>

        <DialogActions>
          <Button onClick={handleCloseUnauthorizedDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ColorModeContext.Provider>
  );
}

export default App;
