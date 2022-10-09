import './App.css';
import Profile from './Profile/Profile';


function App() {
  const handleAlert=(name) =>{
    alert(`hi my name is ${name}`)
  }
  return (
    <div className="App">
     
      <Profile fullName="Elon Reeve Musk FRS" Professions=" Entrepreneur, Investisseur, Homme d'affaires, Producteur de film, Technologue, Inventeur, Dessinateur industriel"
      bio="entrepreneur américain d'origine sud-africaine qui a cofondé la société de paiement électronique PayPal et créé SpaceX, fabricant de lanceurs et d'engins spatiaux.">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SpaceX_CEO_Elon_Musk_visits_N%26NC_and_AFSPC_%28190416-F-ZZ999-006%29_%28cropped%29.jpg/170px-SpaceX_CEO_Elon_Musk_visits_N%26NC_and_AFSPC_%28190416-F-ZZ999-006%29_%28cropped%29.jpg'
        handleAlert={handleAlert}
        />
      </Profile>
    </div>
  );
}

export default App;
