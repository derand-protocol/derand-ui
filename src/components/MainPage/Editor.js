import React from 'react';
import {Button, Box } from '@mui/material';

function Editor() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      {/* Image */}
      <img 
        src="/Editor.png" // Replace with your image path
        alt="Descriptive Alt Text
"
style={{ maxWidth: '100%', height: 'auto' }}
/>
  {/* Button */}
  <Button 
    variant="contained" 
    color="primary" 
    href="https://github.com/derand-protocol/derand-contracts/blob/main/contracts/examples/DeRandConsumerExample.sol" 
    sx={{backgroundImage: 'linear-gradient(180deg, #24232B, #393457)',color: 'white'}}>
    Full Example on GitHub
  </Button>
</Box>
);
}

export default Editor;