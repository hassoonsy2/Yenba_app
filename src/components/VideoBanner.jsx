import React from 'react';
import videoGif from '/yenba-gemak/public/assets/video.gif'; // Import the GIF file
import '../styles/VideoBanner.css';

const VideoBanner = () => {
    return (
        <section className="top-banner" id="home">
            <div className="overlay"></div>
            <div className="content">
                <img src={videoGif} alt="Video Animation" className="video-banner-gif" />
                <h1>Heerlijke en Gezonde Recepten Voor Iedereen</h1>
                <p>
                    Geniet van heerlijke gerechten, zorgvuldig bereid met verse
                    ingrediënten en passie.
                </p>
                <a
                    href="https://www.thuisbezorgd.nl/winkel/supermarkt-yenba"
                    className="button is-primary is-large"
                >
                    Bestel Nu
                </a>
            </div>
        </section>
    );
};

export default VideoBanner;
