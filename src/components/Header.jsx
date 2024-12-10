import React from 'react';
import '../styles/Header.css';
import logo from '../assets/lgog_withbackground .jpg'; // Ensure you have a logo image in the assets folder

const Header = () => {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#home">
                        <img src={logo} alt="Yenba Gemak Logo" />
                    </a>
                    <button
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasic"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-end">
                        <a href="#home" className="navbar-item">
                            Home
                        </a>
                        <a href="#menu" className="navbar-item">
                            Menu
                        </a>
                        <a href="#order-online" className="navbar-item">
                            Order Online
                        </a>
                        <a href="#testimonials" className="navbar-item">
                            Testimonials
                        </a>
                        <a href="#faq" className="navbar-item">
                            FAQ
                        </a>
                        <a href="#contact" className="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
