import React from 'react';

const NewsCard = ({ title, content, image }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={image} className="card-img-top" alt="news" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{content}</p>
            </div>
        </div>
    );
};

export default NewsCard;
