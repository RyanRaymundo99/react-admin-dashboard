import { Box } from "@mui/material";
import Header from "../../components/Header";
import Ibovlight from "../../components/IBOVLIGHT";

const Line = () => {
  return (
    <Box  textColor="white" marginLeft={{ lg: '100px', xl: '100px', sm: '20px', xs: '10px' }}>
      <Header title="Ibovespa" subtitle="ultimos 15 dias" />
      <Box height="75vh">
        <Ibovlight />
      </Box>
    </Box>
  );
};

export default Line;
