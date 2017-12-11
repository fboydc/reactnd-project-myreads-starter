import React from 'react'
import { Route } from 'react-router-dom';
import ShowBooks from './ShowBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from "./BooksAPI";
// import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: []

  }

  componentDidMount(){

    BooksAPI.getAll().then((books)=>{

        this.setState({
          books: books
        });


    });

  }

  updateBooks(id, shelf){

    console.log(this.state);

    var books = this.state.books.map((book)=>{
      if(book.id === id){
        book.shelf = shelf; 
      }
      return book;
    });

    this.setState({
        books: books
    });


  }


  

  render() {

    const shelfInfo = {
      shelf_1: {
        title: "wantToRead",
        label: "Want To Read"
      },

      shelf_2: {
        title: "currentlyReading",
        label: "Currently Reading"
      },

      shelf_3: {
        title: "read",
        label: "Read"
      },

    }


    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShowBooks books={this.state.books} updateBooks={this.updateBooks.bind(this)} shelfInfo={shelfInfo}/>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBook shelfInfo={shelfInfo}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
