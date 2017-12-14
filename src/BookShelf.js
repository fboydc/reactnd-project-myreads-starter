import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Book from './Book';


class BookShelf extends Component {



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



export default BookShelf;