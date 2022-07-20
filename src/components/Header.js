import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header" id="head">
      <h1>Eric Mok's Portfolio</h1>
      <Navbar />
    </header>
  );
}

export default Header;
