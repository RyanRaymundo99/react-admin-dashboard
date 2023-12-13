import React, { useState } from "react";
import { Box, Typography, useTheme, Paper, Grid, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WalletIcon from '@mui/icons-material/Wallet';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

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
        padding: "px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.primary[400],
        display: { xs: 'flex', md: 'none' },
        justifyContent: "space-between",
        alignItems: "center",
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
        {onMenuClick ? <BookmarkAddIcon style={{ fontSize: '30px', marginBottom: '10px' }} /> : <ArrowForwardIcon />}
      </IconButton>
    </Box>
  );
};

const Menu = ({ onClose, items }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        backgroundColor: colors.primary[400],
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '320px',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {items.map((item) => (
          <Grid item key={item.title} xs={6} sm={4} md={3} lg={2} xl={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginX: '25px',
                textAlign: 'center',
              }}
            >
              <Box sx={{ fontSize: '32px' }}>
                {React.cloneElement(item.icon, { fontSize: 'inherit' })}
              </Box>
              <Box>
                <Typography variant="caption" sx={{ marginTop: '1px' }}>{item.title}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const ResponsiveSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const bottomMenuIcons = [
    { title: "Ibovespa", to: "/line", icon: <SsidChartIcon /> },
    { title: "Carteira", to: "/wallet", icon: <WalletIcon /> },
    { title: "Home", to: "/", icon: <AppsIcon /> },
    { title: "Cotações", to: "/quotes", icon: <CurrencyExchangeIcon /> },
  ];

  const additionalItems = [
    { title: "Comparar Desempenho", to: "/performance", icon: <SwipeUpIcon /> },
    { title: "Notícias", to: "/news", icon: <NewspaperIcon /> },
    { title: "Conteúdo Educacional", to: "/educative", icon: <ImportContactsIcon /> },
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
