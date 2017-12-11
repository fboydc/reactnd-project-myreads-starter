import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';



class ShowBooks extends Component {




	render(){


		let shelves = {
			shelf_1: {
				title: this.props.shelfInfo.shelf_1.title,
				label: this.props.shelfInfo.shelf_1.label,
				books: []
			},
			shelf_2: {
				title: this.props.shelfInfo.shelf_2.title,
				label: this.props.shelfInfo.shelf_2.label,
				books: []

			},
			shelf_3: {
				title: this.props.shelfInfo.shelf_3.title,
				label: this.props.shelfInfo.shelf_3.label,
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
              	<BookShelf title={shelves.shelf_1.label} books={shelves.shelf_1.books} shelfInfo={this.props.shelfInfo} updateBooks={this.props.updateBooks}/>
              	<BookShelf title={shelves.shelf_2.label} books={shelves.shelf_2.books} shelfInfo={this.props.shelfInfo} updateBooks={this.props.updateBooks}/>
              	<BookShelf title={shelves.shelf_3.label} books={shelves.shelf_3.books} shelfInfo={this.props.shelfInfo} updateBooks={this.props.updateBooks}/>
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