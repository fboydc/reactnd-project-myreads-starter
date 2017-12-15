import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import BookModel from './BookModel';


class SearchBook extends Component {


  state = {
    query: '',
    books: [],
    loading: ''
  }

  componentDidMount(){
    this.loader = document.getElementById("load_spinner");
    this.grid = document.getElementById("books_grid");
  }



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
                {
                /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                }

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

export default SearchBook;


