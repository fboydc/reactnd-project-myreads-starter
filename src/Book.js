import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import {notify} from 'react-notify-toast';

class Book extends Component {



	switchShelf(){
		let select = document.getElementById(this.props.book.id);
		let val = select.options[select.selectedIndex].value;
		notify.show("making changes...please wait.", "info", 1000, "#FFFFFF");
		BooksAPI.update(this.props.book, val).then((data)=>{
			this.props.updateBooks(this.props.book, val);
		});
	}






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

export default Book;