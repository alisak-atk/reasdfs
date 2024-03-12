import React from 'react';
import './MainContent.css'; 
import logo from '../assets/Logo/cyberus-ver.png'
import TextField from '@mui/material/TextField';

function MainContent() {
    return (
        <main className="main-content">
        <div className="login-square">
          <img src={logo} alt="App Logo" className="app-logo" />

          <div>
          <TextField className="custom-textfield" label="Username" variant="outlined" size='small'/>
          <TextField className="custom-textfield" label="Password" variant="outlined" size='small'/>
          </div>
          <button type="button">SIGN IN</button>
        </div>
      </main>
    );
  }
  
  export default MainContent;