
import {Routes, Route } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Connexion from './composants/inscription_connexion/Connexion';
import Header from './composants/officielaccueil/Header';
import AccueilLushiEvent from './composants/officielaccueil/AccueilLushiEvent';
import ServiceSection from './composants/officielaccueil/ServiceSection';
import AboutSection from './composants/officielaccueil/AboutSection';
import GallerySection from './composants/officielaccueil/GallerySection';
import Events from './composants/Booking/Events'; 
import ThemeToggler from './composants/officielaccueil/ThemeToggler';
import Footer from './composants/officielaccueil/FooterSection';
import ServiveClient from './composants/officielaccueil/serviceClient';
import Inscription from './composants/inscription_connexion/Inscription';
import './composants/officielaccueil/officiel.css'
import './composants/inscription_connexion/inscrip_conex.css'
function App(){
  return (
    <div>
      <Header></Header>

      <Routes>
       <Route path='/' element={ <AccueilLushiEvent/>}></Route>
       <Route path='/Services' element={ <ServiceSection/>}></Route>
       <Route path='/Gallerie' element={ <GallerySection/>}></Route>
       <Route path='/Àpropos'  element={ <AboutSection/>}></Route>
       <Route path='/Evénéments' element={ <Events/>}></Route>
       <Route path ='/ServiceClient' element={<ServiveClient/>} ></Route>
       <Route path ='/Inscription' element={<Inscription/>} ></Route>
       <Route path='/connexion'  element={<Connexion/>} ></Route>
      </Routes>

      <ThemeToggler></ThemeToggler>
      <Footer></Footer>
    </div>
  );
}

export default App;
