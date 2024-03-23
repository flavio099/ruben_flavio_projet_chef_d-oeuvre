import React from 'react';
import './Book.css';
const Event = () => {
    return (
        <div className="containere">
            <div className="item-container">
                <div className="img-container">
                    <img  src="src/composants/Booking/imgbook/img_1.jpg" alt="Event image" />
                </div>

                <div className="body-container">
                    <div className="overlay"></div>

                    <div className="event-info">
                        <p className="title">MOISE MBIYE</p>
                        <div className="separator"></div>
                        <p className="info">Stade de Martyrs</p>
                        <p className="price">5000 FC</p>

                        <div className="additional-info">
                            <p className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                M896+V4Q, AV. De La Democratie, Kinshasa
                            </p>
                            <p className="info">
                                <i className="far fa-calendar-alt"></i>
                                Dimanche, 19 Mai 2024, Ouverture:10H
                            </p>

                            <p className="info description">
                                Le concert du peuple...<span>more...</span>
                            </p>
                        </div>
                    </div>
                    <button className="action">ACHETEZ SON BILLET</button>
                </div>
            </div>

            {/* Deuxième événement */}
            <div className="item-container">
                <div className="img-container">
                    <img src="src/composants/Booking/imgbook/img_2.jpg" alt="Event image" />
                </div>

                <div className="body-container">
                    <div className="overlay"></div>

                    <div className="event-info">
                        <p className="title">MIKE KALAMBAYI</p>
                        <div className="separator"></div>
                        <p className="info">Stade de Martyrs</p>
                        <p className="price">2500 FC</p>

                        <div className="additional-info">
                            <p className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                M896+V4Q, AV. De La Democratie, Kinshasa
                            </p>
                            <p className="info">
                                <i className="far fa-calendar-alt"></i>
                                Samedi, 27 Juillet 2024
                            </p>

                            <p className="info description">
                                EXPLO CELEBRATION...<span>more...</span>
                            </p>
                        </div>
                    </div>
                    <button className="action">ACHETEZ SON BILLET</button>
                </div>
            </div>

            {/* Troisième événement */}
            <div className="item-container">
                <div className="img-container">
                    <img src="src/composants/Booking/imgbook/img_3.jpg" alt="Event image" />
                </div>

                <div className="body-container">
                    <div className="overlay"></div>

                    <div className="event-info">
                        <p className="title">MOISE MBIYE</p>
                        <div className="separator"></div>
                        <p className="info">Stade Kibasa Maliba</p>
                        <p className="price">5000 FC</p>

                        <div className="additional-info">
                            <p className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                Lubumbashi
                            </p>
                            <p className="info">
                                <i className="far fa-calendar-alt"></i>
                                Samedi, 8 juin 2024
                            </p>

                            <p className="info description">
                                Le concert du peuple... <span>more...</span>
                            </p>
                        </div>
                    </div>
                    <button className="action">ACHETEZ SON BILLET</button>
                </div>
            </div>

            {/* Quatrième événement */}
            <div className="item-container">
                <div className="img-container">
                    <img src="src/composants/Booking/imgbook/img_4.jpg" alt="Event image" />
                </div>

                <div className="body-container">
                    <div className="overlay"></div>

                    <div className="event-info">
                        <p className="title">DRC MINING WEEK</p>
                        <div className="separator"></div>
                        <p className="info">Pullman Lubumbashi</p>
                        <p className="price">Free</p>

                        <div className="additional-info">
                            <p className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                Pullman Grand Karavia Hotel, Lubumbashi RDC
                            </p>
                            <p className="info">
                                <i className="far fa-calendar-alt"></i>
                                12-14 juin 2024
                            </p>

                            <p className="info description">
                                Showcase your mining expertise at the AHK pavillon... <span>more...</span>
                            </p>
                        </div>
                    </div>
                    <button className="action">ACHETEZ SON BILLET</button>
                </div>
            </div>
        </div>
    );
}

export default Event;
