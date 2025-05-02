import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        {/* Icono del menú */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Título de la aplicación */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stockid
        </Typography>

        {/* Enlaces de navegación */}
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Acerca de
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
