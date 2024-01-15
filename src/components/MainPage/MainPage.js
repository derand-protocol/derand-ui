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
        background: 'linear-gradient(180deg,#1C1B23, #292A43, #1E1D28)',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}>
      <Grid container spacing={2} justifyContent="center" sx={{ 
        maxWidth: '100%', 
        position: 'relative', 
        padding: { xs: '50px', sm: '50px 50px 50px 50px', md: '0px 200px 100px 200px' },
        }}>
        {/* Main content */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <MainContent />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Editor />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Features />
        </Grid>

        {/* Right Background image */}
        <Box
          component="img"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            objectFit: 'cover',
            zIndex: 1,
          }}
          src="/backgroundTop.svg"
          alt="Background Image"/>

        {/* Left Background image */}
        <Box
          component="img"
          sx={{
            position: 'absolute',
            left: 0,
            top: '1600px',
            objectFit: 'cover',
            zIndex: 1,
            width:'900px',
          }}
          src="/backgroundb.svg"
          alt="Background Image"/>
      </Grid>
    </Box>
  );
}

export default MainPage;
