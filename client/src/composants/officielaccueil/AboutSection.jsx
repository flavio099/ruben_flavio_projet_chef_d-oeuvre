import React from 'react';
import PriceSection from './PriceSection';
function AboutSection() {
    return (
        <>
        <section className="about" id="about">
            <h1 className="heading"><span>À propos</span> de nous</h1>

            <div className="row">
                <div className="image">
                    <img src="src/composants/officielaccueil/img/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7 (1).jpg" alt="" />
                </div>

                <div className="content">
                    <h3>votre occasion mérite notre planification minutieuse</h3>
                    <p>"Plongez dans un univers où chaque moment devient une expérience inoubliable. Notre site événementiel est le théâtre de vos rêves les plus fous, où la magie opère à chaque instant. Que ce soit pour célébrer un mariage féérique, organiser un gala prestigieux ou mettre en lumière un événement d'entreprise mémorable, nous sommes là pour donner vie à vos idées les plus audacieuses.</p>
                    <p> Laissez-vous emporter par notre expertise, notre créativité sans limites et notre souci du détail, pour des événements qui marqueront les esprits et resteront gravés dans les mémoires. Bienvenue dans l'univers de l'événementiel d'exception, où chaque occasion devient une véritable œuvre d'art.</p>
                    <a href="#" className="btn-home">Rejoins-nous</a>
                </div>
            </div>
        </section>
      <PriceSection></PriceSection>
        </>
       
    );
}

export default AboutSection;
