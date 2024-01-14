import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 3, 
        background: 'linear-gradient(to right, #24232B, #16151D)', // Linear gradient background
        borderTop: '1px solid #000000', // Top border
        color: 'white',
      }}
    >
      {/* Left side - SVG Image */}
      <Box>
        <img src='/pion-muon-logo.svg' alt="Logo" style={{ height: '20px' ,marginLeft:'20px'}} />
      </Box>

      {/* Right side - Text Links */}
      <Box sx={{ display: 'flex', alignItems: 'center' ,marginRight:'30px'}}>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          <Typography variant="body2">Privacy Policy</Typography>
        </Link>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          <Typography variant="body2">Privacy and Cookies</Typography>
        </Link>
        <Link href="#" color="inherit">
          <Typography variant="body2">Terms & Conditions</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
