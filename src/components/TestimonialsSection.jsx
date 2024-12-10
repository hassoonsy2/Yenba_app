import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000); // Automatically slides every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [reviews.length]);

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
                    <div
                        className="carousel-inner"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            width: `${reviews.length * 100}%`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="carousel-item"
                                style={{ width: `${100 / reviews.length}%` }}
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
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
