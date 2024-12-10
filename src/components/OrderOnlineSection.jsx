import React from 'react';
import '../styles/OrderOnlineSection.css';
import OrderImage from '../assets/Order.jpg'; // Import the image

const OrderOnlineSection = () => {
    return (
        <section id="order-online">
            <div className="order-container">
                <div className="order-content">
                    <h2>Bestel Online</h2>
                    <p>
                        Geniet van onze heerlijke gerechten. Bestel nu online en ontvang je bestelling snel thuis!
                    </p>
                    <a
                        href="https://www.thuisbezorgd.nl/winkel/supermarkt-yenba/producten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="order-btn"
                    >
                        Bestel Nu
                    </a>
                </div>
                <div id="simit-image-container">
                    {/* Replace the 3D model with an image */}
                    <img
                        src={OrderImage}
                        alt="Heerlijk gerecht"
                        className="order-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default OrderOnlineSection;
