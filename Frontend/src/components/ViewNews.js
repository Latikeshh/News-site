import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './ViewNews.css'; // external CSS file

const ViewNews = () => {
  const { _id } = useParams();

  const [newsData, setNewsData] = useState({
    title: '',
    slug: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    publishedAt: '',
    image: null
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/get/${_id}`);
      const userData = response.data.userData || {};
      setNewsData(userData);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <Card className="shadow view-news-card">
            {newsData.image && (
              <div className="view-news-image-wrapper">
                <img
                  src={`http://localhost:8000/${newsData.image}`}
                  alt="News"
                  className="view-news-image"
                />
              </div>
            )}
            <Card.Body>
              <h2 className="fw-bold mb-4 text-uppercase">View News</h2>

              <p><strong>Title:</strong> {newsData.title}</p>
              <p><strong>Slug:</strong> {newsData.slug}</p>
              <p><strong>Content:</strong> {newsData.content}</p>
              <p><strong>Author:</strong> {newsData.author}</p>
              <p><strong>Category:</strong> {newsData.category}</p>
              <p><strong>Tags:</strong> {newsData.tags}</p>
              <p><strong>Published At:</strong> {newsData.publishedAt
                ? new Date(newsData.publishedAt).toLocaleDateString('en-GB')
                : 'Not available'}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewNews;
