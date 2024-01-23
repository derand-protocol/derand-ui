import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled Box with gradient border
const GradientBorderBox = styled(Box)({
  height:'100%',
  borderRadius: '16px', // slightly larger to accommodate border
  background: `
    linear-gradient(45deg, rgba(76,74,89,1) 40%, rgba(230,225,242,.3) 60%),
    linear-gradient(130deg, rgba(230,225,242,.9) 40%, rgba(230,225,242,.6) 40%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1px', // Thin padding to create the border effect
});
// Box for content
// Box for content
const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  background: 'linear-gradient(45deg, #24232B, #16151D)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '16px',
    
  },
  justifyContent: 'center',
  alignItems: 'center',
  '& .title': {
    height: '65px',
    fontSize: '1.25rem',
    marginBottom: '16px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'},
  },
  '& .body': {
    fontSize: '1rem',
    lineHeight: '24px',
    textAlign: 'justify',
    height: '100px',
    paddingBottom: '36px', // Add padding to the bottom
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.750rem',
      lineHeight: '20px',

    },
  }
}));

function Features() {
  const boxesContent = [
    {
      title: 'Chain-Agnostic',
      body: 'DeRand is built on top of the Muon network, so it generates random seeds off-chain in a decentralized way using Muon’s TSS network. Therefore, it can be used on any EVM or Non-EVM blockchain',
    },
    {
      title: 'Decentralized & Censorship Resistant',
      body: '100% decentralized and censorship-resistant, using Muon\'s TSS network to generate random numbers',
    },
    {
      title: 'Cost Efficient',
      body: 'You only need to pay for the gas fee of the blockchain and the Muon network',
    },
    {
      title: 'Permissionless, Modular & Flexible',
      body: 'DeRand protocol is modular and flexible, allowing different parties to run different parts of the protocol. There is no central authority.',
    },
    {
      title: 'Easy to use',
      body: 'Smart contract libraries and the protocol structure are compatible with other VRF platforms. Requires minimal code changes for developers',
    },
    ];
    
    return (
      <Grid container justifyContent="center" spacing={2} alignItems="center" 
      sx={{ 
        width: '100%', // Default to full width
        maxWidth: { md: '80%' }, // 80% width on medium devices and up
        margin: '0 auto', // Center the container
        zIndex: 2 
      }}>
        {boxesContent.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GradientBorderBox>
              <ContentBox>
                <Typography variant="h6" color="#FEFEFE" gutterBottom 
                style={{ textAlign: 'center', width: '100%' }} className="title"
                sx={{
                fontSize: { xs:'1rem', sm: '1.25rem' }, // Adjust font size for different screen sizes 
              }}>
                  {box.title}
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.60)" style={{ width: '100%' ,textAlign:'center'}} className="body">
                  {box.body}
                </Typography>
              </ContentBox>
            </GradientBorderBox>
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default Features;