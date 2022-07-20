import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div>
      <a href="#aboutme" className='about'>About Me</a>
      <a href="#project" className='project'>Projects</a>
      <a href="#contactmethod" className='contact'>Contact</a>
    </div>
  );
}

export default Navbar;
