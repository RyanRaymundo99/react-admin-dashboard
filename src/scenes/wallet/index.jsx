import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TradingViewWidget from './trandingView/market1';
import TradingViewWidget2 from './trandingView/market2';
import TradingViewWidget3 from './trandingView/market3';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EjectIcon from '@mui/icons-material/Eject';

const TradingViewGrid = () => {
  const symbolsGrid1 = ["WIZC3", "BEES3", "TAEE11", "AGRO3", "BRAP4"];
  const symbolsGrid2 = ["BTCI11", "MXRF11"];
  const symbolsGrid3 = ["CRYPTO:BTCUSD", "CRYPTO:ADAUSD", "CRYPTO:HEROUSD", "CRYPTO:CROUSD", "CRYPTO:XRPUSD", "CRYPTO:TRXUSD", "CRYPTO:ONEUSD"];

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid container justifyContent="center" style={{ marginTop: "20px" }} spacing={4}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%' }}>
            <Paper style={{ borderRadius: '10px', border: '1px solid #434651', backgroundColor: '#13151c', padding: '20px' }}>
              <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', textAlign: "center", alignItems: 'center' }}>
                <LeaderboardIcon style={{ fontSize: "40px", padding: "5px" }} /> BENCHMARK
              </Typography>
              <Typography variant="h5" align="center" style={{ fontSize: "15px", marginBottom: '10px', fontWeight: 'bold', textAlign: "center", alignItems: 'center', color: "green", }}> Últimos 12 meses
              </Typography>
              <Grid container spacing={2} justifyContent="center" sx={{ paddingBottom: 2 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <div style={{ padding: "10px", border: '1px solid #363a45', borderRadius: "20px", fontWeight: "bold", fontSize: "20px", textAlign: "center"}}>
                    Carteira CVL
                    <div style={{ color: "green", fontSize: "30px" }}>
                      <EjectIcon style={{ marginBottom: "2px"}}/>
                      59.74%
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: "10px", border: '1px solid #363a45', borderRadius: "20px", fontWeight: "bold", fontSize: "20px", width: '100%' }}>
                    IBOV
                    <EjectIcon style={{ marginBottom: "2px"}}/>
                    <div style={{ color: "green" }}>12.32%</div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: "10px", border: '1px solid #363a45', borderRadius: "20px", fontWeight: "bold", fontSize: "20px", width: '100%' }}>
                    CDI
                    <EjectIcon style={{ marginBottom: "2px"}}/>
                    <div style={{ color: "green" }}>12.82%</div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
          <div className="grid" style={{ display: 'flex', flexDirection: 'column', borderRadius: '10px', border: '1px solid #434651', backgroundColor: '#1e222d', padding: '20px', width: '100%' }}>
            <div>
              <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <CurrencyExchangeIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px" }} /> AÇÕES
              </Typography>
              <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 12m</Typography>
            </div>
            <Grid container spacing={2} style={{ flexGrow: 1 }}>
              {symbolsGrid1.map((symbol, index) => (
                <Grid item xs={12} key={index}>
                  <TradingViewWidget symbol={symbol} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
          <div className="grid" style={{ display: 'flex', flexDirection: 'column', borderRadius: '10px', border: '1px solid #434651', backgroundColor: '#1e222d', padding: '20px', width: '100%' }}>
            <div>
              <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <ApartmentIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px" }} /> FUNDOS IMOBILIÁRIOS
              </Typography>
              <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 12m</Typography>
            </div>
            <Grid container spacing={2} style={{ flexGrow: 1 }}>
              {symbolsGrid2.map((symbol, index) => (
                <Grid item xs={12} key={index}>
                  <TradingViewWidget2 symbol={symbol} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
          <div className="grid" style={{ display: 'flex', flexDirection: 'column', borderRadius: '10px', border: '1px solid #434651', backgroundColor: '#1e222d', padding: '20px', width: '100%' }}>
            <Typography variant="h3" align="center" style={{ fontSize: "30px", fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <CurrencyBitcoinIcon style={{ fontSize: "40px", marginRight: "10px", marginTop: "20px", backgroundColor: "#363a45", borderRadius: "20px" }} /> CRYPTOMOEDAS
            </Typography>
            <Typography variant="body1" align="left" style={{ marginLeft: '5px', fontWeight: 'bold', marginBottom: "30px", marginLeft: "50px", marginTop: "-10px", color: "#089981" }}>Atualizado a 12m</Typography>
            <Grid container spacing={2} style={{ flexGrow: 1 }}>
              {symbolsGrid3.map((symbol, index) => (
                <Grid item xs={12} key={index}>
                  <TradingViewWidget3 symbol={symbol} />
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
