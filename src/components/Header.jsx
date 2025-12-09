// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#a020f0',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        style={{ height: '40px' }} 
      />
      <nav style={{ display: 'flex', gap: '15px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
      </nav>
    </header>
  );
}

export default Header;