import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }

        fetch('http://localhost:8000/connexion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setSuccessMessage('Connexion réussie , vous serez redirigé vers la page d\accueil dans 5 secondes ');
          
            setTimeout(() => {
                setSuccessMessage('');
                navigate("/AccueilLushiEvent");
            }, 5000)
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setErrorMessage('Erreur lors de la connexion: ' + error.message);
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        });
    }

    return (
        <div className='container-inscription'>
            <div className='container-form'>
                <h1>Se connecter</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <form onSubmit={handleLogin} className='inscription-form'>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faEnvelope} className="icon_form" style={{ color:'var(--theme-color)'}}/>
                        <input type="email" placeholder="Adresse Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faLock} className="icon_form" style={{ color:'var(--theme-color)'}}/>
                        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-transparent">Se connecter</button>
                </form>
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
                    <p>Prêt à rejoindre notre communauté ? Inscrivez-vous dès maintenant pour profiter de tous les avantages exclusifs réservés à nos membres. Créez votre compte en quelques clics et plongez dans une expérience unique. Rejoignez-nous dès aujourd'hui et commencez à explorer un monde de possibilités !</p>
                    <Link to="/"> <button className="btn-transparent"  id="sign-up-btn">S'inscrire</button></Link> 
                </div>
                <div className='inscription-container-img'>
                    <img className='inscription-container-img-img' src="src/composants/inscription_connexion/imgInscrip_connex/vecteezy_isometric-style-illustration-of-login-to-website_6552114.svg"  alt="imageInscription" />
                </div>
            </div>
        </div>
    );
}

export default Connexion;
