import React from 'react'

import Book from './Book';

const BookShelf = ({books, title, updateBookShelf}) =>
{
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book} changeBookShelf={updateBookShelf}></Book>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default BookShelf;