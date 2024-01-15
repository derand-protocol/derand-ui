import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function MainContent() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
      <Grid item xs={12} sx={{ px: { xs: 2, md: 0 } }}> {/* Responsive padding */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }, // Responsive font size
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Box component="span" sx={{
            background: 'linear-gradient(45deg, #B267F3, #EA68AD, #FFA279)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            MozBackgroundClip: 'text',
            MozTextFillColor: 'transparent',
            display: 'inline',
          }}>
            Decentralized 
          </Box>{" "}
          and Verifiable Randomness on any Blockchain
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: { xs: 1, md: 2 }, // Responsive margin top
            fontWeight: 'normal',
            fontSize: { xs: '1rem', sm: '1.2rem',md: '1.375rem' }, // Responsive font size
            textAlign: 'center',
            color: 'white',
          }}
        >
          DeRand leverages Muon Network's decentralized TSS network
          to provide verifiable random numbers for smart contracts
          on any blockchain platform (EVM and non-EVM)
        </Typography>
        <Box sx={{ mt: { xs: 2, md: 4 }, textAlign: 'center' }}> {/* Responsive margin top */}
          <Button variant="contained" sx={{ backgroundImage: 'linear-gradient(180deg, #24232B, #393457)', color: 'white', textTransform: 'none' }}>
            Read The Docs{" "}
            <KeyboardArrowRightIcon fontSize="small" style={{ color: '#81808B', marginRight: '-10px' }} />
            <KeyboardArrowRightIcon fontSize="medium" style={{ color: '#BFBEC5', marginRight: '-15px' }} />
            <KeyboardArrowRightIcon fontSize="large" style={{ color: 'white' }} />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainContent;
