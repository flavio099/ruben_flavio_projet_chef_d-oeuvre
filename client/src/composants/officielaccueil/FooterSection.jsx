import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faArrowRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './officiel.css'
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Ajouter toutes les icônes que vous utilisez à la bibliothèque FontAwesome
library.add(faMapMarkerAlt, faArrowRight, faPhone, faEnvelope);
// , faFacebookF, faTwitter, faInstagram, faLinkedinIn


function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Lubumbashi </a>
          <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Kolwezi </a>
          <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Likasi </a>
          <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Kinshasa </a>
          <a href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Goma </a>
        </div>

        <div className="box">
          <h3>Liens rapides</h3>
          <Link to="/AccueilLushiEvent"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Accueil </Link>
          <Link to="/Services"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Services </Link>
          <Link to="/Gallerie"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Gallérie </Link>
          <Link to ="/Evénéments"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Événements</Link>
          <Link to="/ServiceClient"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Service client</Link> 
          <Link to="/Àpropos"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> À propos</Link>
          <Link to="/"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Inscription </Link>   
          <Link to="/Connexion"><FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Connexion</Link>   
        </div>

        <div className="box">
          <h3>Infos contact</h3>
          <a href="#"> <FontAwesomeIcon icon={faPhone} style={{ color:'var(--theme-color)'}}/> +243-991-022-241 </a>
          <a href="#"> <FontAwesomeIcon icon={faPhone} style={{ color:'var(--theme-color)'}}/> +243-998-181-080 </a>
          <a href="#"> <FontAwesomeIcon icon={faEnvelope} style={{ color:'var(--theme-color)'}}/> lubasaruben44@gmail.com </a>
          <a href="#"> <FontAwesomeIcon icon={faEnvelope} style={{ color:'var(--theme-color)'}}/> flavioumberto1@gmail.com </a>
          <a href="#">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color:'var(--theme-color)'}}/> Lubumbashi, RDC - +243
          </a>
        </div>

        <div className="box">
          <h3>Suivez-nous</h3>
          <a href="#">  Facebook </a>
          <a href="#">  Twitter </a>
          <a href="#"> Instagram </a>
          <a href="#"> LinkedIn </a>
        </div>
      </div>

      <div className="credit">
        créé par <span>Dev-Ru-flavio</span> | tous droits réservés
      </div>
    </section>
  );
}

export default Footer;
