import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ title, summary }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;