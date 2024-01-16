import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom styled Box for the image with gradient border
const ImageBoxWithBorder = styled(Box)({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '5px', // Apply border-radius if needed
  overflow: 'hidden', // This ensures the border applies closely to the image
  '& img': {
    display: 'block', // Remove any default spacing/margin around the image
    width: '100%', // Sets the width to 100% of the parent container
    height: 'auto', // Maintains aspect ratio
    maxWidth: '100%', // Ensures the image doesn't exceed its natural size
    maxHeight: '80vh', // Maximum height
  },
  '&::after': { // Using ::after to overlay the border on the left side of the image
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '10px', // Width of the left border
    height: '100%', // Height matches the image
    background: 'linear-gradient(180deg, rgba(178,103,243,0.6), rgba(234,104,173,0.6), rgba(255,162,121,0.6))',
    zIndex: 1, // Places the gradient above the image
  }
});

function Editor() {
  return (
    <div style={{ textAlign: 'center', paddingLeft: '24px' }}>
      <ImageBoxWithBorder>
        {/* Image */}
        <img
          src="/Editor.png"
          alt="Descriptive Alt Text"
        />
      </ImageBoxWithBorder>

      {/* Box to wrap the button for styling */}
      <Box sx={{ paddingTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundImage: 'linear-gradient(#403886, #332E5B)',
            color: 'white',
            textTransform: 'none',
            '& .MuiButton-label': {
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiSvgIcon-root': {
              marginRight: '8px', // Adjust the margin between the icon and text
            },
          }}
          href="https://github.com/derand-protocol/derand-contracts/blob/main/contracts/examples/DeRandConsumerExample.sol"
          target="_blank"
        >
          <GitHubIcon /> Full Example on GitHub
        </Button>
      </Box>
    </div>
  );
}

export default Editor;
