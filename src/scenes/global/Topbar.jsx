import React from 'react';
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react"; // Import `useEffect` and `useState`
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../../api/firebase'; // Replace with the actual path
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LogoutSVG = () => {
  // Your existing LogoutSVG component code...
};

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store the user object

  // Use `useEffect` to listen for changes in the user authentication state
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
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" ml="100px">
        <Typography variant="h2" mr="10px" fontWeight="bold" style={{ color: colors.grey[100] }}>CVL Capital</Typography>
        <img
          alt="profile-user"
          width="30px"
          height="32px"
          src="../../assets/logo.png"
        />
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        

        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>

        {/* Display the user's avatar if available */}
        {user && user.photoURL && (
          <img
            alt="Google Avatar"
            width="34px"
            height="26px"
            src={user.photoURL}
            style={{ borderRadius: '100%' }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
