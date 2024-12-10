import React, { useState } from 'react';
import '../styles/Navigation.css';
import logo from '../assets/logo.jpg'; // Corrected image path


const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#home">
                    <img src={logo} alt="Yenba Gemak Logo" />
                </a>
                <button
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isActive}
                    onClick={toggleMenu}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a className="navbar-item" href="#home">Home</a>
                    <a className="navbar-item" href="#menu">Onze Gerechten</a>
                    <a className="navbar-item" href="#testimonials">Recensies</a>
                    <a className="navbar-item" href="#faq">FAQ</a>
                    <a className="navbar-item" href="#contact">Contact</a>
                    <a href="tel:0685604755" className="button is-primary">
                        <span className="icon">
                            <i className="fas fa-phone"></i>
                        </span>
                        <span>0685604755</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;