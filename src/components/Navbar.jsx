import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="app-navbar">
      <a href="#accueil" className="nav-link">Accueil</a>
      <a href="#etudiants" className="nav-link">Étudiants</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}

export default Navbar;