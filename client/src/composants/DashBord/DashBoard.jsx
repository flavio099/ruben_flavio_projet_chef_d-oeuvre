import React, { useState } from 'react';
import './DashBoard.css';

function DashBoard() {
    const [file, setFile] = useState(null);
    const [promoteur, setPromoteur] = useState('');
    const [lieu, setLieu] = useState('');
    const [prix, setPrix] = useState('');
    const [adresse, setAdresse] = useState('');
    const [date, setDate] = useState('');
    const [heure, setHeure] = useState('');
    const [titreEvent, setTitreEvent] = useState('');
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('promoName', promoteur);
        formData.append('lieu', lieu);
        formData.append('prix', prix);
        formData.append('adresse', adresse);
        formData.append('date', date);
        formData.append('heure', heure); // Ajout du champ heure
        formData.append('nomEvent', titreEvent);

        fetch('http://localhost:8000/postEvents', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer token', // Ajoutez votre jeton d'authentification ici si nécessaire
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP, statut ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Événement créé avec succès:', data);
            // Réinitialisez les champs du formulaire après la soumission réussie si nécessaire
            setFile(null);
            setPromoteur('');
            setLieu('');
            setPrix('');
            setAdresse('');
            setDate('');
            setHeure('');
            setTitreEvent('');
            setError(null);
        })
        .catch(error => {
            console.log(error);
            // console.error('Erreur lors de la création de l\'événement:', error.message);
            // setError('Une erreur s\'est produite lors de la création de l\'événement.');
        });
    };

    return (
        <div className="DashBoard">
            <p>DashBoard LushiEvent</p>
            {error && <p className="error">{error}</p>}
            <form className="form-field-dash" onSubmit={handleSubmit} encType="multipart/form-data">
                <input className="input-field-dash" type='file' onChange={handleFileChange} accept="image/*" required />
                <input className="input-field-dash" type="text" value={promoteur} onChange={(e) => setPromoteur(e.target.value)} placeholder="Nom du promoteur" required />
                <input className="input-field-dash" type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} placeholder="Lieu" required />
                <input className="input-field-dash" type="text" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="Prix de billet" required />
                <input className="input-field-dash" type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" required />
                <input className="input-field-dash" type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required />
                <input className="input-field-dash" type="text" value={heure} onChange={(e) => setHeure(e.target.value)} placeholder="Heure" required /> {/* Champ heure */}
                <input className="input-field-dash" type="text" value={titreEvent} onChange={(e) => setTitreEvent(e.target.value)} placeholder="Titre de l'événement" required />
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default DashBoard;
