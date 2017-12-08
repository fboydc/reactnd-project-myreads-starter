import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';



class ShowBooks extends Component {


	render(){

		console.log(this.props.books);
		let shelves = {
			shelf_1: {
				title: "wantToRead",
				label: "Want To Read",
				books: []
			},
			shelf_2: {
				title: "currentlyReading",
				label: "Currently Reading",
				books: []

			},
			shelf_3: {
				title: "read",
				label: "Read",
				books: []

			}
		}

		this.props.books.forEach((book)=>{
			switch(true){
				case (book.shelf === "wantToRead"):
					shelves.shelf_1.books.push(book);
					break;
				case (book.shelf === "currentlyReading"):
					shelves.shelf_2.books.push(book);
					break;
				case (book.shelf === "read"):
					shelves.shelf_3.books.push(book);
					break;
				default:
					break;
			}
		});



		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	<BookShelf title={shelves.shelf_1.label} books={shelves.shelf_1.books}/>
              	<BookShelf title={shelves.shelf_2.label} books={shelves.shelf_2.books}/>
              	<BookShelf title={shelves.shelf_3.label} books={shelves.shelf_3.books}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>);

  	}


}


ShowBooks.propTypes = {
		books: PropTypes.arrayOf(PropTypes.object)
}

export default ShowBooks;