import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Grid, Button, Link, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function MainContent() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/dapps');
  };
  const theme = useTheme();

  // Custom media query for 768x1024 resolution
  const isTabletResolution = useMediaQuery('(min-width:768px) and (max-width:1024px) and (orientation: portrait), (min-width:768px) and (max-width:1024px) and (orientation: landscape)');

  // Apply '100vh' for small and medium screens, and 'auto' for 768x1024 resolution
  const minHeightStyle = isTabletResolution ? 'auto' : theme.breakpoints.up('sm') && theme.breakpoints.down('md') ? '100vh' : 'auto';

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      sx={{ 
        paddingTop: '100px',
        minHeight: minHeightStyle,
        position: 'relative', 
        zIndex: 2 
      }}
    >
      <Grid item xs={12} md={10} lg={10} xl={8} sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      mx: 'auto', // Center align the grid item
      px: { xs: 2, sm: 4, md: 6} // Responsive padding
      }}>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', // Use 100% width for flexibility
        fontFamily: 'Inter, sans-serif',
        lineHeight: '24px',
        pointerEvents: 'all',
        tabSize: 4,
        textAlign: 'center'
        }}>
      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 600,
          fontSize: {xs: '1.5rem', sm: '2.5rem', md: '3rem',lg: '4rem', },  
          color: 'white',
          display: 'inline',
        }}
      >    
          <Box component="span" sx={{
          background: 'linear-gradient(45deg, #B267F3, #EA68AD, #FFA279)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          MozBackgroundClip: 'text',
          MozTextFillColor: 'transparent',
          }}>
          Decentralized, Chain-agnostic{" "}
          </Box>
          and Verifiable Random Number Generator
        </Typography>
      {/* Subtitle */}
        <Typography
            variant="h6"
            sx={{
            mt: { xs: 1, md: 2 },
            fontWeight: 'normal',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.375rem' }, // Responsive font size
            color: '#9C9CA7',
            }}
            >
            DeRand leverages{" "}
            <Link
              href="https://www.muon.net/"
              target="_blank"
              color="#FEFEFE"
              sx={{
              textDecoration: 'underline',
              }}
              >
              Muon 
            </Link>{" "}
              decentralized TSS network to provide verifiable random numbers on any EVM and non-EVM blockchain.
        </Typography>
            {/* Button */}
            {/* New Grid container for buttons */}
        <Grid 
          container 
          spacing={2} 
          justifyContent="center" 
          sx={{ 
            flexDirection: { xs: 'column', md: 'row' },
            mt: { xs: 2, md: 4 }
          }}
        >
        {/* Read The Docs Button */}
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          href="https://medium.com/@DeRand_dev/derand-decentralized-chain-agnostic-verifiable-random-number-generator-120828265df7"
          underline="none"  // Optional: Remove underline
          target="_blank" 
        >
          <Button
            variant="contained"
            sx={{
              width: '210px', // Set a fixed width
              backgroundImage: 'linear-gradient(#403886, #332E5B)',
              color: '#FEFEFE',
              textTransform: 'none',
              ':hover': {
                backgroundImage: 'linear-gradient(45deg, #332E5B, #403886)',
              }
            }}
          >
            What is DeRand?{" "}
            <KeyboardArrowRightIcon fontSize="small" style={{ color: '#8885AA', marginRight: '-10px' }} />
            <KeyboardArrowRightIcon fontSize="medium" style={{ color: '#C3C1D4', marginRight: '-15px' }} />
            <KeyboardArrowRightIcon fontSize="large" style={{ color: 'white' }} />
          </Button>
        </Link>
        </Grid>

        {/* Explore dApps Button */}
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handleExploreClick}
          variant="contained"
          sx={{
            width: '210px', // Set the same fixed width
            backgroundImage: 'linear-gradient(#403886, #332E5B)',
            color: '#FEFEFE',
            textTransform: 'none',
            ':hover': {
              backgroundImage: 'linear-gradient(45deg, #332E5B, #403886)',
            }
          }}
        >
          {/* <ExploreIcon fontSize="large" style={{ color: '#FEFEFE', marginRight: '10px'}} /> */}
            Explore dApps{" "}
        </Button>
        </Grid>
        </Grid>
      </Box>
      </Grid>
      </Grid>
  );
}

export default MainContent;

