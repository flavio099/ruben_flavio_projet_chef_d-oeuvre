import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Events = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/allEvents', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer token',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP, statut ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    return (
        <div className="containere">
            {data.map((item, index) => (
                <div className="item-container" key={index}>
                    <div className="img-container">
                        <img src={item.image} alt="image Event" />
                    </div>
                    <div className="body-container">
                        <div className="overlay"></div>
                        <div className="event-info">
                            <p className="title">{item.nomEvent} </p>
                            <div className="separator"></div>
                            <p className="info">{item.lieu} </p>
                            <p className="price">{item.prix}</p>
                            <div className="additional-info">
                                <p className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {item.adresse}
                                </p>
                                <p className="info">
                                    <i className="far fa-calendar-alt"></i>
                                    {item.date}, Ouverture:{item.heure}
                                </p>
                                <p className="info description">
                                    {item.promoName}...<span>more...</span>
                                </p>
                            </div>
                        </div>
                       
                        <Link to="/Paiement"><button className="action">ACHETEZ SON BILLET</button> </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Events;
