import React from "react";
import "./StudentCard.css";

function StudentCard(props) {
  return (
    <div className="card">
      <img 
        src={props.image} 
        alt="Photo de l'étudiant" 
        className="student-img" 
      />
      <h3>Fiche étudiant</h3>
      <p><strong>Nom & Prénom:</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Téléphone:</strong> {props.telephone}</p>
      <p><strong>Filière:</strong> {props.filiere}</p>
      <p><strong>Année:</strong> {props.anneeEtude}</p>
      <p><strong>Groupe:</strong> {props.groupe}</p>
      <p><strong>Ville:</strong> {props.ville}</p>
      
      <button 
        onClick={() => window.location.href = `mailto:${props.email}`} 
        className="contact-btn"
      >
        Contacter
      </button>
    </div>
  );
}

export default StudentCard;

