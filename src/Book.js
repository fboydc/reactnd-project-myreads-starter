/**********************************************************************************************************
Component: Book
Props received (see prop-types):

1. book - Book
2. updateBooks - function
3. options - array <object>

Methods:
switchShelf - see method description below

React methods:
render - see method description below

************************************************************************************************************/
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-toast';

class Book extends Component {


	/********************************************************************
	Method: switchShelf
	Parameters: none
	Returns: nothing
	Description:
	Updates the backend placing our book in the new shelf,
	and then makes the call to updateBooks method inside App.js.
	notice that the data from our application is only fetched once
	(on load/reload), however our data will be persistent since we
	are updating our backend/frontend simoultaneously. This allows
	us to save some latency which might affect our application's
	performance. We also use react-notify-toast library to give the
	user some insight when our fetch is awaiting a succesful server
	response.
	*********************************************************************/
	switchShelf(){
		let select = document.getElementById(this.props.book.id);
		let val = select.options[select.selectedIndex].value;
		notify.show("making changes...please wait.", "info", 1000, "#FFFFFF");
		BooksAPI.update(this.props.book, val).then((data)=>{
			this.props.updateBooks(this.props.book, val);
		});
	}





 /***************************************************************************************
  Name: render
  Description:
  Renders our Book object with its defined props.
  Child Components:
  None. This is the bottom of our components tree.
  **************************************************************************************/
	render(){


		return (


	            <div className="book">
	                <div className="book-top">
	                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.book.thumbnail+')' }}></div>
	                        <div className="book-shelf-changer">
	                              <select  onChange={()=>{
	                                						this.switchShelf();
	                                					}} id={this.props.book.id} value={this.props.book.shelf}>
	                                <option value="" disabled>Move to...</option>
	                                {this.props.options.map((shelf)=>(<option value={shelf.title} key={shelf.title}>{shelf.label}</option>))}
	                                <option value="none">None</option>

	                              </select>
	                            </div>
	                        </div>
	                    <div className="book-title">{this.props.book.title}</div>
	                <div className="book-authors">{this.props.book.author}</div>
	            </div>

			)
	}
}

Book.propTypes = {
	book: PropTypes.object,
	updateBooks: PropTypes.func,
	options: PropTypes.arrayOf(PropTypes.object)
}

export default Book;