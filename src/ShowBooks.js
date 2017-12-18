/**********************************************************************************************************
Component: ShowBooks
Props received (see prop-types):

1. shelves - array<Shelf>
2. updateBooks - function

Child Components:
1.BookShelf* - props passed: shelf (Shelf), key (String), updateBooks (function)
Note: The number of BookShelf children will be equal to the size of the state shelves property

2. Link - props passed: String.
Note: This is a component defined by the react-router-dom package. It is a third party library which
handles our navigation. For more information on please visit https://www.npmjs.com/package/react-router-dom.
************************************************************************************************************/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';



class ShowBooks extends Component {


//---------------------- REACT METHODS --------------------------------//

 /********************************************************************
  Name: render
  Description:
  Renders our template for our book shelves.
  *********************************************************************/
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



ShowBooks.propTypes = {
	shelves: PropTypes.arrayOf(PropTypes.object),
	updateBooks: PropTypes.func
}


export default ShowBooks