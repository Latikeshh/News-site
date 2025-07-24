import React from 'react';
import newsItems from '../data/newsData';
import './HeroCarousel.css'; // External styles

const HeroCarousel = () => {
    const carouselItems = newsItems.filter(item => item.featured);

    return (
        <div
            id="topNewsCarousel"
            className="carousel slide hero-carousel"
            data-bs-ride="carousel"
            data-bs-interval="2000" // ← Auto-slide every 2 seconds
        >
            {/* Indicators */}
            <div className="carousel-indicators">
                {carouselItems.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        data-bs-target="#topNewsCarousel"
                        data-bs-slide-to={idx}
                        className={idx === 0 ? 'active' : ''}
                        aria-current={idx === 0 ? 'true' : undefined}
                        aria-label={`Slide ${idx + 1}`}
                    ></button>
                ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
                {carouselItems.map((item, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                        <img
                            src={item.image}
                            className="carousel-img"
                            alt={item.title}
                            loading="lazy"
                        />
                        <div className="carousel-caption">
                            <h5 className="carousel-title">{item.title}</h5>
                            <p className="carousel-description">{item.content}</p>
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
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#topNewsCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroCarousel;
