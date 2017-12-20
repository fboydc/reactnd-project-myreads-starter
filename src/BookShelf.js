/**********************************************************************************************************
Component: BookShelf
Props received (see prop-types):

1. shelf - Shelf
2. updateBooks - function

Methods:
none

React Methods:
render - see method description below
************************************************************************************************************/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class BookShelf extends Component {


  /***************************************************************************************
  Name: render
  Description:
  Renders the template for our Book objects.
   Child Components:
   1. Book* - props passed: book (Book), updateBooks (function), options (array <object>)
      Note: The number of Book children will be equal to the Book elements in the book property
      in the BookShelf object.
  **************************************************************************************/
	render(){

		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf.label}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                         {this.props.shelf.books.map((book)=>(
                        <li key={book.id}><Book book={book} updateBooks={this.props.updateBooks} options={this.props.shelf.shelfOptions}/></li>
                    ))}
                    </ol>
                  </div>
                </div>


                );
	}

}



BookShelf.propTypes = {
  shelf: PropTypes.object,
  updateBooks: PropTypes.func
}


export default BookShelf;