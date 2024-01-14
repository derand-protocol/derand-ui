import React from 'react';
import { Box, Grid } from '@mui/material';
import MainContent from './mainContent';
import Editor from './Editor';
import Features from './Features';

function MainPage() {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        bgcolor: '#1C1B23',
        padding: '24px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', // Centers the content vertically
        minHeight: '100vh', // Minimum height to fill the viewport
      }}
    >
      <Grid container spacing={2
        } justifyContent="center" sx={{ maxWidth: '100%' }}>
        <Grid item xs={12}>
        <MainContent />
        </Grid>
        <Grid item xs={12}>
        <Editor />
        </Grid>
        <Grid item xs={12}>
        <Features />
        </Grid>
      </Grid>
    </Box>
);
}

export default MainPage;