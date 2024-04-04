import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Inscription = () => {
   
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        genre: 'masculin'
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/inscription', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                setSuccessMessage(formData.prenom + " - " + formData.nom + " votre compte a été créé avec succès, vous serez redirigé vers la page de connexion dans 5 secondes");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate("/Connexion");
                }, 5000);
        
                setFormData({
                    nom: '',
                    prenom: '',
                    email: '',
                    password: '', 
                    genre: 'masculin'
                });
                
            } else {
                return response.json().then(data => {
                    setErrorMessage(formData.prenom + " - " + formData.nom + " une erreur a été rencontrée lors de votre inscription");
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 3000);
                });
            }
        })
        .catch(error => {
            console.error("Erreur lors de la requête:", error);
            setErrorMessage(formData.prenom + " - " + formData.nom + " une erreur inattendue s'est produite lors de votre inscription.");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        });
        
    }
     
    return (
        <div className='container-inscription'>
            <div className='container-form'>
                <h1>S'inscrire</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <form onSubmit={handleSubmit} className='inscription-form'>
                <div className="input-field">
                        <FontAwesomeIcon className="icon_form" icon={faUser}  style={{ color:'var(--theme-color)'}}/>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
                    </div> 
                    <div className="input-field">
                        <FontAwesomeIcon className="icon_form" icon={faUser} style={{ color:'var(--theme-color)'}}/>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
                    </div>
                   
                    <div className="input-field">
                        <FontAwesomeIcon icon={faEnvelope} className="icon_form"  style={{ color:'var(--theme-color)'}}/>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse Email" required />
                    </div>
                    <div className="input-field">
                        <FontAwesomeIcon icon={faLock}  className="icon_form" style={{ color:'var(--theme-color)'}}/>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" required />
                    </div>
                    <div className="input-field-gender">
                        <div className="input-field-gender-icon">
                            <FontAwesomeIcon  className="icon_form" icon={faVenusMars} style={{ color:'var(--theme-color)'}}/>
                        </div>
                        <select name="genre" className="input-field-select" value={formData.genre} onChange={handleChange}>
                            <option value="masculin">Masculin</option>
                            <option value="feminin">Féminin</option>
                        </select>
                    </div>
                   
                 <button type="submit" className="btn-transparent" >S'inscrire</button> 
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
                    <h3>Un de nous?</h3>
                    <p>Connectez-vous pour accéder à un monde d'opportunités et de fonctionnalités exclusives ! Rejoignez notre communauté en toute simplicité en vous connectant dès maintenant. Votre expérience personnalisée vous attend. Sign in pour commencer l'aventure !</p>
                   <Link to="/Connexion"> <button className="btn-transparent" id="sign-in-btn">Se connecter</button></Link> 
                </div>
                <div className='inscription-container-img'>
                    <img className='inscription-container-img-img' src="src/composants/inscription_connexion/imgInscrip_connex/Social media-cuate.svg" alt="imageInscription" />
                </div>
            </div>
         
        </div>
    );
}

export default Inscription 
