import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {



	switchShelf(){
		//console.log(this);
		let select = document.getElementById(this.props.book.id);
		let val = select.options[select.selectedIndex].value;

		BooksAPI.update(this.props.book, val).then((data)=>{
			this.props.updateBooks(this.props.book.id, val);
		});
	}


	render(){

		let book = {
			id: this.props.book.id,
			title: this.props.book.title,
			thumbnail: this.props.book.imageLinks.thumbnail,
			author: this.props.book.authors[0],
			shelf: this.props.book.shelf
		}

		
		let shelves = {
			shelf_1: this.props.shelves.shelf_1,
			shelf_2:  this.props.shelves.shelf_2,
			shelf_3:  this.props.shelves.shelf_3
		}




		return (

	            <div className="book">
	                <div className="book-top">
	                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.thumbnail+')' }}></div>
	                        <div className="book-shelf-changer">
	                              <select  onChange={()=>{	
	                                						this.switchShelf();
	                                					}} id={book.id} value={book.shelf}>
	                                <option value="none" disabled>Move to...</option>					
	                                <option value="currentlyReading">{shelves.shelf_2.label}</option>
	                                <option value="wantToRead">{shelves.shelf_1.label}</option>
	                                <option value="read">{shelves.shelf_3.label}</option>
	                                <option value="none">None</option>		
	                               
	                              </select>
	                            </div>
	                        </div>
	                    <div className="book-title">{book.title}</div>
	                <div className="book-authors">{book.author}</div>
	            </div>

			)
	}
}

export default Book;