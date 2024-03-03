import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import Charts from '../../../assets/Charts.png'; // Import Charts image
import Charts2 from '../../../assets/Charts2.png'; // Import Charts image
import Charts3 from '../../../assets/Charts3.png'; // Import Charts image

const Grids = () => {
  return (
    <div className="bg-gradient-to-r from-black via-slate-950 to-black pb-32">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper
            elevation={3}
            className="grid-item"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Charts})`, // Use imported Charts image
              backgroundSize: 'cover',
              height: '600px',
              padding: '20px',
              borderRadius: '30px',
              border: '1px solid #434651',
            }}
          >
            <div className="container">
              <div className="flex flex-wrap">
                <div className="p-12 md:w-1/2 flex flex-col items-start text-left">
                  <span className="inline-block py-1 px-2 rounded-lg border border-pink-500 text-pink-500 text-xs font-medium tracking-widest">Praticidade</span>
                  <h2 className="sm:text-5xl text-4xl title-font font-bold text-white mt-4 mb-4">Gráficos Completos</h2>
                  <p className="leading-relaxed text-lg mb-8">Plataforma com plugins e indicadores para Analisar Ações, Opções, Futuros, Criptomoedas, FOREX, Commodities e Juros</p>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            className="grid-item"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Charts2})`,
              height: '600px',
              padding: '20px',
              borderRadius: '30px',
              border: '1px solid #434651',
            }}
          >
            <div className="container">
              <div className="flex flex-wrap">
                <div className="p-6 md:w-1/2 flex flex-col items-start text-left">
                  <span className="inline-block py-1 px-2 rounded-lg border border-red-500 text-red-500 text-xs font-medium tracking-widest">Modernidade</span>
                  <h2 className="sm:text-5xl text-4xl title-font font-bold text-white mt-4 mb-4">Indicadores e ferramentas de desenho</h2>
                  <p className="leading-relaxed text-lg mb-8">Mais de 100 indicadores técnicos integrados e dezenas de ferramentas de desenho, permitindo que você analise os mercados de várias perspectivas.</p>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            className="grid-item"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${Charts3})`,
              height: '600px',
              padding: '20px',
              borderRadius: '30px',
              border: '1px solid #434651',
            }}
          >
            <div className="container">
              <div className="flex flex-wrap">
                <div className="p-6 md:w-1/2 flex flex-col items-start text-left">
                  <span className="inline-block py-1 px-2 rounded-lg border border-green-500 text-green-500 text-xs font-medium tracking-widest">Seguro</span>
                  <h2 className="sm:text-5xl text-4xl title-font font-bold text-white mt-4 mb-4">Mapas de calor e perfis de volume</h2>
                  <p className="leading-relaxed text-lg mb-8">Obtenha insights sobre o sentimento do mercado e o fluxo de ordens através de mapas de calor e perfis de volume sobrepostos no gráfico.</p>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grids;
