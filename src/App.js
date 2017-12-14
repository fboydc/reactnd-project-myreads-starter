import React from 'react'
import { Route } from 'react-router-dom';
import ShowBooks from './ShowBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI';
import Shelf from './BookShelfModel';
import './App.css'


class BooksApp extends React.Component {


  constructor(){
    super();
    this.shelves = [
      new Shelf("wantToRead", "Want To Read"),
      new Shelf("currentlyReading", "Currently Reading"),
      new Shelf("read", "Read")
    ]

    this.addOptions();

  }

  addOptions(){

    for(let shelf of this.shelves){
      for(let option of this.shelves){
          shelf.addShelfOption(option);
      }
    }
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    shelves: []

  }



  componentWillMount(){

    BooksAPI.getAll().then((books)=>{


      books.forEach((book)=>{

         for(let shelf in this.shelves){
            let current = this.shelves[shelf];
            if(book.shelf === current.title){
              current.addBook(book);
            }

         }

      });

      this.setState({
        shelves: this.shelves
      })


    });


  }




  updateBooks(bookToChange, shelfTitle){


    this.shelves.forEach((shelf)=>{


      let match = shelf.books.filter(book => book.id === bookToChange.id)[0];

      if(match){
        shelf.removeBook(match);
      }

      if(shelf.title === shelfTitle){
        bookToChange.shelf = shelf.title;
        shelf.addBook(bookToChange);
      }

    });


    this.setState({
        shelves: this.shelves
    });


  }


  render() {

    return (

     <div className="app">
        <Route exact path="/" render={() => (
            <ShowBooks  updateBooks={this.updateBooks.bind(this)} shelves={this.state.shelves} />
          )}/>
        <Route path="/search" render={()=>(
            <SearchBook shelves={this.state.shelves}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
