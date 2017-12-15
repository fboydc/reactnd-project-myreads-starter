export default class BookModel {

	constructor(id, title, thumbnail, author, shelf){
		this.id = id;
		this.title = title;
		this.thumbnail = thumbnail;
		this.author = author;
		this.shelf = shelf;
	}

	changeShelf(shelf){
		this.shelf = shelf;
	}


}