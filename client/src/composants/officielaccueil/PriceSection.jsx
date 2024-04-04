import { Link } from 'react-router-dom';

function PriceSection() {
    return (
        <section className="price" id="price">
            <h1 className="heading">nos <span>prix</span></h1>

            <div className="box-container">
                <div className="box">
                    <h3 className="title">basic</h3>
                    <h3 className="amount">$879.00</h3>
                    <ul>
                        <li><i className="fas fa-check"></i>services complets</li>
                        <li><i className="fas fa-check"></i> decorations</li>
                        <li><i className="fas fa-check"></i> music & photos</li>
                        <li><i className="fas fa-check"></i> Nourriture et boissons</li>
                        <li><i className="fas fa-check"></i> invitation numerique</li>
                    </ul>
                    <Link to="/ServiceClient"> <a href="#" className="btn-home">vérifier</a></Link>  
                </div>

                <div className="box">
                    <h3 className="title">premium</h3>
                    <h3 className="amount">$799.00</h3>
                    <ul>
                        <li><i className="fas fa-check"></i>services complets</li>
                        <li><i className="fas fa-check"></i> decorations</li>
                        <li><i className="fas fa-check"></i> music & photos</li>
                        <li><i className="fas fa-check"></i> Nourriture et boissons</li>
                        <li><i className="fas fa-check"></i> invitation numerique</li>
                    </ul>
                   <Link to="/ServiceClient"> <a href="#" className="btn-home">vérifier</a></Link>   
                </div>

                <div className="box">
                    <h3 className="title">gold</h3>
                    <h3 className="amount">$379.00</h3>
                    <ul>
                        <li><i className="fas fa-check"></i>services complets</li>
                        <li><i className="fas fa-check"></i> decorations</li>
                        <li><i className="fas fa-check"></i> music & photos</li>
                        <li><i className="fas fa-check"></i> Nourriture et boissons</li>
                        <li><i className="fas fa-check"></i> invitation numerique</li>
                    </ul>
                    <Link to="/ServiceClient"> <a href="#" className="btn-home">vérifier</a></Link>  
                </div>

                <div className="box">
                    <h3 className="title">ultra</h3>
                    <h3 className="amount">$920.00</h3>
                    <ul>
                        <li><i className="fas fa-check"></i>services complets</li>
                        <li><i className="fas fa-check"></i> decorations</li>
                        <li><i className="fas fa-check"></i> music & photos</li>
                        <li><i className="fas fa-check"></i> Nourriture et boissons</li>
                        <li><i className="fas fa-check"></i> invitation numerique</li>
                    </ul>
                    <Link to="/ServiceClient"> <a href="#" className="btn-home">vérifier</a></Link>  
                </div>
            </div>
        </section>
    );
}

export default PriceSection;
