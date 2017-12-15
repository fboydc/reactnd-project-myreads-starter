/****************************************
Component: BooksApp
Properties:
1. Name:Shelves - Array<Shelf>
   Description: Contains our shelf objects, which will be our
   encapsulating entity for all our data.

Methods:

1. addOptions  - see method description below
2. updateBooks - see method description below

React Methods:

1.componentWillMount - see method description below
1.render - see method description below


State:

shelves - Array<Shelf>

*****************************************/

import React from 'react'
import { Route } from 'react-router-dom';
import ShowBooks from './ShowBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI';
import Shelf from './BookShelfModel';
import BookModel from './BookModel';
import Notifications, {notify} from 'react-notify-toast';
import './App.css';


class BooksApp extends React.Component {



  /****************************************
  Method: Constructor
  Parameters: None
  Returns: Does not apply
  Description:
  Instantiates our shelves. If we wish to create more shelves,
  we could do so here; the application is robust enough to work
  for n number of shelves. Also calls addOptions method in order to
  show the different selection options in our book element, when changing
  book shelves.
  *****************************************/
  constructor(){
    super();
    this.shelves = [
      new Shelf("wantToRead", "Want To Read"),
      new Shelf("currentlyReading", "Currently Reading"),
      new Shelf("read", "Read")
    ]

    this.addOptions();

  }

  /********************************************************************
  Method: addOptions
  Parameters: none
  returns: nothing
  Description:
  Will iterate through every shelf in the shelves property and will
  add a shelf option object to its shelfOptions property. This is
  responsible for showing the different selection options when click
  on the change shelf icon ("+");
  *********************************************************************/
  addOptions(){

    for(let shelf of this.shelves){
      for(let option of this.shelves){
          shelf.addShelfOption(option);
      }
    }
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

    if(shelfTitle === "none"){
      notify.show("removed book from your shelves.", "success");
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
              current.addBook(new BookModel(book.id, book.title, book.imageLinks.thumbnail, book.authors[0], book.shelf));
            }

         }

      });

      this.setState({
        shelves: this.shelves
      })


    });
  }







  render() {

    return (

     <div className="app">
        <Notifications />
        <Route exact path="/" render={() => (
            <ShowBooks  updateBooks={this.updateBooks.bind(this)} shelves={this.state.shelves} />
          )}/>
        <Route path="/search" render={()=>(
            <SearchBook updateBooks={this.updateBooks.bind(this)} shelves={this.state.shelves}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
