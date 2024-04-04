import React, { useEffect } from 'react';
import Swiper from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Link } from 'react-router-dom';
function HomeSection() {
  
    useEffect(() => {
        
        const homeSwiper = new Swiper('.home-slider', {
            direction: 'horizontal', 
            loop: true, 
            slidesPerView:"8", 
            spaceBetween: 20, 
        });

        return () => {
            homeSwiper.destroy(true, true);
        };
    }, []); 

    return (
        <section className="home" id="home">
            <div className="content">
                <h3>Bienvenue sur Lushi-Events, la plateforme N°1 qui simplifie l'organisation et l'accès aux événements  en RDC ! </h3>
                <Link to="/ServiceClient"><button className="btn-home" >obtenir un devis</button></Link>    
            </div>

            <div className="swiper-container home-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/Screenshot_20240209-202837.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17090632329086986.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17091215504602866.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/Screenshot_20240209-202837.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17090632329086986.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17091230183226957.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17091230387418972.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src="src/composants/officielaccueil/img/FB_IMG_17091230096214025.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
