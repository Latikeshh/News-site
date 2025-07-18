import React from 'react';
import monsoon from './img/monsoon.jpg';
import img5 from '../pages/img/images(5).jpeg';
import ch4 from '../pages/img/ch4.jpg';
import budget from './img/budget.jpg';
import cricket from './img/Cricket.avif';
import expo from './img/expo.webp';

const HeroCarousel = () => {
    const carouselItems = [
        {
            img: ch4,
            title: "India's Historic Space Mission",
            desc: "ISRO launches Chandrayaan-4 successfully into orbit.",
        },
        {
            img: budget,
            title: "Budget 2025 Highlights",
            desc: "Major tax reforms announced by Finance Minister.",
        },
        {
            img: cricket,
            title: "India Wins T20 Series",
            desc: "India beats Australia in a thrilling 3-2 series win.",
        },
        {
            img: monsoon,
            title: "Monsoon Hits Kerala Coast",
            desc: "Heavy rainfall expected across southern India.",
        },
        {
            img: expo,
            title: "Tech Expo 2025 in a Mumbai",
            desc: "India showcases cutting-edge innovations in AI.",
        },
    ];

    return (
        <div id="topNewsCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
                {carouselItems.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        data-bs-target="#topNewsCarousel"
                        data-bs-slide-to={idx}
                        className={idx === 0 ? "active" : ""}
                        aria-current={idx === 0 ? "true" : undefined}
                        aria-label={`Slide ${idx + 1}`}
                    ></button>
                ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner" style={{ overflow: 'hidden' }}>
                {carouselItems.map((item, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                        <img
                            src={item.img}
                            className="d-block w-100"
                            alt={item.title}
                            style={{ height: '300px' }}
                            loading="lazy"
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#topNewsCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#topNewsCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroCarousel;
