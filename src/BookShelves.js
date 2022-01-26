import React from 'react'

import BookShelf from './BookShelf';

const BookShelves = ({books, updateBookShelf}) =>
{

    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');


    return (
        <div>
            <BookShelf title='Currently Reading' books = {currentlyReading} updateBookShelf = {updateBookShelf} />
            <BookShelf title='Want To Read' books = {wantToRead} updateBookShelf = {updateBookShelf} />
            <BookShelf title='Read' books = {read} updateBookShelf = {updateBookShelf} />
        </div>
    )


}
export default BookShelves;
