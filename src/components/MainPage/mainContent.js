import React from 'react';
import { Typography, Box, Grid, Button, Link } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function MainContent() {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
      <Grid item xs={12} sx={{ px: { xs: 2, md: 0 } }}> {/* Responsive padding */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem' }, // Responsive font size
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
            fontSize: { xs: '.7rem', sm: '1rem',md: '1.375rem' }, // Responsive font size
            textAlign: 'center',
            color: '#9C9CA7',
          }}
        >
          DeRand leverages 
          <Link 
            href="https://www.muon.net/" 
            target="_blank" 
            color="#9C9CA7"
            sx={{ 
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline', // Adds underline on hover
                color: '#FFFFFF', // Changes color on hover (optional)
              }
            }}
          >
            {" Muon Network's"}
          </Link>
          {" decentralized TSS network to provide verifiable random numbers for smart contracts on any blockchain platform (EVM and non-EVM)"}
        </Typography>
        <Box sx={{ mt: { xs: 2, md: 4 }, textAlign: 'center' }}> {/* Responsive margin top */}
        <Button
          variant="contained"
          sx={{
            backgroundImage: 'linear-gradient(#403886, #332E5B)',
            color: 'white',
            textTransform: 'none',
            //boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
            ':hover': {
              backgroundImage: 'linear-gradient(45deg, #332E5B, #403886)', // Slightly different gradient on hover
            }
          }}
        >
          Read The Docs{" "}
          <KeyboardArrowRightIcon fontSize="small" style={{ color: '#8885AA', marginRight: '-10px' }} />
          <KeyboardArrowRightIcon fontSize="medium" style={{ color: '#C3C1D4', marginRight: '-15px' }} />
          <KeyboardArrowRightIcon fontSize="large" style={{ color: 'white' }} />
        </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainContent;
