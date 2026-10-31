import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/StudentCard.jsx";

const etudiants = [
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
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px", gap: "20px" }}>
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
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;