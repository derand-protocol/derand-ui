import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled Box with gradient border
const GradientBorderBox = styled(Box)({
  position: 'relative',
  textAlign: 'center', 
  my: 4,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '5px', // Width of the gradient border
    height:'90%',
    background: 'linear-gradient(180deg, #B267F3, #EA68AD, #FFA279)',
    borderRadius: '5px',
  }
});

function Editor() {
  return (
    <GradientBorderBox>
      {/* Image */}
      <img 
        src="/Editor.png" // Replace with your image path
        alt="Descriptive Alt Text"
        style={{ maxWidth: '100%', height: 'auto', paddingBottom: '40px' }}
      />
      {/* Button */}
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ backgroundImage: 'linear-gradient(180deg, #24232B, #393457)', color: 'white' }}
      >
        <a href="https://github.com/derand-protocol/derand-contracts/blob/main/contracts/examples/DeRandConsumerExample.sol" 
           target="_blank" 
           style={{ textDecoration: 'none', color: 'inherit' }}>
          Full Example on GitHub
        </a>
      </Button>
    </GradientBorderBox>
  );
}

export default Editor;
