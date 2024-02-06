import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TradingViewWidget from './trandingView/market1';
import TradingViewWidget2 from './trandingView/market2';
import TradingViewWidget3 from './trandingView/market3';
import TradingViewWidget4 from './trandingView/market4'

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const TradingViewGrid = () => {
  const symbolsGrid1 = ["WIZC3"];
  const symbolsGrid2 = ["WIZC3"];
  const symbolsGrid3 = ["CRYPTO:BTCUSD"];
  const symbolsGrid4 = ["CRYPTO:BTCUSD"];

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%' }}>
            <Paper style={{ borderRadius: '10px', border: '1px solid #434651', backgroundColor: '#13151c', padding: '20px' }}>
            <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', textAlign: "center", alignItems: 'center' }}>
                <LeaderboardIcon style={{ fontSize: "40px", padding: "5px" }} /> TITULO
              </Typography>
            <Typography variant="h5" align="center" style={{ fontSize: "15px", marginBottom: '10px', fontWeight: 'bold', textAlign: "center", alignItems: 'center', color: "green", }}> Subtitulo
              </Typography>
            </Paper>
          </div>
        </Grid>
    <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
      <div className="grid" style={{border: '1px solid #434651', backgroundColor: '#131722', padding: '20px' }}>
        <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <MyLocationIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px", padding: "5px" }} /> LAYOUT
        </Typography>
        <Typography variant="body1" align="left" style={{ marginLeft: '5px' ,fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 23h</Typography>
        <Grid container spacing={2}>
          {symbolsGrid1.map((symbol, index) => (
            <Grid item xs={12} key={index}>
              <TradingViewWidget symbol={symbol} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
    <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' , marginTop: "20px"  }}>
      <div className="grid" style={{ border: '1px solid #434651', backgroundColor: '#131722', padding: '20px' }}>
        <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <HomeWorkIcon  style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px", padding: "5px" }} /> LAYOUT
        </Typography>
        <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 23h</Typography>
        <Grid container spacing={2}>
          {symbolsGrid2.map((symbol, index) => (
            <Grid item xs={12} key={index}>
              <TradingViewWidget2 symbol={symbol} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' , marginTop: "20px",  }}>
      <div className="grid" style={{  border: '1px solid #434651', backgroundColor: '#131722', padding: '20px' }}>
        <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <CurrencyBitcoinIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px" }} /> LAYOUT
        </Typography>
        <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 12m</Typography>
        <Grid container spacing={2}>
          {symbolsGrid3.map((symbol, index) => (
            <Grid item xs={12} key={index}>
              <TradingViewWidget3 symbol={symbol} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
    <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' , marginTop: "20px",  }}>
      <div className="grid" style={{border: '1px solid #434651', backgroundColor: '#131722', padding: '20px' }}>
        <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <CurrencyBitcoinIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px" }} /> LAYOUT
        </Typography>
        <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 12m</Typography>
        <Grid container spacing={2}>
          {symbolsGrid4.map((symbol, index) => (
            <Grid item xs={12} key={index}>
              <TradingViewWidget4 symbol={symbol} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  </Grid>
</Container>

  );
};

export default TradingViewGrid;
