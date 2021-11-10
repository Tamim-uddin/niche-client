import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Oculus Sunglasses
          </Typography>
          <NavLink to="/dashboard"><Button sx={{textDecoration: 'none', color: 'white'}} color="inherit">Dashboard</Button></NavLink>
          <NavLink to="/login"><Button sx={{textDecoration: 'none', color: 'white'}} color="inherit">Login</Button></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;