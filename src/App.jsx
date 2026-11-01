import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/StudentCard.jsx";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Amel",
      nom: "Makhloufa",
      email: "amelmakhloufa1@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: "/profil.png"
    },
    {
      prenom: "Eya",
      nom: "Rjeb",
      email: "eyarjeb1@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: "/eya.jpeg"
    },
    {
      prenom: "Abbderahmmen",
      nom: "Ferjenni",
      email: "ferjeniabderrahmen@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: "/ferjeni.jpeg"
    }
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [nouveau, setNouveau] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    filiere: "",
    anneeEtude: "",
    groupe: "",
    ville: "",
    image: ""
  });

  function handleChange(e) {
    setNouveau({ ...nouveau, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!nouveau.prenom || !nouveau.nom || !nouveau.email) return;
    
    const etudiantFinal = {
      ...nouveau,
      image: nouveau.image.trim() !== "" ? nouveau.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    };

    setEtudiants([...etudiants, etudiantFinal]);
    setNouveau({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      filiere: "",
      anneeEtude: "",
      groupe: "",
      ville: "",
      image: ""
    });
    setFormVisible(false);
  }

  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));
  }

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <div className="action-container">
        <button onClick={() => setFormVisible(true)} className="add-btn">
          + Ajouter un étudiant
        </button>
      </div>

      {formVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Ajouter un nouvel étudiant</h3>
              <button onClick={() => setFormVisible(false)} className="close-x-btn">&times;</button>
            </div>
            
            <form onSubmit={handleSubmit} className="student-form-modal">
              <div className="form-grid">
                <input type="text" name="prenom" placeholder="Prénom" value={nouveau.prenom} onChange={handleChange} required />
                <input type="text" name="nom" placeholder="Nom" value={nouveau.nom} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={nouveau.email} onChange={handleChange} required />
                <input type="text" name="telephone" placeholder="Téléphone" value={nouveau.telephone} onChange={handleChange} />
                <input type="text" name="filiere" placeholder="Filière" value={nouveau.filiere} onChange={handleChange} />
                <input type="text" name="anneeEtude" placeholder="Année d'étude" value={nouveau.anneeEtude} onChange={handleChange} />
                <input type="text" name="groupe" placeholder="Groupe" value={nouveau.groupe} onChange={handleChange} />
                <input type="text" name="ville" placeholder="Ville" value={nouveau.ville} onChange={handleChange} />
                <input type="text" name="image" placeholder="Lien image (laisser vide pour avatar par défaut)" value={nouveau.image} onChange={handleChange} />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setFormVisible(false)} className="cancel-btn">Annuler</button>
                <button type="submit" className="submit-btn">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onDelete={() => supprimerEtudiant(etudiant.email)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;