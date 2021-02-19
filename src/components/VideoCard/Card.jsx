import React from 'react';
import Card from 'react-bootstrap/Card';

function VideoCard({ src, title, description }) {
  return (
    <Card
      style={{ width: '18rem', height: '30rem', marginBottom: '1rem', marginTop: '1rem' }}
    >
      <Card.Body>
        <Card.Img variant="top" src={src} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default VideoCard;
