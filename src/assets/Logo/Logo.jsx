import React from 'react'
import logo from './Cyberus_hor.png';
import './Logo.css'

function Logo() {
  return (
    <div className='logo'>
        <div className='logo-icon'>
            <img src={logo} alt="Logo" className="logo-image" />
        </div>
    </div>
  )
}

export default Logo