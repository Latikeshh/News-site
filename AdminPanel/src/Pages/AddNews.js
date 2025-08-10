import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddNews.css'; // Style with your admin dark theme

const AddNews = () => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('General');
    const [tags, setTags] = useState('');
    const navigate = useNavigate();

    const saveNews = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Title and content are required");
            return;
        }

        const newNews = {
            title,
            slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
            content,
            author: author || 'Anonymous',
            category,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            publishedAt: new Date()
        };

        try {
            await axios.post('http://localhost:8000/createNews', newNews);
            alert('✅ New article saved successfully!');
            navigate('/admin/news'); // Redirect to news list in admin
        } catch (err) {
            console.error(err);
            alert('Error ' + err.message);
        }
    };

    return (
        <div className="addnews-container">
            <header className="addnews-header">
                <h2>📰 Add News</h2>
            </header>

            <div className="addnews-card">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Slug (optional, auto-generated from title)"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={8}
                />
                <input
                    type="text"
                    placeholder="Author (default: Anonymous)"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tags (comma-separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                <div className="addnews-actions">
                    <button onClick={saveNews}>💾 Save</button>
                    <button onClick={() => navigate('/admin/news')}>🔙 Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddNews;
