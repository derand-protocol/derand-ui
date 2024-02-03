import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // import your theme
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/MainPage/ConnectWallet/Main";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import MainPage from "./components/MainPage/MainPage";
import { WagmiProvider } from "wagmi";
import { config } from "./components/walletConnect/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <Box sx={{ flexGrow: 1 }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dApps" element={<Main />} />
                {/* Add more routes as needed */}
              </Routes>
              <Footer />
            </Box>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
