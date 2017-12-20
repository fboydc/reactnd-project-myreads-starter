/**********************************************************************************************************
Component: SearchBook
Props received (see prop-types):

1. shelves - array<Shelf>
2. updateBooks - function

Methods:

search - see method description below
searchShelf - see method description below

React Methods:

componentDidMount - see method description below
render - see method description below


state:
query - String
books - array <Books>
************************************************************************************************************/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book';
import BookModel from './BookModel';


class SearchBook extends Component {

  /********************************************************************
  State
  Properties:
  1. query - String
     Description: Contains the query typed by the user when searching for books.
  2. books - array <Book>
     Description: Contains all the books fetched from with BooksAPI from our backend.
     Books will be filtered dependending on the value of the query property.

  *********************************************************************/
  state = {
    query: '',
    books: []
  }




 /********************************************************************
  Method: search
  Parameters: String
  returns: nothing
  Description:
  Performs a fetch with the query typed by the user, creates an array of BookModels
  with the information retreived, and sets the state book property to the new
  BookModels array. Also, note that we change some of the style from our book
  containing grid and our loader gif container in order to show a more elegant UI
  to the user.
  *********************************************************************/
  search = (query) => {

    if(query){

         this.loader.style.display = "block";
         this.grid.style.display = "none";

         BooksAPI.search(query).then((data)=>{

              if(!data.error){
                  const books = data.map((book) => {
                    let thumbnail = book.imageLinks ? book.imageLinks.thumbnail : "/icons/notfound.jpg";
                    let author = book.authors ? book.authors[0] : "No data Available";
                    let shelf = this.searchShelf(book.id);
                    return new BookModel(book.id, book.title, thumbnail, author, shelf)
                  });

                  this.loader.style.display = "none";
                  this.grid.style.display = "flex";
                  this.setState({books: books});

               }else{
                this.loader.style.display = "none";
                 this.grid.style.display = "none";
              }
            });
          }
    }

 /********************************************************************
  Method: searchShelf
  Parameters: String
  returns: String
  Description:
  Helper method for 'search'; searches for a book in every shelf,
  using the book id. Returns the shelf title.
  *********************************************************************/
  searchShelf = (id) => {

    let title = "none";
    this.props.shelves.forEach((shelf) => {
        shelf.books.forEach((book) => {
            if(book.id === id){
             title  = shelf.title;
            }

        });
    });

    return title;
  }

  //------------------------- REACT METHODS -----------------------------//


  /********************************************************************
  Name: componentDidMount
  Description:
  Grabs our books grid and spinner container elements. This allow us to
  prevent a DOM read/write cycle in our 'search' method.
  *********************************************************************/
  componentDidMount(){
    this.loader = document.getElementById("load_spinner");
    this.grid = document.getElementById("books_grid");
  }

  /***********************************************************************************
  Name: render
  Description:
  Renders our all the books passed from our BooksApp component.

  Child Components:
  Book* - props passed: book (Book), updateBooks (function), options (array <object>).
  Link - props passed: String. - Redirects back to the main page (/).
  Note: This is a component defined by the react-router-dom package. It is a third party library which
  handles our navigation. For more information on please visit https://www.npmjs.com/package/react-router-dom.
  Goes bac
  ************************************************************************************/
  render(){

    //let shelves = this.props.shelfInfo;
    let options = this.props.shelves.map((shelf)=>{
      return {title: shelf.title, label: shelf.label}
    });

    const { books } = this.state;
    return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" onChange={ (event)=>this.search(event.target.value) }/>

              </div>
            </div>
            <div className="search-books-results">
              <img src={require('./icons/Spinner.svg')} id="load_spinner" alt="loading spinner"/>
              <ol className="books-grid" id="books_grid">
              {books.map((book) => {
                    return <li key={book.id}><Book book={book} shelves={this.shelves} options={options} updateBooks={this.props.updateBooks}/></li>
                  })}

              </ol>
            </div>
          </div>
      )
  }
}


SearchBook.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object),
  updateBooks: PropTypes.func
}

export default SearchBook;


