import React, { useState } from 'react';
import '../styles/TestimonialsSection.css';
import review1 from '../assets/review-1.jpg';
import review2 from '../assets/review-2.jpg';
import review3 from '../assets/review3.jpg';
import review4 from '../assets/review4.jpg';
import review5 from '../assets/review5.jpg';

const TestimonialsSection = () => {
    const reviews = [
        {
            id: 1,
            img: review1,
            text: "“Het ontbijt was heerlijk!”",
            name: "John Doe",
            profession: "Chef",
            stars: 5,
        },
        {
            id: 2,
            img: review2,
            text: "“De service was uitstekend!”",
            name: "Jane Smith",
            profession: "Manager",
            stars: 4,
        },
        {
            id: 3,
            img: review3,
            text: "“Fantastische kwaliteit en smaak!”",
            name: "Emily Clark",
            profession: "Food Blogger",
            stars: 5,
        },
        {
            id: 4,
            img: review4,
            text: "“Snelle levering en vers eten!”",
            name: "Anna Johnson",
            profession: "Customer",
            stars: 4,
        },
        {
            id: 5,
            img: review5,
            text: "“Zeer aan te bevelen voor catering!”",
            name: "Michael Brown",
            profession: "Event Organizer",
            stars: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const renderStars = (count) => {
        return Array(count)
            .fill()
            .map((_, i) => (
                <span key={i} className="star">
                    &#9733;
                </span>
            ));
    };

    return (
        <section className="testimonial-section" id="testimonial">
            <div className="container">
                <h2 className="title">Recensies</h2>
                <div className="carousel">
                    <button className="carousel-control-prev" onClick={handlePrev} aria-label="Previous Review">
                        &#10094;
                    </button>
                    <div className="carousel-inner">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                            >
                                <div className="carousel-caption">
                                    <img src={review.img} alt={`Review by ${review.name}`} />
                                    <p>{review.text}</p>
                                    <h5>{review.name}</h5>
                                    <small>{review.profession}</small>
                                    <div className="stars">{renderStars(review.stars)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-next" onClick={handleNext} aria-label="Next Review">
                        &#10095;
                    </button>
                </div>
                <div className="carousel-indicators">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
