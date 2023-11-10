import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WalletIcon from '@mui/icons-material/Wallet';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

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

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
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
      height: "100%", // Set the width to 100%
      zIndex: 100, // Add z-index of 100
      borderRight: "1px solid #F7F7F7",
    }}
  >
      <ProSidebar collapsed={isCollapsed} 
      sx={{
        height: "100%", // Set the sidebar height to full viewport height
      }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="30px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Menu
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Análise fundamentalista"
              to="/quotes"
              icon={<CurrencyExchangeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Gráficos
            </Typography>
            
            <Item
              title="Ibovespa Index"
              to="/line"
              icon={<SsidChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Comparar Desempenho"
              to="/performance"
              icon={<SwipeUpIcon />}
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
              title="Carteira de Investidor"
              to="/wallet"
              icon={<WalletIcon />}
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
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
