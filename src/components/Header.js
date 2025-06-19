import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header>
      <div className="header-logo">
        <p>Athul Thampan</p>
      </div>

      {/* Desktop navbar */}
      <nav className="navbar">
        <a href="https://drive.google.com/file/d/1YV-ZF9GMg3sgkAhg_tbW_JnfM7ZpieSl/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Burger button */}
      <button
        className="burger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <a href="https://drive.google.com/file/d/1YV-ZF9GMg3sgkAhg_tbW_JnfM7ZpieSl/view?usp=sharing" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
