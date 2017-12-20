/***********************************************
Class: BookModel
Description:
Represents a book in our application, uniquely identified by it's id propety.

Properties:
-id: String
 Description: the unique identified for this book.

-title: String
 Description: the title of our book, as returned by the BooksAPI.

-thumbnail: String
 Description: the url to thumbnail used as the book's image.

-author: String
 Description: the full name of our book's author, as returned by the BooksAPI.

-shelf: String
 Description: the shelf of our book, as returned by the BooksAPI.

***********************************************/


export default class BookModel {

	constructor(id, title, thumbnail, author, shelf){
		this.id = id;
		this.title = title;
		this.thumbnail = thumbnail;
		this.author = author;
		this.shelf = shelf;
	}



}