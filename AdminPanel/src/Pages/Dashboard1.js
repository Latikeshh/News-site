import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';

const Dashboard1 = () => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = () => {
        axios.get('http://localhost:8000/getnotes')
            .then(res => setNotes(res.data.data))
            .catch(err => console.error(err));
    };

    const softDeleteNote = (id) => {
        axios.put(`http://localhost:8000/deletenote/${id}`)
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
                {notes.length === 0 ? (
                    <p className="dash-empty-message">No notes saved yet.</p>
                ) : (
                    notes.map((note) => (
                        <div className="dash-note-card" key={note._id}>
                            <h3>{note.name || 'Untitled'}</h3>
                            <p>{note.message || 'Empty note'}</p>
                            <div className="dash-actions">
                                <button className="dash-edit-btn" onClick={() => editNote(note._id)}>✏️ Edit</button>
                                <button className="dash-delete-btn" onClick={() => softDeleteNote(note._id)}>🗑️ Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard1;
