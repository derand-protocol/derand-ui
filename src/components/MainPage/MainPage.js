import React from 'react';
import { Box, Grid } from '@mui/material';
import MainContent from './MainContent';
import Editor from './Editor';
import Features from './Features';

function MainPage() {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        bgcolor: '#1C1B23',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative', // Needed for absolute positioning of the image
      }}
    >
      {/* Main content and the image */}
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '100%', position: 'relative', padding:'0px 200px 50px 200px',}}>
        {/* Main content */}
        <Grid item xs={12}>
          <MainContent />
        </Grid>
        <Grid item xs={12}>
          <Editor />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>

        {/* Background image */}
        <Box
          component="img"
          sx={{
            position: 'absolute',
            right: 0, // Align to the right
            top: 0,

            objectFit: 'cover',
            zIndex: 1, // Place image on top of the background but below the content
          }}
          src="/backgroundTop.svg" // Replace with your image path
          alt="Background Image"
          />
        </Grid>
      </Box>
);
}

export default MainPage;      