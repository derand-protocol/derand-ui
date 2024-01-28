import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const RenderTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedContent, setCopiedContent] = useState(null);

  useEffect(() => {
    // Make an HTTP GET request to the API
    fetch("https://dapps-api.derand.dev/api/consumers-list?page=1")
      .then((response) => response.json())
      .then((apiResponse) => {
        const apiData = apiResponse.data; // Assuming the API data is in the `data` field
        const fetchChainNames = async () => {
          try {
            const response = await fetch('/chains.json');
            if (response.ok) {
              const chainsData = await response.json();
              const transformedData = apiData.map((item) => ({
                blockchain: getChainName(parseInt(item.chainId, 10), chainsData),
                dAppContract: item.consumer,
                executor: item.executor,
                pionDeposited: Math.round(item.feeBalance / 1e18).toString(),
                pionUsed: Math.round(item.feeUsed / 1e18).toString(),
                fulfilledRequests: Math.round(item.numberOfTxs / 1e18).toString(),
                pionBalance: Math.round(item.balance / 1e18).toString(),
              }));
              setData(transformedData);
              setLoading(false);
            } else {
              throw new Error('Failed to fetch local chains.json');
            }
          } catch (error) {
            console.error('Error fetching local chain names:', error);
            setLoading(false);
          }
        };

        fetchChainNames();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const cellStyle = {
    maxWidth: '200px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    color: '#E6E6E6',
    borderBottom: 'none',
    textAlign: 'left',
  };

  const tableHeaderCellStyle = {
    backgroundColor: '#40467F',
    color: '#E4E4E4',
    fontWeight: 'bold',
    fontSize: '16px',
    borderBottom: 'none',
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopiedContent(text))
      .catch((error) => console.error('Error copying to clipboard:', error));

    // Reset the copied status after a short delay
    setTimeout(() => setCopiedContent(null), 2000);
  };

  const getChainName = (chainId, chainsData) => {
    const chain = chainsData.find(chain => chain.chainId === chainId);
    return chain ? chain.name : `Unknown Chain ID: ${chainId}`;
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', color: '#E6E6E6' }}>
      <Table aria-label="dApps table">
        <TableHead>
          <TableRow>
            <TableCell sx={tableHeaderCellStyle}>Blockchain</TableCell>
            <TableCell sx={tableHeaderCellStyle}>dApp Contract</TableCell>
            <TableCell sx={tableHeaderCellStyle}>Executor</TableCell>
            <TableCell sx={tableHeaderCellStyle}>PION Deposited</TableCell>
            <TableCell sx={tableHeaderCellStyle}>Fulfilled Requests</TableCell>
            <TableCell sx={tableHeaderCellStyle}>PION Used</TableCell>
            <TableCell sx={tableHeaderCellStyle}>PION Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow sx={{ backgroundColor: '#2E304E', color: '#E6E6E6' }}>
              <TableCell sx={cellStyle} colSpan={7}>Loading data...</TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex} sx={{ backgroundColor: rowIndex % 2 === 0 ? '#2D2D48' : '#2E304E', color: '#E6E6E6' }}>
                <TableCell sx={cellStyle}>{row.blockchain}</TableCell>
                <TableCell sx={cellStyle}>
                  {row.dAppContract.length <= 16 ? (
                    row.dAppContract
                  ) : (
                    <React.Fragment>
                      {row.dAppContract.substring(0, 8)}...
                      {row.dAppContract.substring(row.dAppContract.length - 8)}
                    </React.Fragment>
                  )}
                  <IconButton
                    size="small"
                    style={{ color: '#E4E4E4', fontSize: '18px' }}
                    onClick={() => copyToClipboard(row.dAppContract)}
                  >
                    <FileCopyIcon />
                  </IconButton>
                  {copiedContent === row.dAppContract && <span style={{ marginLeft: '5px', fontSize: '12px', color: 'green' }}>Copied!</span>}
                </TableCell>
                <TableCell sx={cellStyle}>
                  {row.executor.length <= 16 ? (
                    row.executor
                  ) : (
                    <React.Fragment>
                      {row.executor.substring(0, 8)}...
                      {row.executor.substring(row.executor.length - 8)}
                    </React.Fragment>
                  )}
                  <IconButton
                    size="small"
                    style={{ color: '#E4E4E4', fontSize: '18px' }}
                    onClick={() => copyToClipboard(row.executor)}
                  >
                    <FileCopyIcon />
                  </IconButton>
                  {copiedContent === row.executor && <span style={{ marginLeft: '5px', fontSize: '12px', color: 'green' }}>Copied!</span>}
                </TableCell>
                <TableCell sx={cellStyle}>{row.pionDeposited}</TableCell>
                <TableCell sx={cellStyle}>{row.fulfilledRequests}</TableCell>
                <TableCell sx={cellStyle}>{row.pionUsed}</TableCell>
                <TableCell sx={cellStyle}>{row.pionBalance}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RenderTable;
