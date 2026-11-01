import React, { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <div className="card-header-img">
        <img 
          src={props.image} 
          alt="Photo de l'étudiant" 
          className="student-img" 
        />
      </div>
      <h3>Fiche étudiant</h3>
      <div className="card-info">
        <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
        <p><strong>Filière:</strong> {props.filiere}</p>
        <p><strong>Année:</strong> {props.anneeEtude}</p>
        <p><strong>Groupe:</strong> {props.groupe}</p>
        <p><strong>Ville:</strong> {props.ville}</p>
      </div>

      {coordonneesVisibles && (
        <div className="coordonnees-box">
          <p><strong>Email:</strong> {props.email}</p>
          <p><strong>Téléphone:</strong> {props.telephone}</p>
        </div>
      )}

      <div className="card-actions">
        <button onClick={basculerCoordonnees} className="toggle-btn">
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>
        
        <button 
          onClick={() => window.location.href = `mailto:${props.email}`} 
          className="contact-btn"
        >
          Contacter
        </button>

        <button onClick={props.onDelete} className="delete-btn">
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;

