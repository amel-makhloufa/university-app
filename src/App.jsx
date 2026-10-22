import "./App.css";

function App() {
  const handleContact = () => {
    window.location.href = "mailto:amelmakhloufa1@gmail.com";
  };

  return (
    <div className="card">
      <h2>Fiche étudiant</h2>
      <img 
        src="/profil.png" 
        alt="Photo de profil Amel" 
        style={{ 
          borderRadius: "50%", 
          width: "120px", 
          height: "120px", 
          objectFit: "cover", 
          marginBottom: "15px" 
        }} 
      />
      <p><strong>Nom & Prénom:</strong> Amel Makhloufa</p>
      <p><strong>Email:</strong> amelmakhloufa1@gmail.com</p>
      <p><strong>Téléphone:</strong> +216 22 978 666</p>
      <p><strong>Filière:</strong> Génie Logiciel et Systèmes d'Information</p>
      <p><strong>Année d'étude:</strong> 2ème année</p>
      <p><strong>Groupe:</strong> GLSI 2</p>
      <p><strong>Ville:</strong> Mahdia</p>
      
      <button 
        onClick={handleContact} 
        style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        Contacter
      </button>
    </div>
  );
}

export default App;