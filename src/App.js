import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import BookCarousel from './components/Carousel';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';
import AboutUs from './components/AboutUs';  // Import AboutUs component
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const books = {
    fictional: [
      {
        id: 'the-da-vinci-code',
        image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/18101308/6-1-560x560.jpg?tr=w-1000',
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 'Rs 299',
        description: "One of Dan Brown’s most popular works is The Da Vinci Code. One of the best fiction books and published in 2003, the American author reintroduced us to the fictional character Robert Langdon after presenting him in Angels & Demons."
      },
      {
        id: 'the-catcher-in-the-rye',
        image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/18101312/7-1-560x560.jpg?tr=w-1000',
        title: 'The Catcher in the Rye',
        author: 'J D Salinger',
        price: 'Rs 399',
        description: "Published in 1951, The Catcher in the Rye initially received a lukewarm response. However, later critics appreciated the book, especially its protagonist. This coming-of-age novel follows Holden Caulfield, a 16-year-old prep school kid, through two days in his life."
      },
      {
        id: 'to-kill-a-mockingbird',
        image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/18101316/8-1-560x560.jpg?tr=w-1000',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 'Rs 249',
        description: "To Kill a Mockingbird (1960), a Pulitzer Prize winner, has sold over 40 million copies worldwide and has been translated into about as many languages. This book by Harper Lee is also one of the most often assigned texts in American schools."
      },
    ],
    nonFictional: [
      {
        id: 'the-7th-function-of-language',
        image: 'https://kitabay.com/cdn/shop/files/05ea35f45077646b89b25383b2c41e2d.jpg?v=1717154254&width=621',
        title: 'The 7th Function of Language',
        author: 'Laurent Binet',
        price: 'Rs 387',
        description: "One of the funniest, most riotously inventive and enjoyable novels you’ll read this year' - Observer Roland Barthes is knocked down in a Paris street by a laundry van. It’s February 1980 and he has just come from lunch with Francois Mitterrand, a slippery politician locked in a battle for the Presidency. Barthes dies soon afterwards."
      },
      {
        id: 'a-question-of-identity',
        image: 'https://cdn.shopify.com/s/files/1/0302/6927/6291/files/ec847534c200eb0f1c5711cb0ccc2f9d.jpg?crop=center&height=475&v=1714476278&width=308',
        title: 'A Question of Identity (Simon Serrailler #7)',
        author: 'Susan Hill',
        price: 'Rs 450',
        description: "A Chilling New Case for Simon Serrailler, A Question of Identity. One of the most interesting books to read which has a lot of mystery. One snowy night in the cathedral city of Lafferton, an old woman is dragged from her bed and strangled with a length of flex. A must-read book to explore completely. Happy reading."
      },
      {
        id: 'free-at-last-diaries',
        image: 'https://kitabay.com/cdn/shop/files/fe7a8adcc80863a593998db30bed329f.jpg?v=1717149281&width=395',
        title: 'Free at Last! Diaries, 1991-2001',
        author: 'Tony Benn, Ruth Winstone',
        price: 'Rs 500',
        description: "Updated description: Tony Benn is the longest-serving MP in the history of the Labour Party. This volume of his Diaries describes and comments, in a refreshing and honest way, upon the events of a momentous decade including the rise of New Labour, the global financial crisis, and the Iraq War. Benn's reflections offer unique insights into the political landscape of the time."
      },
    ]
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <BookCarousel />
              <h4>FICTIONAL BOOKS</h4>
              <div className="container my-5">
                <div className="row">
                  {books.fictional.map(book => (
                    <div className="col-md-4" key={book.id}>
                      <BookCard {...book} link={`/book-details/${book.id}`} />
                    </div>
                  ))}
                </div>
              </div>
              <h4>NON-FICTIONAL BOOKS</h4>
              <div className="container my-5">
                <div className="row">
                  {books.nonFictional.map(book => (
                    <div className="col-md-4" key={book.id}>
                      <BookCard {...book} link={`/book-details/${book.id}`} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          } />
          <Route path="/book-details/:bookId" element={<BookDetails books={books} />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Add About Us Route */}
        </Routes>
        <ContactModal />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
