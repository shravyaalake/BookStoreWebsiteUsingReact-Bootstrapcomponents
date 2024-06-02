import React, { useState } from 'react';
import '../App.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Filters = ({ categories, onCategoryChange, onSortChange }) => (
  <Form className="d-flex align-items-center ms-3">
    <Form.Group controlId="categoryFilter" className="me-3 d-flex align-items-center">
      <Form.Label className="me-2 mb-0">Category</Form.Label>
      <Form.Control as="select" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option value={category} key={index}>{category}</option>
        ))}
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="sortFilter" className="d-flex align-items-center">
      <Form.Label className="me-2 mb-0">Sort By</Form.Label>
      <Form.Control as="select" onChange={(e) => onSortChange(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </Form.Control>
    </Form.Group>
  </Form>
);
const Header = () => {
  const [categories] = useState(['Fiction', 'Non-Fiction', 'Science', 'History']);
  
  const handleCategoryChange = (category) => {
    console.log(`Selected category: ${category}`);
  };
  
  const handleSortChange = (sortOption) => {
    console.log(`Selected sort option: ${sortOption}`);
  };

  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm p-3 mb-5 rounded " >
      <Container>
        <Navbar.Brand href="#" className="text-white fw-bold">The Reading Nook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link> 
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            
          </Nav>
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Filters 
            categories={categories} 
            onCategoryChange={handleCategoryChange} 
            onSortChange={handleSortChange} 
          />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

