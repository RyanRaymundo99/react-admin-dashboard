import React, { useContext, useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import WalletIcon from "@mui/icons-material/Wallet";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FitScreenIcon from '@mui/icons-material/FitScreen';

import { auth } from "../../api/firebase";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
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

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          height: "100vh", // Set the sidebar height to full viewport height
          overflowY: "hidden", // Remove scrollbar
          marginTop: "-62px"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        position: "fixed",
        zIndex: 100, // Add z-index of 100
        border: "1px solid #20232f",
      }}
    >
      {/* Use media query to hide the sidebar on smaller screens */}
      <style>
        {`
          @media (max-width: 960px) {
            .pro-sidebar {
              display: none;
            }
          }
        `}
      </style>
      <ProSidebar
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              textAlign: "center"
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="30px"
              >
               
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
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
                  VIP ACESS
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mercado Mundial"
              to="/quotes"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendário Econômico"
              to="/calender"
              icon={<EventAvailableIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Análise fundamentalista"
              to="/performance"
              icon={<SwipeUpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Filtro Crypto"
              to="/screener"
              icon={<FitScreenIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Radar
            </Typography>
            <Item
              title="Mapa de Calor Crypto"
              to="/crypto"
              icon={<CurrencyBitcoinIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* hidden
            <Item
              title="Indicadores Económicos"
              to="/line"
              icon={<SsidChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            */}
           <Item
              title="Mapa de Calor Ações BR"
              to="/br"
              icon={<TravelExploreIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Extras
            </Typography>
            <Item
              title="Notícias"
              to="/news"
              icon={<NewspaperIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Conteúdo Educacional"
              to="/educative"
              icon={<ImportContactsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              classname
              title="Carteira de Investidor"
              to="/wallet"
              icon={<WalletIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
