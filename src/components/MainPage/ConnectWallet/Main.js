import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RenderTable from './TableTab';
import RenderDepositFeesForm from './FormTab';


// Styled components for custom tabs
const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#7949FF', // Custom color for indicator
  },
  marginBottom: 0, // Add marginBottom property here to remove space
}));


const CustomTab = styled(Tab)(({ theme }) => ({
  color: 'white', // Custom text color for all tabs
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#444B8F', // Background color for the selected tab
  },
}));

const Main = () => {
    const [value, setValue] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

  const mainStyle = {
    background: 'linear-gradient(#1C1B23, #292A43, #1E1D28)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const boxStyle = {
    maxWidth: '1244px',
    width: '90%',
    height: '60vh',
    borderRadius: '10px',
    overflow: 'auto',
    backgroundColor: '#20202E',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };
  
    return (
        <div style={mainStyle}>
          <Box sx={{ width: '100%'}}>
            <CustomTabs value={value} onChange={handleChange} centered>
              <CustomTab label="dApps" />
              <CustomTab label="Deposit Fees" />
            </CustomTabs>
          </Box>
          <div style={boxStyle}>
            {value === 0 && <RenderTable />}
            {value === 1 && <RenderDepositFeesForm />}
          </div>
        </div>
      );
    };
    
    export default Main;
