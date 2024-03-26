import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Inscription(){
    return(
     <div className='container-inscription'>
        <div className='container-form'>
        <h1>S'inscrire</h1>
        <form action="" className='inscription-form'>
          <div className="input-field">
                <FontAwesomeIcon  className="icon_form" icon={faUser} />
                  <input type="text"  placeholder="Prénom" />
             </div>
             <div className="input-field">
                <FontAwesomeIcon  className="icon_form" icon={faUser} />
                  <input type="text"  placeholder="Nom " />
             </div> 
             <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon_form" />
                <input type="email"  placeholder="Adresse Email" />
             </div>
             <div className="input-field">
                <FontAwesomeIcon icon={faLock}  className="icon_form"/>
                <input type="password" placeholder="Mot de passe" />
             </div>

             <div className="input-field">
                <i className="fas fa-user"></i>
                <select name="genre" >
                  <option value="masculin">Masculin</option>
                  <option value="feminin">Féminin</option>
                </select>
              </div>
          </form>
          <button className="btn transparent">S'inscrire</button>
              <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
        </div>
     
       
     <div className="inscription-img">
          <div className="inscription-img-text">
                <h3>Un de nous?</h3>
                <p>Connectez-vous pour accéder à un monde d'opportunités et de fonctionnalités exclusives ! Rejoignez notre communauté en toute simplicité en vous connectant dès maintenant. Votre expérience personnalisée vous attend. Sign in pour commencer l'aventure !</p>
                <button class="btn transparent" id="sign-in-btn">Se connecter</button>
          </div>
          <div className='inscription-container-img'> <img className='inscription-container-img-img' src="src/composants/inscription_connexion/imgInscrip_connex/Social media-cuate.svg"  alt="imageInscrption" /></div>
      </div>
    </div>
    )
}

export default  Inscription