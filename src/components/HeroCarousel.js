import React from 'react';
import newsItems from '../data/newsData'; // Adjust path as needed

const HeroCarousel = () => {
    const carouselItems = newsItems.filter(item => item.featured); // Only featured news

    return (
        <div id="topNewsCarousel" className="carousel slide mb-4 shadow rounded-4 overflow-hidden" data-bs-ride="carousel">
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
            <div className="carousel-inner" style={{ maxHeight: '440px' }}>
                {carouselItems.map((item, idx) => (
                    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                        <img
                            src={item.image}
                            className="d-block w-100 object-fit-cover"
                            alt={item.title}
                            style={{ height: '440px', objectFit: 'cover' }}
                            loading="lazy"
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded-3">
                            <h5 className="fw-bold">{item.title}</h5>
                            <p>{item.content}</p>
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
