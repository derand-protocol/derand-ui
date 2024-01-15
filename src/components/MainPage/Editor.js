import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom styled Box for the image with gradient border
const ImageBoxWithBorder = styled(Box)({
  position: 'relative',
  display: 'inline-block', // Adjust as needed
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '5px', // Width of the gradient border
    height: '99%', // Height of the gradient border
    background: 'linear-gradient(180deg, #B267F3, #EA68AD, #FFA279)',
    borderRadius: '5px',
  }
});

function Editor() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ImageBoxWithBorder>
        {/* Image */}
        <img
          src="/Editor.png" 
          alt="Descriptive Alt Text"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </ImageBoxWithBorder>

      {/* Box to wrap the button for styling */}
      <Box sx={{ paddingTop: '40px' }}>
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
          href="https://github.com/derand-protocol/"
          target="_blank"
        >
          <GitHubIcon /> Full Example on GitHub
        </Button>
      </Box>
    </div>
  );
}

export default Editor;