import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos && currentScrollPos > 70) {
                setIsHidden(true); // Hide navbar on scroll down
            } else {
                setIsHidden(false); // Show navbar on scroll up
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav
            className={`navbar ${isHidden ? 'hidden' : ''} ${
                isActive ? 'is-expanded' : ''
            }`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="#home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 100"
                        className="yenba-logo"
                    >
                        <text
                            x="0"
                            y="75"
                            fill="#EF233C"
                            fontFamily="Poppins, sans-serif"
                            fontSize="70"
                            fontWeight="bold"
                        >
                            yenba
                        </text>
                    </svg>
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
            <div
                id="navbarMenu"
                className={`navbar-menu ${isActive ? 'is-active' : ''}`}
            >
                <div className="navbar-end">
                    <a className="navbar-item" href="#home">
                        Home
                    </a>
                    <a className="navbar-item" href="#menu">
                        Onze Gerechten
                    </a>
                    <a className="navbar-item" href="#testimonials">
                        Recensies
                    </a>
                    <a className="navbar-item" href="#faq">
                        FAQ
                    </a>
                    <a className="navbar-item" href="#contact">
                        Contact
                    </a>
                    <a href="tel:0685604755" className="button call-now-button">
                        Bel nu
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
