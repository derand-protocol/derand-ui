import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RenderTable = () => {
  // Data for the table
  const rows = [
    {
      blockchain: 'Ethereum',
      dAppContract: '0xf37795c4fd07796b4371f08c9567cee596df238f',
      executor: '0xf37795c4fd07796b4371f08c9567cee596df238f',
      pionDeposited: '100.46',
      fulfilledRequests: '12',
      pionBalance: '14.56',
      actions: 'Deposit'
    },
    {
      blockchain: 'BSC',
      dAppContract: '0xf37795c4fd07796b4371f08c9567cee596df238f',
      executor: '0xf37795c4fd07796b4371f08c9567cee596df238f',
      pionDeposited: '100.46',
      fulfilledRequests: '12',
      pionBalance: '14.56',
      actions: 'Deposit'
    }
  ];

  const cellStyle = {
    maxWidth: '200px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    color: '#E6E6E6', // Set text color for all cells
    borderBottom:'#2B2C47',
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', marginTop: 2, color: '#E6E6E6' }}>
      <Table aria-label="dApps table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#40467F', color: '#E6E6E6' }}>
            <TableCell sx={cellStyle}>Blockchain</TableCell>
            <TableCell sx={cellStyle}>dApp Contract</TableCell>
            <TableCell sx={cellStyle}>Executor</TableCell>
            <TableCell sx={cellStyle}>PION deposited</TableCell>
            <TableCell sx={cellStyle}>Fulfilled Requests</TableCell>
            <TableCell sx={cellStyle}>PION Balance</TableCell>
            <TableCell sx={cellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#2D2D48' : '#2E304E', color: '#E6E6E6' }}>
              <TableCell sx={cellStyle}>{row.blockchain}</TableCell>
              <TableCell sx={cellStyle}>{row.dAppContract}</TableCell>
              <TableCell sx={cellStyle}>{row.executor}</TableCell>
              <TableCell sx={cellStyle}>{row.pionDeposited}</TableCell>
              <TableCell sx={cellStyle}>{row.fulfilledRequests}</TableCell>
              <TableCell sx={cellStyle}>{row.pionBalance}</TableCell>
              <TableCell sx={cellStyle}>{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RenderTable;