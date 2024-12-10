import React, {useState} from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
    const faqs = [
        { question: 'Is alles 100% halal?', answer: 'Ja, al onze producten zijn halal.' },
        { question: 'Bezorgt u via Thuisbezorgd?', answer: 'Ja, we bezorgen via Thuisbezorgd.' },
        // Add more FAQs as needed
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section id="faq">
            <h2 className="faq-title">Veelgestelde Vragen</h2>
            <p className="faq-subtitle">Antwoorden op je meest gestelde vragen.</p>
            <div className="faq-cards">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleToggle(index)}
                    >
                        <div className="faq-question">{faq.question}</div>
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;