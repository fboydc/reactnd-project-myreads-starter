import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import BookShelf from './BookShelf';



class ShowBooks extends Component {





	render(){

		const shelves = this.props.shelves;

		return (
			 <div className="list-books">
	            <div className="list-books-title">
		              <h1>MyReads</h1>
		        </div>
		       	<div className="list-books-content">
		            <div>
		            	{shelves.map((shelf) => (
		            		<BookShelf shelf={shelf} key={shelf.title} updateBooks={this.props.updateBooks}/>
		            	))}
		            </div>
		        </div>
		        <div className="open-search">
		              <Link to="/search">Add a book</Link>
	            </div>
          	</div>


			);


  	}


}


export default ShowBooks