// import './App.css';
import {Routes, Route } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';


import Book from './composants/Booking/Book'
import Inscription_Connexion from './composants/inscription_connexion/Inscript_Connexion';
import AccueilLushiEvent from './composants/officielaccueil/AccueilLushiEvent';



function App(){
  return (
    <div>
      
      <AccueilLushiEvent></AccueilLushiEvent>
      {/* <Inscription_Connexion></Inscription_Connexion> */}
      {/* <Book></Book> */} 

    </div>
  );
}

export default App;
