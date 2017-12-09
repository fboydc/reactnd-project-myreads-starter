import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class BookShelf extends Component {



	render(){

		let books = this.props.books;
    let shelves = this.props.shelfInfo;
    let updateBooks = this.props.updateBooks;
    //console.log(this.props);


		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	 { books.map(
                    	 		book => (<li key={book.id}><Book book={book} shelves={shelves} updateBooks={updateBooks}/></li>)
                    	 	)
                    	  }
                    </ol>
                  </div>
                </div>);
	}

}

	BookShelf.propTypes = {
		books: PropTypes.arrayOf(PropTypes.object)
	}


export default BookShelf;