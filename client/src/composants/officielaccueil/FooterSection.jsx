import React from 'react';
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
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Accueil </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Service </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> À propos </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Galerie </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Prix </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Avis </a>
          <a href="#"> <FontAwesomeIcon icon={faArrowRight} style={{ color:'var(--theme-color)'}}/> Contact </a>
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
          {/* <a href="#"> <FontAwesomeIcon icon={faFacebookF} /> Facebook </a>
          <a href="#"> <FontAwesomeIcon icon={faTwitter} /> Twitter </a>
          <a href="#"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a>
          <a href="#"> <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn </a> */}
        </div>
      </div>

      <div className="credit">
        créé par <span>Dev-Ru-flavio</span> | tous droits réservés
      </div>
    </section>
  );
}

export default Footer;
