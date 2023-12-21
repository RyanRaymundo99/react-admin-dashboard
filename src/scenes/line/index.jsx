import { Box } from "@mui/material";
import Header from "../../components/Header";
import IBOV from "../../components/IBOV";

const Line = () => {
  return (
    <Box  textColor="white" marginLeft={{ lg: '100px', xl: '100px', sm: '20px', xs: '10px' }}>
      <Header title="Ibovespa" subtitle="ultimos 15 dias" />
      <Box height="75vh">
        <IBOV />
      </Box>
    </Box>
  );
};

export default Line;
