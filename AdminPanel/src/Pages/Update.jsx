import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import axios from 'axios';

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
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <h2 className="fw-bold mb-2 text-uppercase">Update Data</h2>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="Title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="Slug">
                                        <Form.Label>Slug</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Slug"
                                            value={slug}
                                            onChange={(e) => setSlug(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="Content">
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter Content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="Author">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="Category">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="Tags">
                                        <Form.Label>Tags</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Tags"
                                            value={tags}
                                            onChange={(e) => setTags(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="PublishedAt">
                                        <Form.Label>Published At</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={publishedAt}
                                            onChange={(e) => setPublishedAt(e.target.value)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="Image">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    {image && typeof image === 'string' && (
                                        <div className="mt-2">
                                            <img
                                                src={`http://localhost:8000/${image}`}
                                                alt="Preview"
                                                width="100"
                                            />
                                        </div>
                                    )}
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Update;
