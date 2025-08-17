import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DateNews.css'; // custom styling

const DateNews = () => {
    const { date } = useParams();
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/news-by-date?date=${date}`)
            .then(res => {
                setNewsList(res.data.data); // ✅ extract the array
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [date]);

    if (loading) return <p>Loading news...</p>;

    return (
        <div className="date-news-container">
            <h2>News for {date}</h2>
            {newsList.length === 0 && <p>No news found for this date.</p>}
            <div className="news-grid">
                {newsList.map(news => (
                    <div key={news._id} className="news-card">
                        <h3>{news.title}</h3>
                        <p>{news.content.substring(0, 150)}...</p>
                        <p className="news-date">{new Date(news.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateNews;
