import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import axios from "axios";

const NewsForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]); // Array of strings
  const [publishedAt, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle tags input separated by commas, convert to array
  const handleTagsChange = (e) => {
    const input = e.target.value;
    const tagsArray = input.split(",").map((tag) => tag.trim()).filter(tag => tag.length > 0);
    setTags(tagsArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("content", content);
      formData.append("author", author);
      formData.append("category", category);
      // Append tags as multiple form fields named "tags"
      tags.forEach(tag => formData.append("tags", tag));
      if (publishedAt) formData.append("publishedAt", publishedAt);
      if (image) formData.append("image", image);

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axios.post(
        "http://localhost:8000/register-news",
        formData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        alert("News submitted successfully!");
        resetForm();
        navigate("/newslist"); // or wherever you want to redirect
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting news:", error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setContent("");
    setAuthor("");
    setCategory("");
    setTags([]);
    setPublishedAt("");
    setImage(null);
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <Card className="shadow border-0">
            <Card.Body>
              <h2 className="fw-bold mb-4">Add News</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter news title"
                    value={title}
                    required
                    maxLength={200}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Slug">
                  <Form.Label>Slug</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter slug (unique)"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Content">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter news content"
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>

                <Row>
                  <Form.Group as={Col} controlId="Author" className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Author name (optional)"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="Category" className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Category (default: General)"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="Tags">
                  <Form.Label>Tags (comma separated)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. politics,world,tech"
                    value={tags.join(", ")}
                    onChange={handleTagsChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="PublishedAt">
                  <Form.Label>Publish Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="Image" className="mb-4">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit News"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsForm;
