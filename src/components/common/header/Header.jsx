import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">EduSite</div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
