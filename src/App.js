import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // import your theme
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <MainPage />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
