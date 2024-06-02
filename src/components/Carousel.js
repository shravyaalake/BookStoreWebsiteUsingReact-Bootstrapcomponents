import React from 'react';
import { Carousel, Badge } from 'react-bootstrap';
import book11 from '../images/book11avif.avif'; 
import book3 from '../images/book3.avif';
import book12 from '../images/book12.avif'; 
import '../App.css'; 

const BookCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={book3} alt="First slide" />
      <Carousel.Caption>
        <h3>What do you mean by BOOKS?</h3>
        <p>A book is a medium for recording information in the form of writing or images.</p>
        <Badge bg="success">50% OFF on every purchase of books</Badge>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={book11} alt="Second slide" />
      <Carousel.Caption>
        <h3>What do you feel while reading BOOKS?</h3>
        <p>To non readers this will probably sound so extremely weird, but when we are reading a book, we actually feel like we've made new friends.RIGHT?</p>
        <Badge bg="danger">Limited Time Offer on non_fiction books</Badge> 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={book12} alt="Third slide" />
      <Carousel.Caption>
        <h3>This is the BEST!!</h3>
        <p>Let's talk about something less depressing now. Books make us happy too, I mean don't we all love a book that makes us happy? When characters we have shipped for the longest time finally get together (this has made us cry many times). When they finally achieve what they've been fighting for, when we read an amazing book. These are all things that make us happy.</p>
        <Badge bg="warning">Special Offer on fiction books</Badge> 
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default BookCarousel;
