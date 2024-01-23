import React from 'react';
import { Box, Grid, useTheme, useMediaQuery }  from '@mui/material';
import MainContent from './MainContent';
import Editor from './Editor';
import Features from './Features';

function MainPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTabletOrLarger = useMediaQuery(theme.breakpoints.up('sm'));

return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        background: 'linear-gradient(180deg,#1C1B23, #292A43, #1E1D28)',
        display: 'flex', 
        flexDirection: 'center', 
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
        paddingBottom: '40px'
      }}>
      <Grid container spacing={2} justifyContent="center" sx={{ 
        maxWidth: '100%', 
        position: 'relative', 
        padding: { xs: '0px', sm: '0px', md: '0px' },
        }}>
        {/* Main content */}
        <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' ,padding:'24px',paddingBottom:'50px'}}>
          <MainContent />
        </Grid>
        <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' ,padding:'24px'}}>
          <Editor />
        </Grid>
        <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' ,paddingRight:'24px' }}>
          <Features />
        </Grid>

 {/* Right Background image for desktop */}
 {isDesktop && (
          <Box
            component="img"
            sx={{
              position: 'absolute',
              right: 0,
              top: 200,
              objectFit: 'cover',
              zIndex: 1,
            }}
            src="/backgroundTop.svg"
            alt="Background Image"/>
        )}

        {/* Left Background image for all devices */}
        <Box component="img" sx={{
          position: 'absolute',
          left: 0,
          top: isDesktop ? '1600px' : '200px',
          objectFit: 'cover',
          zIndex: 1, // Send it behind the content
          width: isTabletOrLarger ? '850px' : '450px',
        }} src={isDesktop ? "/backgroundb.svg" : "/backgroundTop.svg"} alt="Background Image" />
      </Grid>
    </Box>
  );
}

export default MainPage;
