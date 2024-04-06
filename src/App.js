import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import MobileSidebar from './scenes/global/MobileSidebar';
import Chart from './scenes/chart';
import Market from './scenes/market';
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
import Profile from './landingPage/profile';
import Pricing from './landingPage/pricing';  
import About from './landingPage/about';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { auth } from './api/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Screener from './scenes/screener';

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

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
          "ingridrodriguespubli@gmail.com",
          "renilsonaraujo.pro@gmail.com",
          "arlamaraujo3@gmail.com",
          "lliefellopeandrade1@gmail.com",
          "wendellyalexandre@gmail.com",
        ];

        setIsAuthorized(allowedEmails.includes(userEmail));
      } else {
        setUser(null);
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {user && isAuthorized && <Topbar />}
            {user && isAuthorized && <Sidebar />}
            {user && isAuthorized && <MobileSidebar />}
            <Routes>
              {user && isAuthorized ? (
                <>
                  <Route path="/chart" element={<Chart />} />
                  <Route path="/market" element={<Market />} />
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
                  {/* Redirect users to Market if logged in */}
                  <Route path="/" element={<Navigate to="/market" />} />
                </>
              ) : (
                <>
                  {/* Render Login page if not logged in */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/form" element={<Profile />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/pricing" element={<Pricing />} />
                </>
              )}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
