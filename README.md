# Project

MyReads Project - A Book Tracking App This is the first assessment project for Udacity React Nanodegree Program. Base
bootstrap project can be downloaded/forked from her: https://github.com/facebookincubator/create-react-app

For starting develop or test :

* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

1.Run the app in development mode.
2.Then open http://localhost:3000 to view project.

## Project Structure

Project has 3 main categories:
*Main Page : listing books in 3 different shelves, moving book from shelf to shelf.
*Search Page : all book list, search behavior & also changing shelves too.
*Routing : The main page contains a link to the search page. When the link is clicked, the search page is displayed 
and the URL in the browser’s address bar is /search.

*Allowed Search Terms*
The backend API uses a particular word set for search operation. It can be found in SEARCH_TERMS.md. 

## Method Details
Backend server was provided by Udacity by BooksAPI.js in the project. 
(Service url : https://reactnd-books-api.udacity.com/...)
(https://reactnd-books-api.udacity.com/books)

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains methods that I used to perform necessary operations on the
backend:

* [`getAll`](getAll()) : Returns a Promise which resolves to a JSON object containing a collection of book objects.
* [`update`](update(book, shelf)) : Returns a Promise which resolves to a JSON object containing the response data of the POST request
* [`search`](search(query)) : Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
