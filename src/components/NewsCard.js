import React from 'react';

const NewsCard = ({ title, content, image }) => {
    return (
        <div className="card h-100 shadow-sm">
            {/* Square fixed-size image container */}
            <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt="news"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Content */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{content}</p>
            </div>
        </div>
    );
};

export default NewsCard;
