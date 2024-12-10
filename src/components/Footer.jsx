import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="branding-text">
                    Gemaakt door <span>Bright-Byte Marketing B.V.</span> <br />
                    &copy; 2024 | Alle rechten voorbehouden.
                </p>
                <div className="footer-links">
                    <ul>
                        <li><a href="#privacy">Privacybeleid</a></li>
                        <li><a href="#terms">Algemene Voorwaarden</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
