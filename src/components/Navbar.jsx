import React from "react";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px", background: "#444", color: "white" }}>
      <a href="#accueil" style={{ color: "white", textDecoration: "none" }}>Accueil</a>
      <a href="#etudiants" style={{ color: "white", textDecoration: "none" }}>Étudiants</a>
      <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
    </nav>
  );
}

export default Navbar;