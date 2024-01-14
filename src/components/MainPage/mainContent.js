import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

function MainContent() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600, // Semi-bold
            fontSize: '4rem',
            textAlign: 'center',
            color: 'white', // Text color set to white
          }}
        >
          <Box component="span" sx={{
            background: 'linear-gradient(45deg, #B267F3, #EA68AD, #FFA279)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            MozBackgroundClip: 'text',
            MozTextFillColor: 'transparent',
            display: 'inline', // Ensure the box is inline with the surrounding text
          }}>
            Decentralized 
          </Box>{" "}
          and Verifiable Randomness on any Blockchain
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2, // Margin top for spacing
            fontWeight: 'normal',
            fontSize: '1.375rem',
            textAlign: 'center',
            color: 'white',
          }}
        >
          DeRand leverages Muon Network's decentralized TSS network
          to provide verifiable random numbers for smart contracts 
          on any blockchain platform (EVM and non-EVM)
        </Typography>
        {/* Add the Button component */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" sx={{backgroundImage: 'linear-gradient(180deg, #24232B, #393457)',color: 'white'}}>
        Read The Docs
        </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainContent;
