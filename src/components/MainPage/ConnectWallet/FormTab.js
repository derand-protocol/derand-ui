import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, useTheme } from '@mui/material';

const RenderDepositFeesForm = () => {
  const [formValues, setFormValues] = useState({
    dAppContracts: '',
    executor: '',
    amount: '',
    blockchain: '',
  });

  const theme = useTheme();

  const handleFormChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      color: '#E4E4E4',
      '& fieldset': { borderColor: '#97969B' },
      '&:hover fieldset': { borderColor: '#97969B' },
      '&.Mui-focused fieldset': { borderColor: '#97969B' },
    },
    '& .MuiInputLabel-root': { color: '#E6E6E6' },
    width: '100%', // Responsive width
    maxWidth: '407px', // Max width for larger screens
    m: 1,
  };

  const formControlStyle = {
    m: 1, 
    width: '100%', // Responsive width
    maxWidth: '407px', // Max width for larger screens
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#454D93' },
      '&:hover fieldset': { borderColor: '#454D93' },
      '&.Mui-focused fieldset': { borderColor: '#454D93' },
    },
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      mt: 2,
      width: '100%', // Use full width of the container
      padding: theme.spacing(2), // Add some padding
      boxSizing: 'border-box', // Include padding in width calculation
    }}>
      {/* Form fields */}
      <TextField
        label="dApp Contracts"
        variant="outlined"
        value={formValues.dAppContracts}
        onChange={handleFormChange('dAppContracts')}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        placeholder="dApp Contracts"
      />
      <FormControl sx={formControlStyle}>
        <InputLabel shrink sx={{ color: '#E6E6E6' }}>Executor</InputLabel>
        <Select
          value={formValues.executor}
          label="Executor"
          onChange={handleFormChange('executor')}
          sx={{ color: '#E4E4E4' }}
          MenuProps={{ PaperProps: { style: { maxHeight: '50vh' } } }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={'executor1'}>Executor 1</MenuItem>
          <MenuItem value={'executor2'}>Executor 2</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        value={formValues.amount}
        onChange={handleFormChange('amount')}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl sx={formControlStyle}>
        <InputLabel sx={{ color:'#E6E6E6' }} shrink>Blockchain</InputLabel>
        <Select
          value={formValues.blockchain}
          label="Blockchain"
          onChange={handleFormChange('blockchain')}
          sx={{ color: '#E4E4E4' }}
          MenuProps={{ PaperProps: { style: { maxHeight: '50vh' } } }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={'blockchain1'}>Blockchain 1</MenuItem>
          <MenuItem value={'blockchain2'}>Blockchain 2</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          width:'100%',
          maxWidth: '407px',
          height: '50px',
          bgcolor: '#413989',
          '&:hover': {
            bgcolor: '#413989',
            boxShadow: 'none',
          },
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
};

export default RenderDepositFeesForm;
