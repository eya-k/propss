import './App.css';
import Profile from './Profile/Profile';


function App() {
  const handleAlert=(name) =>{
    alert(`hi my name is ${name}`)
  }
  return (
    <div className="App">
     
      <Profile fullName="Albert Einstein" Professions=" Enseignant, Inventeur, Auteur, Mathématicien, Philosophe, Pédagogue, Professeur d'université, Rédacteur scientifique, Physicien théoricien, Universitaire"
      bio="Albert Einstein est un physicien américain d'origine allemande (1879-1955) surtout connu comme le créateur des théories de la relativité restreinte et générale - Prix Nobel de physique en 1921.
      Il fut successivement allemand, apatride (1896), suisse (1901) et de double nationalité helvético-américaine (1940)1. Il épousa son ancienne camarade d'études Mileva Maric, puis sa cousine Elsa Einstein.
      Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1915. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.
      Il est aujourd'hui considéré comme l'un des plus grands scientifiques de l'histoire, et sa renommée dépasse largement le milieu scientifique. Il est la personnalité du XXe siècle selon l'hebdomadaire Time. Dans la culture populaire, son nom et sa personne sont directement liés aux notions d'intelligence et de savoir.">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe0P_a9mStoQVYlyunkYGwsa6V4amqOjzK66nOvkrWt9u9IOCTeB8tJ7dcmYp62sRwsE&usqp=CAU'
        handleAlert={handleAlert}
        />
      </Profile>
    </div>
  );
}

export default App;
