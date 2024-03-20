import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/Logo/Cyberus_hor.png';
import './HeaderDav.css';

function HeaderDash({ onToggleSidebar }) {
  return (
    <header className="header-container">
      <IconButton
        className="Icon_button"
        size="small"
        edge="start"
        color="default"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <img src={logo} alt="Logo" className="logo-image" />
      
    </header>
  );
}

export default HeaderDash;
