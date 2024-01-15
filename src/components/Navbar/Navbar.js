import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from '../../Icons/discord.svg';
import MediumIcon from '../../Icons/medium.svg';   // Adjust the path as needed
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const socialMediaIcons = [
    { icon:  <img src={DiscordIcon} alt="Discord" width={24} height={24}/>, name: 'Discord'},
    { icon: <img src={MediumIcon} alt="Medium" width={24} height={24}/>, name: 'Medium' },
    { icon: <LinkedInIcon style={{width:'24' ,height:'24'}} />, name: 'LinkedIn' },
    { icon: <GitHubIcon style={{paddingRight:'30px',width:'24' ,height:'24'}} />, name: 'GitHub' },
    
    
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(28, 27, 35, .98)', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src="/logo1.svg" alt="DeRand Logo" style={{ height: '40px',paddingLeft:'30px',padding:'20px' }} />
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {socialMediaIcons.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {item.icon}
                      <Typography>{item.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {socialMediaIcons.map((item, index) => (
                <Tooltip title={item.name} key={index}>
                  <IconButton color="inherit">
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;