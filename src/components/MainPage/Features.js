import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled Box with gradient border
const GradientBorderBox = styled(Box)({
  height: '200px',
  borderRadius: '20px', // slightly larger to accommodate border
  background: 'linear-gradient(130deg,#CDC8DA, #2F2F3F,#CDC8DA, #2F2F3F)',
  display: 'flex',
  justifyContent: 'center',
  //boxShadow: '0 0 0 2px', // Shadow offset
  alignItems: 'center',
  padding:'16.5px 1.5px 17px 1.5px',
});

// Box for content
// Box for content
const ContentBox = styled(Box)({
  borderRadius: '20px',
  background: 'linear-gradient(45deg, #24232B, #16151D)',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Changed to center for equal spacing
  alignItems: 'center',
  padding: '16px 32px', // Reduced padding for less space between title and body
  '& .title': {
    height: '65px', // Fixed height for the title
  },
  '& .body': {
    height: '100px', // Fixed height for the body
    overflow: 'auto', // Enable scroll for overflow
    //textAlign: 'justify', // Justify text for cleaner appearance
  }
  });

function Features() {
  const boxesContent = [
    {
      title: 'Chain Independent',
      body: 'DeRand protocol is chain-independent. It can be used on EVM and non-EVM, public or private blockchains.',
    },
    {
      title: 'Decentralized & Censorship Resistant',
      body: '100% decentralized and censorship-resistant, using Muon\'s TSS network to generate random numbers',
    },
    {
      title: 'Cost Efficient',
      body: 'Pay only fees. No on-chain fees. Gas efficient.',
    },
    {
      title: 'Permissionless, Modular & Flexible',
      body: 'DeRand protocol is modular and flexible, allowing different parties to run different parts of the protocol. There is no central authority.',
    },
    {
      title: 'Easy to use',
      body: 'Smart contract libraries and the structure of the protocol are compatible with other VRF platforms. Requires minimal code changes for developers',
    },
    ];
    
    return (
      <Grid container justifyContent="center" spacing={2} alignItems="center" sx={{ width: '100%', margin: '0 auto', paddingTop: '50px' }}>
        {boxesContent.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GradientBorderBox>
              <ContentBox>
                <Typography variant="h6" color="white" gutterBottom style={{ textAlign: 'center', width: '100%' }} className="title">
                  {box.title}
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.60)" style={{ width: '100%' }} className="body">
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