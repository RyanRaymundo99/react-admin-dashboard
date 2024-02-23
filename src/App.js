import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import MobileSidebar from './scenes/global/MobileSidebar';
import Dashboard from './scenes/dashboard';
import Quotes from './scenes/quotes';
import Line from './scenes/line';
import Wallet from './scenes/wallet';
import News from './scenes/news';
import Educative from './scenes/educative';
import Performance from './scenes/performance';
import Login from './scenes/login/signIn';
import Ibovfull from './components/IBOVFULL';
import Calender from './scenes/calender';
import Crypto from './scenes/hotZoneCrypto';
import Br from './scenes/hotZoneBr';
import LandingPage from './landingPage/home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { auth } from './api/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import Screener from './scenes/screener';

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isUnauthorizedDialogOpen, setIsUnauthorizedDialogOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
        const userEmail = userData.email;
        const allowedEmails = [
          "rian981265@gmail.com",
          "layrton.lbss@gmail.com",
          "Cainan.carvalho1@oultook.com",
          "cainan.carvalho199601@gmail.com",
          "cainansilva199603@gmail.com",
          "vladsonluizsilva@gmail.com",
          "Vladsonluizsilva@hotmail.com",
          "leandrodeoliveira678@gmail.com",
          "Ingridrodriguespubli@gmail.com",
          "renilsonaraujo.pro@gmail.com",
          "arlamaraujo3@gmail.com",
        ];

        setIsAuthorized(allowedEmails.includes(userEmail));
      } else {
        setUser(null);
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && !isAuthorized) {
      setIsUnauthorizedDialogOpen(true);
    } else {
      setIsUnauthorizedDialogOpen(false);
    }
  }, [user, isAuthorized]);

  const handleCloseUnauthorizedDialog = () => {
    setIsUnauthorizedDialogOpen(false);
  };

  const isLoginPage = location.pathname === '/login';
  const isLandingPage = location.pathname === '/';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {user && isAuthorized && <Topbar />}
            {user && isAuthorized && !isLoginPage && !isLandingPage && <Sidebar />}
            {user && isAuthorized && <MobileSidebar />}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/line" element={<Line />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/news" element={<News />} />
              <Route path="/educative" element={<Educative />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/br" element={<Br />} />
              <Route path="/screener" element={<Screener />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/ibovfull" element={<Ibovfull />} />
              <Route path="/login" element={user && isAuthorized ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path="/" element={user && isAuthorized ? <Navigate to="/dashboard" /> : <LandingPage />} />
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
