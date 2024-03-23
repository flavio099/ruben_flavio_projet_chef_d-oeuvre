import React, { useState } from 'react'; // Import useState
import './inscrip_conex.css';

function Inscription_Connexion() {
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'masculin' // Default value
  });

  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Votre compte a été crée avec succès!');
      
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          gender: 'masculin' 
        });
      } else {
        console.error('votre inscription a échué');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className={`sign-${isSignUp ? 'up' : 'in'}-form`}>
            <h2 className="title">{isSignUp ? 'S\'inscrire' : 'Se connecter'}</h2>
            {isSignUp && (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Prénom" />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Nom " />
                </div>
              </>
            )}
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" />
            </div>
            {isSignUp && (
              <div className="input-field">
                <i className="fas fa-user"></i>
                <select  name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="masculin">Masculin</option>
                  <option value="feminin">Féminin</option>
                </select>
                
              </div>
            )}
            <input type="submit" value={isSignUp ? 'S\'inscrire' : 'Se connecter'} className="btn solid" />
            {!isSignUp && (
              <>
                <p className="social-text">Ou Inscrivez-vous sur les plateformes sociales</p>
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
              </>
            )}
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Nouveau ici?</h3>
            <p>Prêt à rejoindre notre communauté ? Inscrivez-vous dès maintenant pour profiter de tous les avantages exclusifs réservés à nos membres. Créez votre compte en quelques clics et plongez dans une expérience unique. Rejoignez-nous dès aujourd'hui et commencez à explorer un monde de possibilités !"</p>
            <button className="btn transparent" onClick={handleSignUpMode}>S'inscrire</button>
          </div>
          <img src="src/composants/inscription_connexion/imgInscrip_connex/vecteezy_isometric-style-illustration-of-login-to-website_6552114.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Un de nous?</h3>
            <p>Connectez-vous pour accéder à un monde d'opportunités et de fonctionnalités exclusives ! Rejoignez notre communauté en toute simplicité en vous connectant dès maintenant. Votre expérience personnalisée vous attend. Sign in pour commencer l'aventure !</p>
            <button className="btn transparent" onClick={handleSignInMode}>Se connecter</button>
          </div>
          <img src="" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Inscription_Connexion;
