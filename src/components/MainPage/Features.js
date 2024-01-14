import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function Features() {
  const boxStyle = {
    height: 230,
    borderRadius: '20px',
    background: 'linear-gradient(45deg, #24232B, #16151D)',
    border: '2px solid',
    borderColor: 'linear-gradient(45deg, #F8F1FE 0%, #F8F2FD 100%, #F8F1FE 0%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  };

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
    <Grid container justifyContent="center" spacing={2}>
    {boxesContent.map((box, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
    <Box sx={boxStyle}>
    <Typography variant="h6" color="white" gutterBottom>
    {box.title}
    </Typography>
    <Typography variant="body2" color="rgba(255, 255, 255, 0.60)">
    {box.body}
    </Typography>
    </Box>
    </Grid>
    ))}
    </Grid>
    );
    }
    
    export default Features;