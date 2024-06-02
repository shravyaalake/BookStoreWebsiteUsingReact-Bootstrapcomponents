import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookCard = ({ image, title, author, price, description, link }) => (
  <Card style={{ width: '100%', marginBottom: '20px', border: '3px solid red' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="text-black">Author: {author}</Card.Text>
      <Card.Text className="text-black">Price: {price}</Card.Text>
      <Card.Text className="text-black">{description}</Card.Text>
      <Button as={Link} to={link} variant="primary">View Details</Button>
      <Button variant="secondary" className="ms-2">Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default BookCard;
