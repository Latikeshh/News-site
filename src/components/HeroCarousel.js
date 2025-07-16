import React from 'react';
import img1 from '../pages/img/images(1).jpeg';
import img2 from '../pages/img/images(2).jpeg';
import img3 from '../pages/img/images(3).jpeg';
import img4 from '../pages/img/images(4).jpeg';
import img5 from '../pages/img/images(5).jpeg';

const HeroCarousel = () => {
    const carouselItems = [
        {
            img: img1,
            title: "India's Historic Space Mission",
            desc: "ISRO launches Chandrayaan-4 successfully into orbit.",
        },
        {
            img: img2,
            title: "Budget 2025 Highlights",
            desc: "Major tax reforms announced by Finance Minister.",
        },
        {
            img: img3,
            title: "India Wins T20 Series",
            desc: "India beats Australia in a thrilling 3-2 series win.",
        },
        {
            img: img4,
            title: "Monsoon Hits Kerala Coast",
            desc: "Heavy rainfall expected across southern India.",
        },
        {
            img: img5,
            title: "Tech Expo 2025 in Mumbai",
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
            <div className="carousel-inner" style={{ height: '400px', overflow: 'hidden' }}>
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
