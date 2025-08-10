import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';

const Dashboard1 = () => {
    const [news, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = () => {
        axios.get('http://localhost:8000/getNews')
            .then(res => setNotes(res.data.data))
            .catch(err => console.error(err));
    };

    const softDeleteNote = (id) => {
        axios.put(`http://localhost:8000/deleteNews/${id}`)
            .then(() => {
                alert('Note deleted');
                loadNotes();
            })
            .catch(err => console.error(err));
    };

    const editNote = (id) => {
        navigate(`/edit/${id}`); // ✅ pass ID in the route
    };

    return (
        <div className="dash-container">
            <header className="dash-header">
                <h2>📒 My Notes</h2>
                <button className="dash-add-btn" onClick={() => navigate('/addNews')}>+ Add Note</button>
            </header>

            <div className="dash-notes-wrapper">
                {news.length === 0 ? (
                    <p className="dash-empty-message">No notes saved yet.</p>
                ) : (
                    news.map((News) => (
                        <div className="dash-note-card" key={News._id}>
                            <h3>{News.title || 'Untitled'}</h3>
                            <p>{News.content || 'Empty note'}</p>
                            <p>{News.author || 'Empty note'}</p>
                            <p>{News.category || 'Empty note'}</p>
                            <p>
                                📅 {News.publishedAt
                                    ? new Date(News.publishedAt).toLocaleDateString('en-GB') // DD/MM/YYYY
                                    : ''}
                            </p>
                            <div className="dash-actions">
                                <button className="dash-edit-btn" onClick={() => editNote(News._id)}>✏️ Edit</button>
                                <button className="dash-delete-btn" onClick={() => softDeleteNote(News._id)}>🗑️ Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard1;
