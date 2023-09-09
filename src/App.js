import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Quotes from "./scenes/quotes";
import QuotePage from './scenes/quotepage';
import Line from "./scenes/line";
import Wallet from "./scenes/wallet";
import News from "./scenes/news";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/line" element={<Line />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/quotepage/:symbol" element={<QuotePage />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
