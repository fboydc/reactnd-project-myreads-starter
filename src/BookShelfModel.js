export default class Shelf {

  constructor(title, label){
    this.title = title;
    this.label = label;
    this.shelfOptions = [];
    this.books = []

  }


  addShelfOption(shelf){
    this.shelfOptions.push({title: shelf.title, label: shelf.label});
  }

  addBook(book){

    this.books.push(book);
  }

  removeBook(book){
    let index = this.books.indexOf(book);
    if(index !== -1) {
      return this.books.splice(index, 1);
    }
  }

}

