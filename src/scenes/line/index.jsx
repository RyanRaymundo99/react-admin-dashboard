import { Box } from "@mui/material";
import Header from "../../components/Header";
import IBOV from "../../components/IBOV";

const Line = () => {
  return (
    <Box ml="100px" textColor="white">
      <Header title="Ibovespa" subtitle="ultimos 15 dias" />
      <Box height="75vh">
        <IBOV />
      </Box>
    </Box>
  );
};

export default Line;
