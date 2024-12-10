import React from 'react';
import '../styles/OrderOnlineSection.css';
import DeliveryIcon from '../assets/delivery-icon.png';
import PizzaIcon from '../assets/5.png';
import PizzaImage from '../assets/pizza-icon.png'; // Add the pizza image for the hero section

const OrderOnlineSection = () => {
    return (
        <section id="order-online">
            {/* Pizza image positioned in the background */}
            <img src={PizzaImage} alt="Pizza" className="hero-image" />

            <div className="order-container">
                <div className="order-content">
                    <h2>BESTEL VIA THUISBEZORG Anywhere</h2>
                    <p>Experience Lightning-Fast Pizza Delivery Today!</p>

                    {/* Corrected anchor tag */}
                    <a
                        href="https://www.thuisbezorgd.nl/winkel/supermarkt-yenba/producten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="order-btn"
                    >
                        Order Now
                    </a>
                </div>

                <div className="feature-icons">
                    <div className="feature-item">
                        <img src={DeliveryIcon} alt="Fast Delivery" className="feature-icon" />
                        <h3>Fast Delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="feature-item">
                        <img src={PizzaIcon} alt="Fresh Pizza" className="feature-icon" />
                        <h3>Fresh Pizza</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderOnlineSection;
