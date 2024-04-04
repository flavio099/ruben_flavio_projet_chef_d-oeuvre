import React from 'react';
import './Paiement.css'; 

const Paiement = () => {
  const handlePaymentMethodClick = (methodId) => {
   
    console.log('Clicked payment method:', methodId);
  };

  return (
    <div className="container">
      <div className="left">
        <p>Méthodes de paiement</p>
        <hr />
        <div className="methods">
          <div
            id="tColorA"
            style={{ color: 'greenyellow' }}
            onClick={() => handlePaymentMethodClick('card')}
          >
            <i className="fa-solid fa-credit-card" style={{ color: 'greenyellow' }}></i>
            Payement par carte
          </div>
          <div id="tColorB" onClick={() => handlePaymentMethodClick('mobileMoney')}>
            <i className="fa-solid fa-building-columns"></i> Mobile Money
          </div>
          <div id="tColorC" onClick={() => handlePaymentMethodClick('applePayGooglePay')}>
            <i className="fa-solid fa-wallet"></i> Apple/Google pay
          </div>
        </div>
        <hr />
      </div>
      <div className="center">
        <a href="https://www.shift4shop.com/credit-card-logos.html">
          <img
            alt="Credit Card Logos"
            title="Credit Card Logos"
            src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png"
            width="250"
            height="auto"
          />
        </a>
        <hr />
        <div className="card-details">
          <form>
            <p>Numero de Carte</p>
            <div className="c-number" id="c-number">
              <input
                id="number"
                className="cc-number"
                placeholder="numero de carte"
                maxLength="19"
                required
              />
              <i className="fa-solid fa-credit-card" style={{ margin: 0 }}></i>
            </div>
            <div className="c-details">
              <div>
                <p>Date d'expiration</p>
                <input id="e-date" className="cc-exp" placeholder="MM/YY" required maxLength="5" />
              </div>
              <div>
                <p>CVV</p>
                <div className="cvv-box" id="cvv-box">
                  <input id="cvv" className="cc-cvv" placeholder="CVV" required maxLength="3" />
                  <i className="fa-solid fa-circle-question" title="3 digits on the back of the card" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>
            </div>
            <div className="email">
              <p>Email</p>
              <input type="email" placeholder="exemple@email.com" id="email" required />
            </div>
            <button>PAYER MAINTENANT</button>
          </form>
        </div>
      </div>
      <div className="right">
        <p>Plus d'information</p>
        <hr />
        <div className="details">
          <div style={{ fontWeight: 'bold', padding: '3px 0' }}>Plus de description</div>
          <div style={{ padding: '3px 0' }}>Teste de payement</div>
        </div>
        <hr />
        <a href="https://www.shift4shop.com/credit-card-logos.html">
          <img
            alt="Credit Card Logos"
            title="Credit Card Logos"
            src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png"
            width="100%"
            height="auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Paiement;
