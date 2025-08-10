// src/components/NewsDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewsDetailPage.css';

const NewsDetailPage = () => {
    const { id } = useParams(); // This should be the MongoDB _id
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/getNewss/${id}`)
            .then(res => setArticle(res.data))
            .catch(err => console.error("❌ Error fetching article:", err));
    }, [id]);

    const handleChange = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        axios.put(`http://localhost:5000/updateNews/${id}`, article)
            .then(() => {
                alert('✅ Article updated successfully!');
                setIsEditing(false);
            })
            .catch(err => console.error("❌ Error updating article:", err));
    };

    if (!article) return <p>Loading...</p>;

    return (
        <div className="news-detail-container">
            <h2>{isEditing ? "Edit Article" : "View Article"}</h2>

            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="title"
                        value={article.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="author"
                        value={article.author}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="category"
                        value={article.category}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>💾 Save</button>
                </>
            ) : (
                <>
                    <p><strong>Title:</strong> {article.title}</p>
                    <p><strong>Author:</strong> {article.author}</p>
                    <p><strong>Category:</strong> {article.category}</p>
                </>
            )}

            <div className="news-detail-buttons">
                <button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "✏ Edit"}
                </button>
                <button onClick={() => navigate("/articles")}>🔙 Back</button>
            </div>
        </div>
    );
};

export default NewsDetailPage;
