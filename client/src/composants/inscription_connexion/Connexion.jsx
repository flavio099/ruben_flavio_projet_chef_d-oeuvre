import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Connexion(){
    return(
     <div className='container-inscription'>
        <div className='container-form'>
          <h1>Se connecter</h1>
        <form action="" className='inscription-form'>
         
             <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon_form" />
                <input type="email"  placeholder="Adresse Email" />
             </div>
             <div className="input-field">
                <FontAwesomeIcon icon={faLock}  className="icon_form"/>
                <input type="password" placeholder="Mot de passe" />
             </div>

          
          </form>
          <button className="btn transparent">Se connecter</button>
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
                <h3>Nouveau ici?</h3>
                <p>Prêt à rejoindre notre communauté ? Inscrivez-vous dès maintenant pour profiter de tous les avantages exclusifs réservés à nos membres. Créez votre compte en quelques clics et plongez dans une expérience unique. Rejoignez-nous dès aujourd'hui et commencez à explorer un monde de possibilités !"</p>
                <button class="btn transparent" id="sign-up-btn">S'inscrire</button>
          </div>
          <div className='inscription-container-img'> <img className='inscription-container-img-img' src="src/composants/inscription_connexion/imgInscrip_connex/vecteezy_isometric-style-illustration-of-login-to-website_6552114.svg"  alt="imageInscrption" /></div>
      </div>
    </div>
    )
}

export default  Connexion