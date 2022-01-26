import React, {useState, useEffect} from 'react'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelves from "./BookShelves";
import Book from "./Book";
import queryOperation from "./SearchQuery"

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

const BooksApp = () => {

  const [books, setBooks] = useState([]);
  const [idFromMap, setIdFromMap] = useState(new Map())
  //for query operations:
  const [searchQuery, setQuery] = useState([]);
  const [searchBooks] = queryOperation(searchQuery);

  const [newAddedBooks, setNewAddedBooks] = useState([]);

  useEffect(() => {
    const mergedBooks = searchBooks.map(book => {
      if (idFromMap.has(book.id)) {
        return idFromMap.get(book.id);
      } else {
        return book;
      }
    })
    setNewAddedBooks(mergedBooks);
  }, [searchBooks]) //adding new books from search & update searchBooks array

  const createBookMap = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book))
    return map;
  }

  useEffect(() => {
    BooksAPI.getAll().then(data => {
          setBooks(data);
          setIdFromMap(createBookMap(data));
        }
    );
  }, [])

  const moveBookShelf = (book, newShelf) => {
    const updatedBooks = books.map(eachBook => {
      if (eachBook.id === book.id) {
        book.shelf = newShelf;
        return book;
      }
      return eachBook;
    })
    if(!idFromMap.has(book.id)) {
      book.shelf = newShelf;
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
    //persist information between page refreshes
    BooksAPI.update(book, newShelf).then(response => console.log(response));
  }

  return (
      <div className="app">
        <Router>
          <Switch>
            <Route path ="/search">
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/">
                    <button className="close-search">Close</button>
                  </Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={searchQuery}
                           onChange={(e) => setQuery(e.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                  {newAddedBooks.map(book => (
                      <li key={book.id}>
                        <Book book={book} changeBookShelf={moveBookShelf}></Book>
                      </li>
                  ))}
                </div>
              </div>
            </Route>
            <Route path ="/">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <BookShelves books={books} updateBookShelf={moveBookShelf}></BookShelves>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
  )
}

export default BooksApp
