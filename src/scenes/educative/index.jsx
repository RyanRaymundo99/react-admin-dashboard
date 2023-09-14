import React from 'react';
import { Grid, Paper, Typography, Container, CssBaseline } from '@mui/material';

const Index = () => {
  // Replace these with actual YouTube video URLs or IDs
  const videoUrls = [
    'https://www.youtube.com/watch?v=VIDEO_ID_1',
    'https://www.youtube.com/watch?v=VIDEO_ID_2',
    'https://www.youtube.com/watch?v=VIDEO_ID_3',
    'https://www.youtube.com/watch?v=VIDEO_ID_4',
    'https://www.youtube.com/watch?v=VIDEO_ID_5',
    'https://www.youtube.com/watch?v=VIDEO_ID_6',
    'https://www.youtube.com/watch?v=VIDEO_ID_7',
    'https://www.youtube.com/watch?v=VIDEO_ID_8',
    'https://www.youtube.com/watch?v=VIDEO_ID_9',
  ];

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        YouTube Video Grid
      </Typography>
      <Grid container spacing={2}>
        {videoUrls.map((url, index) => (
          <Grid item xs={4} key={index}>
            <Paper elevation={3} style={{ padding: '10px' }}>
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${url.split('v=')[1]}`}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <Typography variant="subtitle2">
                YouTube Video {index + 1}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
