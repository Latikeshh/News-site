import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import axios from "axios";

const AddNews = () => {
  const navigate = useNavigate();
const baseUrl = "http://localhost:8000/registeration";
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState(""); // comma separated string
  const [publishedAt, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      if (slug) formData.append("slug", slug);
      formData.append("content", content);
      if (author) formData.append("author", author);
      if (category) formData.append("category", category);

      // Convert tags string to array and append each tag separately
      if (tags.trim()) {
        const tagsArray = tags.split(",").map((tag) => tag.trim());
        tagsArray.forEach((tag) => formData.append("tags", tag));
      }

      if (publishedAt) formData.append("publishedAt", publishedAt);
      if (image) formData.append("image", image);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        "http://localhost:8000/addnews",
        formData,
        config
      );

      if (response.status === 200 || response.status === 201) {
        alert("News added successfully!");
        resetForm();
        navigate("/news-list");  // change as per your route
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error while submitting the form:", error);
      alert("Error " + error.message);
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
    setTags("");
    setPublishedAt("");
    setImage(null);
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border rounded-3 border-3 border-primary"></div>
          <Card className="shadow border-0">
            <Card.Body>
              <h2 className="fw-bold mb-2 text-uppercase">Add News</h2>
              <p className="mb-5">Fill in the news details below:</p>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="title">
                    <Form.Label>Title <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter title"
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="slug">
                    <Form.Label>Slug (optional)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="content">
                  <Form.Label>Content <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter content"
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter author name"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="tags">
                    <Form.Label>Tags (comma separated)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g. politics, sports, entertainment"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="publishedAt">
                    <Form.Label>Published At</Form.Label>
                    <Form.Control
                      type="date"
                      value={publishedAt}
                      onChange={(e) => setPublishedAt(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="image">
                  <Form.Label>Image <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </Form.Group>

                <div className="d-grid mt-3">
                  <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
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

export default AddNews;
