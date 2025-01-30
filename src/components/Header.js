import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <p>Athul Thampan</p>
      </div>
      <nav className="navbar">
        <a href="https://drive.google.com/file/d/1YV-ZF9GMg3sgkAhg_tbW_JnfM7ZpieSl/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
