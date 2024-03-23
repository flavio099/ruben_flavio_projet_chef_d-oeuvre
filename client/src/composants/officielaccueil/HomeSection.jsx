import React, { useEffect } from 'react';
import Swiper from 'swiper'; // Importer Swiper
import 'swiper/swiper-bundle.css'; // Importer le fichier CSS Swiper

function HomeSection() {
    useEffect(() => {
        // Initialisation de Swiper dans useEffect pour garantir que cela se produit après le rendu du composant
        const homeSwiper = new Swiper('.home-slider', {
            direction: 'horizontal', // Définir la direction sur horizontal
            loop: true, // Activer la lecture en boucle
            slidesPerView:"8", // Nombre de slides visibles
            spaceBetween: 20, // Espace entre les slides
            // Ajoutez d'autres options de configuration selon vos besoins
        });

        // Nettoyage lors du démontage du composant pour éviter les fuites de mémoire
        return () => {
            homeSwiper.destroy(true, true);
        };
    }, []); // Utilisation d'un tableau vide pour s'assurer que useEffect s'exécute une seule fois après le montage initial

    return (
        <section className="home" id="home">
            <div className="content">
                <h3>Bienvenue sur Lushi-Events, la plateforme N°1 qui simplifie l'organisation et l'accès aux événements  en RDC ! </h3>
                <a href="#" className="btn">obtenir un devis</a>
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
