import React from 'react';

function ReviewSection() {
    return (
        <section className="review" id="review">
            <h1 className="heading">avis <span> des clients</span></h1>

            <div className="review-slider swiper-container">
                <div className="review-testimony">
                    <div className="swiper-slide_box">
                        <i className="fas fa-quote-right"></i>
                        <div className="user">
                           <div className='container-testimony-image'> <img className="testimony-user-image" src="src/composants/officielaccueil/img/Screenshot_20240209-202837.jpg" alt="jkjkkj" /></div>                          
                             <div className="user-info">
                                <h3>ruben lubasa</h3>
                                <span>client satisfait</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
                            corrupti, ipsam iure nisi unde et assumenda perspiciatis
                            voluptatibus nihil.
                        </p>
                    </div>

                    <div className="swiper-slide_box">
                        <i className="fas fa-quote-right"></i>
                        <div className="user">
                           <div className='container-testimony-image'> <img className="testimony-user-image" src="src/composants/officielaccueil/img/Screenshot_20240209-202837.jpg" alt="" /></div> 
                            <div className="user-info">
                                <h3>ben busha</h3>
                                <span>client satisfait</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
                            corrupti, ipsam iure nisi unde et assumenda perspiciatis
                            voluptatibus nihil.
                        </p>
                    </div>

                    <div className="swiper-slide_box">
                        <i className="fas fa-quote-right"></i>
                        <div className="user">
                        <div className='container-testimony-image'> <img className="testimony-user-image" src="src/composants/officielaccueil/img/Screenshot_20240209-202837.jpg" alt="" /></div> 
                            <div className="user-info">
                                <h3>umberto</h3>
                                <span>client satisfait</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
                            corrupti, ipsam iure nisi unde et assumenda perspiciatis
                            voluptatibus nihil.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
