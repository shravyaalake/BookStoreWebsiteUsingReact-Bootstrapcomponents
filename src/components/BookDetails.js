import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  const book = [...books.fictional, ...books.nonFictional].find(book => book.id === bookId);

  if (!book) {
    return <Container className="my-5"><h2>Book not found</h2></Container>;
  }

  return (
    <Container className="my-5">
      <Row style={{ border: '2px solid red' }}>
        <Col md={4}>
          <img src={book.image} className="img-fluid" alt="Book Cover" />
        </Col>
        <Col md={8}>
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
          <p>{book.description}</p>
          <Button variant="primary">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
