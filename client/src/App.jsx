import { Routes, Route} from 'react-router-dom';
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
import Connexion from './composants/inscription_connexion/Connexion';
import Paiement from './composants/paiement/Paiement';
import './composants/officielaccueil/officiel.css';
import './composants/inscription_connexion/inscrip_conex.css';
import './composants/paiement/Paiement.css'
function App() {
 

  return (
    <div>
    
        <>
          <Header />
          <Routes>
            <Route path='/AccueilLushiEvent' element={<AccueilLushiEvent />} />
            <Route path='/Services' element={<ServiceSection />} />
            <Route path='/Gallerie' element={<GallerySection />} />
            <Route path='/Àpropos' element={<AboutSection />} />
            <Route path='/Evénéments' element={<Events />} />
            <Route path='/ServiceClient' element={<ServiveClient />} />
            <Route path='/' element={<Inscription />} />
            <Route path='/connexion' element={<Connexion />}/>
            <Route path='/Paiement' element={<Paiement />}/> 
          </Routes>
          <ThemeToggler />
          <Footer />
        </>
    
    </div>
  );
}

export default App;
