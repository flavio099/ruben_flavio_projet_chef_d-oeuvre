import React, { useEffect } from 'react';

const ConnexionForm = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
    });

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      sign_up_btn.removeEventListener('click', () => {
        container.classList.add("sign-up-mode");
      });
      sign_in_btn.removeEventListener('click', () => {
        container.classList.remove("sign-up-mode");
      });
    };
  }, []); // Le tableau vide [] en tant que deuxième argument signifie que useEffect s'exécutera une seule fois après le premier rendu.

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {/* Form for Sign In */}
          <form action="" className="sign-in-form">
            <h2 className="title">Se connecter</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nom utilisateur" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="mot de passe" />
            </div>
            <input type="submit" value="se connecter" className="btn solid" />

            <p className="social-text">Ou Inscrivez-vous sur les plateformes sociales</p>
            {/* Social Media Icons */}
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
          </form>

          {/* Form for Sign Up */}
          <form action="" className="sign-up-form">
            <h2 className="title">S'inscrire</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nom utilisateur" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Mot de passe" />
            </div>
            <input type="submit" value="S'inscrire" className="btn solid" />

            <p className="social-text">Ou Inscrivez-vous sur les plateformes sociales</p>
            {/* Social Media Icons */}
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
          </form>
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>Nouveau ici?</h3>
            <p>Prêt à rejoindre notre communauté ? Inscrivez-vous dès maintenant pour profiter de tous les avantages exclusifs réservés à nos membres. Créez votre compte en quelques clics et plongez dans une expérience unique. Rejoignez-nous dès aujourd'hui et commencez à explorer un monde de possibilités !</p>
            <button className="btn transparent" id="sign-up-btn">S'inscrire</button>
          </div>
          <img src="img/vecteezy_isometric-style-illustration-of-login-to-website_6552114.svg" className="image" alt="" />
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>Un de nous?</h3>
            <p>Connectez-vous pour accéder à un monde d'opportunités et de fonctionnalités exclusives ! Rejoignez notre communauté en toute simplicité en vous connectant dès maintenant. Votre expérience personnalisée vous attend. Sign in pour commencer l'aventure !</p>
            <button className="btn transparent" id="sign-in-btn">Se connecter</button>
          </div>
          <img src="img/Social media-cuate.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ConnexionForm;
