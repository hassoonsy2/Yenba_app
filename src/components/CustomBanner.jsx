import React from 'react';
import '../styles/CustomBanner.css';
import mealImage1 from '../assets/1.jpg'; // Import meal image
import mealImage2 from '../assets/2.jpg'; // Import additional image
import mealImage3 from '../assets/3.jpg'; // Import third image
import menu from '../assets/Yenba  (2) (1).pdf'

const CustomBanner = () => {
    return (
        <section className="custom-banner" id="home">
            <div className="banner-content">
                {/* Left Section: Text */}
                <div className="text-section">
                    <h1>Ontdek Authentieke Smaken bij Yenba Gemak</h1>
                    <p>
                        Geniet van vers bereide gerechten die jouw smaakpapillen
                        verwennen. Van traditionele gerechten tot moderne favorieten –
                        altijd met zorg en kwaliteit bereid.
                    </p>
                    <div className="button-group">
                        <a
                            href={menu} // Link to the PDF file
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practices
                            className="primary-button"
                        >
                            Bekijk Menu
                        </a>
                    </div>
                    <div className="stats">
                        <img
                            src={mealImage1}
                            alt="Happy customers"
                            className="customer-icons"
                        />
                        <span>Meer dan 250.000 klanten bediend</span>
                    </div>
                </div>

                {/* Right Section: Images */}
                <div className="image-section">
                    <div className="meal-grid">
                        <img src={mealImage1} alt="Meal 1" className="meal-image large" />
                        <div className="small-images">
                            <img src={mealImage2} alt="Meal 2" className="meal-image small" />
                            <img src={mealImage3} alt="Meal 3" className="meal-image small" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomBanner;
