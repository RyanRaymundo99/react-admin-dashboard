import React, { useState,  useEffect } from "react";
import { Box, Typography, useTheme, Paper, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WalletIcon from '@mui/icons-material/Wallet';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { auth } from "../../api/firebase";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(title);
  };

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Box
        onClick={handleClick}
        sx={{
          color: selected === title ? "#6870fa" : colors.grey[100],
          padding: "10px",
          paddingX: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography variant="caption">{title}</Typography>
      </Box>
    </Link>
  );
};


const BottomMenu = ({ icons, selected, setSelected, onMenuClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.primary[400],
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999, // Ensure it's above other elements
        // Add styles to ensure fixed positioning
        left: 0,
        right: 0,
        paddingX: "20px",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)", // Add shadow for visual effect
      }}
  >
      {icons.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          to={item.to}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

      {/* Far Right Menu */}
      <IconButton onClick={onMenuClick}>
        {onMenuClick ? <MenuIcon style={{ fontSize: '30px', marginBottom: '10px' }} /> : <ArrowForwardIcon />}
      </IconButton>
    </Box>
  );
};

const Menu = ({ onClose, items }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

  const handleItemClick = () => {
    onClose(); // Close the menu
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: '50%', // Center the menu vertically
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        backgroundColor: colors.primary[700],
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
      }}
    >
      {/* News Icon - Positioned Top Left */}
      <Box mb="25px" textAlign="center" sx={{ position: 'absolute', top: '0px', left: '0px' }} className="bg-gray-950/20 rounded-br-lg ">
        <IconButton component={Link} to="/news" onClick={handleItemClick}>
          <NewspaperIcon style={{ fontSize: '30px', color: colors.grey[100] }} />
        </IconButton>
      </Box>

      {/* Calendar Icon - Positioned Top Right */}
      <Box mb="25px" textAlign="center" sx={{ position: 'absolute', top: '0px', right: '0px' }} className="bg-gray-950/20 rounded-bl-lg ">
        <IconButton component={Link} to="/calender" onClick={handleItemClick}>
          <EventAvailableIcon style={{ fontSize: '30px', color: colors.grey[100] }} />
        </IconButton>
      </Box>

      {/* User info */}
      <Box mb="25px" textAlign="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          {user && user.photoURL && (
            <img
              alt="Google Avatar"
              width="54px"
              height="40px"
              src={user.photoURL}
              style={{ borderRadius: "100%" }}
            />
          )}
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            {user && user.displayName ? user.displayName : "User"}
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            VIP ACCESS
          </Typography>
        </Box>
      </Box>

      {/* Menu items */}
      <Box textAlign="left" width="100%">
        {items.map((item) => (
          <Link to={item.to} style={{ textDecoration: "none" }} key={item.title}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                color: colors.grey[100],
                padding: '10px',
                width: '100%',
                cursor: 'pointer',
                fontSize: 'bold',
              }}
              onClick={handleItemClick}
            >
              <Box sx={{ fontSize: '34px' }}>
                {React.cloneElement(item.icon, { fontSize: 'inherit' })}
              </Box>
              <Typography variant="h5" color={colors.primary[200]} sx={{ marginLeft: '5px', marginTop: '10px' }}>{item.title}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Paper>
  );
};


const ResponsiveSidebar = () => {
  const [selected, setSelected] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const bottomMenuIcons = [
    { title: "Desempenho", to: "/performance", icon: <SwipeUpIcon /> },
    { title: "Carteira", to: "/wallet", icon: <WalletIcon /> },
    { title: "Home", to: "/market", icon: <AppsIcon /> },
    { title: "Gráfico", to: "/chart", icon: <CurrencyExchangeIcon /> },
  ];

  const additionalItems = [
    { title: "Mapa de Calor Ações BR", to: "/br", icon: <TravelExploreIcon /> },
    { title: "Mapa de Calor Crypto", to: "/crypto", icon: <CurrencyBitcoinIcon /> },
    { title: "Conteúdo Educacional", to: "/educative", icon: <ImportContactsIcon /> },
    { title: "Filtro Crypto", to: "/screener", icon: <FitScreenIcon /> },
  ];

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Bottom Menu */}
      <BottomMenu
        icons={bottomMenuIcons}
        selected={selected}
        setSelected={setSelected}
        onMenuClick={handleMenuClick}
      />

      {/* Additional Items Menu */}
      {menuOpen && <Menu onClose={handleMenuClose} items={additionalItems} />}
    </>
  );
};

export default ResponsiveSidebar;
