import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TradingViewTickerTape from "../../components/Ticker"; // Import your TradingViewTickerTape component

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const boxStyle = {
    backgroundColor: `${colors.primary[400]}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Center items vertically
    padding: theme.spacing(1),
  };;

  return (
    <Box style={boxStyle}>
      {/* Include TradingView Ticker */}
      <Box style={{ flex: 1 }}>
        
      </Box>
      
      <TradingViewTickerTape/>
     
      <Box style={{ display: "flex", paddingLeft: "10px" }}>
         {/* Add any other components or content you want in this section 
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        */}

        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
