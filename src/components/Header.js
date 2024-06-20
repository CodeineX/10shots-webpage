import React from 'react';
import logo from '../assets/logo-blackbg.png'; // Replace with your logo image path

const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', padding: '1rem', display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="10shots" style={{ width: '100px', height: '50px' }} />
    </header>
  );
};

export default Header;
