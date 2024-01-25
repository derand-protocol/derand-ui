import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

const ConnectWallet = ({ handleOpenModal, open, handleClose }) => {
  // Define different image sizes for different screen sizes
  const imageSize = {
    width: '70%', // Default size for mobile
    height: 'auto', // Auto height to maintain aspect ratio
    '@media (min-width: 600px)': {
      // Tablet screens (600px and above)
      width: '80%', // 70% width on tablets
    },
    '@media (min-width: 960px)': {
      // Desktop screens (960px and above)
      width: '100%', // 100% width on desktops
    },
};

  // Basic modal style - you can customize this
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: '95px', md: '120px' },
        right: { xs: '16px', md: '90px' },
        cursor: 'pointer',
        display: 'grid', // Use CSS Grid
        placeItems: 'center', // Center the content
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/ConnectWallet.svg`} // Replace with your image path
        alt="Connect Wallet"
        style={{ ...imageSize, maxWidth: '100%'}} // Responsive image size
        onClick={handleOpenModal}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Connect Wallet
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Wallet connection details...
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ConnectWallet;
