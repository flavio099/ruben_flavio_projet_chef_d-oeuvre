import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './officiel.css'
library.add(fas);

function ServiceSection() {
    return (
        <section className="service" id="service">
            <h1 className="heading">Nos <span>services</span></h1>

            <div className="box-container">
                <div className="box">
                    
                    <FontAwesomeIcon icon={['fas','envelope']}  style={{ color:'var(--theme-color)'}} />
                    <h3>invitation numérique</h3>
                    <p>Oubliez les tracas des invitations papier !Avec Luhi-Events, passez au numérique et profitez d'une solution simple, rapide et économique . <br/>  <b>Passez à l'ère numérique dès aujourd'hui et profitez de tous les avantages des invitations Luhi-Events !</b> </p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={['fas', 'photo-video']} style={{ color:'var(--theme-color)'}}/>
                    <h3>photos & videos</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        suscipit.
                    </p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={['fas', 'music']} style={{ color:'var(--theme-color)'}} />
                    <h3>divertissement</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        suscipit.
                    </p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={['fas', 'car']} style={{ color:'var(--theme-color)'}}/>
                    <h3>location vehicles</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        suscipit.
                    </p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={['fas', 'ticketalt']}  style={{ color:'var(--theme-color)'}}/>
                    <h3>billetterie numérique</h3>
                    <p>
                        Dites adieu aux billets papier ! Passez à la billetterie numérique Lushi-Events et profitez d'une expérience fluide et sécurisée.
                        Achetez vos billets en ligne en quelques clics  où que vous soyez. <br />
                        <b> Lushi-Events : l'avenir de la billetterie est numérique !!</b>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
