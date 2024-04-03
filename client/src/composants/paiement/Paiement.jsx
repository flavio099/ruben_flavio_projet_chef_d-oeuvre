// Paiement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Paiement.css'; // Assurez-vous d'avoir votre fichier CSS dans le même répertoire

const Paiement = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleCardNumberChange = (e) => {
    let num = e.target.value;
    num = num.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(num);
  };

  const handleExpiryDateChange = (e) => {
    let date = e.target.value;
    if (date.length === 2 && expiryDate.length === 1) {
      date += '/';
    }
    setExpiryDate(date);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="container">
      <div className="center">
        <a href="https://www.shift4shop.com/credit-card-logos.html"><img alt="Credit Card Logos" title="Credit Card Logos" src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png" width="250" height="auto" /></a>
        <hr style={{ border: '1px solid #ccc', margin: '0 15px' }} />
        <div className="card-details">
          <form>
            <p>Numero de Carte</p>
            <div className="c-number" id="c-number">
              <input id="number" className="cc-number" placeholder="numero de carte" value={cardNumber} onChange={handleCardNumberChange} maxLength="19" required />
              <i className="fa-solid fa-credit-card" style={{ margin: 0 }}></i>
            </div>
            <div className="c-details">
              <div>
                <p>Date d'expiration</p>
                <input id="e-date" className="cc-exp" placeholder="MM/YY" value={expiryDate} onChange={handleExpiryDateChange} maxLength="5" required />
              </div>
              <div>
                <p>CVV</p>
                <div className="cvv-box" id="cvv-box">
                  <input id="cvv" className="cc-cvv" placeholder="CVV" value={cvv} onChange={handleCvvChange} maxLength="3" required />
                  <i className="fa-solid fa-circle-question" title="3 digits on the back of the card" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>
            </div>
            <div className="email">
              <p>Email</p>
              <input type="email" placeholder="exemple@email.com" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <button>PAYER MAINTENANT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
