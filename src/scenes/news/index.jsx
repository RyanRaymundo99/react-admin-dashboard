import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Grid, Link, Button, Container } from '@mui/material';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('Ibov'); // Default category
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://yahoo-finance127.p.rapidapi.com/news/${category}`, {
          headers: {
            'X-RapidAPI-Key': 'a17be7ff33msh9f3bdb294b64ac2p158415jsn53dd57a8e159',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
          },
        });

        // Convert the object of articles into an array
        const articlesArray = Object.values(response.data);

        if (Array.isArray(articlesArray)) {
          // Extract only the title, publisher, and link from the articles
          const simplifiedData = articlesArray.map((article) => ({
            title: article.title,
            publisher: article.publisher,
            link: article.link,
          }));

          setNewsData(simplifiedData);
        } else {
          setNewsData([]);
        }

        setLoading(false);
      } catch (error) {
        console.error('API Error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Typography variant="h1" gutterBottom>
        Categoria de Notícias
      </Typography>
      <div>
        <Button variant={category === 'Ibov' ? 'contained' : 'outlined'} style={{ margin: '8px', fontSize: '20px', borderRadius: '20px' }} onClick={() => setCategory('Ibov')}>Ibov</Button>
        <Button variant={category === 'Crypto' ? 'contained' : 'outlined'} style={{ margin: '8px', fontSize: '20px', borderRadius: '20px' }} onClick={() => setCategory('Crypto')}>Crypto</Button>
        <Button variant={category === 'Brasil' ? 'contained' : 'outlined'} style={{ margin: '8px', fontSize: '20px', borderRadius: '20px' }} onClick={() => setCategory('Brasil')}>Brasil</Button>
        <Button variant={category === 'World' ? 'contained' : 'outlined'} style={{ margin: '8px', fontSize: '20px', borderRadius: '20px' }} onClick={() => setCategory('World')}>World</Button>
      </div>
      <div style={{ marginTop: '16px' }}>
        {loading ? (
          <Typography variant="body2">Loading news...</Typography>
        ) : error ? (
          <Typography variant="body2">Error loading news data. Please try again later.</Typography>
        ) : (
          <Grid container spacing={2}>
            {newsData.map((article, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', borderRadius:"10px" }}>
                  <Typography variant="h4" marginBottom="10px">{article.title}</Typography>
                  <Typography variant="h5">Fonte: {article.publisher}</Typography>
                  <Typography variant="h6">
                    Link: <Link href={article.link} target="_blank" rel="noopener noreferrer">Ler mais</Link>
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

export default News;
