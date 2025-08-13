import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Update = () => {
    const { _id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/get/${_id}`);
            const userData = response.data.userData;

            setTitle(userData.title || '');
            setSlug(userData.slug || '');
            setContent(userData.content || '');
            setAuthor(userData.author || '');
            setCategory(userData.category || '');
            setTags(userData.tags || '');
            setPublishedAt(userData.publishedAt || '');
            setImage(userData.image || null);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('tags', tags);
        formData.append('publishedAt', publishedAt);
        if (image instanceof File) {
            formData.append('image', image);
        }

        try {
            const response = await axios.put(`http://localhost:8000/updatedata/${_id}`, formData);
            alert(response.data.message || 'Data updated successfully');
            navigate('/view');
        } catch (err) {
            console.error('Error updating:', err);
            alert('Failed to update data');
        }
    };

    return (
        <div className="update-container">
            <form className="update-form" onSubmit={handleSubmit}>
                <h2>Update Data</h2>

                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter Slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Enter Content"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>

                <input
                    type="text"
                    placeholder="Enter Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                <input
                    type="date"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                />

                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {image && typeof image === 'string' && (
                    <div>
                        <img
                            src={`http://localhost:8000/${image}`}
                            alt="Preview"
                            width="100"
                        />
                    </div>
                )}

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
