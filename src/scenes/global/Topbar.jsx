import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* LOGO */}
      <Box display="flex" ml="100px">
        <Typography variant="h2" mr="10px" fontWeight="bold" style={{color: colors.grey[100]}}>CVL Capital</Typography>
        <img
                  alt="profile-user"
                  width="30px"
                  height="32px"
                  src={`../../assets/logo.png`}
                />
      </Box>

      {/* ICONS 
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
      */}
    </Box>
  );
};

export default Topbar;
