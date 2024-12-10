import React from 'react';
import '../styles/ContactSection.css';
import { FaPhone, FaMapMarkerAlt, FaRegClock, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function ContactSection() {
    return (
        <section id="contact">
            <div className="contact-section">
                <div className="container">
                    <h2 className="section-title">Neem Contact Met Ons Op</h2>
                    <p className="section-subtitle">We horen graag van je! Neem contact met ons op via de onderstaande opties.</p>

                    <div className="contact-info">
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <h3>Telefoon</h3>
                                    <p>0685604755</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <h3>Adres</h3>
                                    <p>Elandsgracht 128a, 1016 VB Amsterdam</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaRegClock className="contact-icon" />
                                <div>
                                    <h3>Openingstijden</h3>
                                    <ul className="opening-hours">
                                        <li>Ma - Zo: 08:00 - 22:00</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="social-media">
                                <h3>Volg Ons</h3>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/share/159qREpLA1/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://www.instagram.com/invites/contact/?igsh=1gg77lwpgbjaa&utm_content=wdi8mxh " target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.tiktok.com/@yenba_supermarkt?_t=8ra1Jb9VK6b&_r=1" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-map">
                            <h3>Onze Locatie</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2437.559299576892!2d4.8762691!3d52.369257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609510033eb85%3A0xd623d7097c5a45b1!2sYenba%20Gemak!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Yenba Gemak Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
