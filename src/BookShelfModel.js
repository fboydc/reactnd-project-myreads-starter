/***********************************************
Class: Shelf
Description:
A shelf represents a collection of books and uniquely identified by a title.
A relation to other shelves is also represented by it shelfOptions property.

Properties:
-title: String
 Description: the unique identifier for this shelf. It is the matching criteria
 used when comparing to other shelves, and look for books inside.

-label: String
 Description: the formatted string shown in the UI.

-shelfOptions: Array<object>
 Description: contains all the shelves in the application. This property
 is used to show the user the different shelves available when adding/removing
 or changing a book between shelves (click the (+) element in a book).

-books: Array<BookModel>
 contains all the books belonging to the shelf.

***********************************************/

export default class Shelf {

  constructor(title, label){
    this.title = title;
    this.label = label;
    this.shelfOptions = [];
    this.books = []

  }

  /**************************************************
  Method: addShelfOption
  Parameters: Shelf - BookShelfModel
  Returns: nothing
  Description:
  adds an object to our shelfOptions property. This object
  represents an option shown when clicking on the (+) element.
  **************************************************/
  addShelfOption(shelf){
    this.shelfOptions.push({title: shelf.title, label: shelf.label});
  }

  /**************************************************
  Method: addBook
  Parameters: book - BookModel
  Returns: nothing.
  Description:
  Adds a new book to our books property, as specified by the
  book parameter.
  **************************************************/
  addBook(book){

    this.books.push(book);
  }

  /**************************************************
  Method: removeBook
  Parameters: book - BookModel
  Returns: Array<BookModel> (if successful). False if unsuccessful.
  Description:
  removes a book from our books property, specified by book parameter.
  **************************************************/
  removeBook(book){
    let index = this.books.indexOf(book);
    if(index !== -1) {
      return this.books.splice(index, 1);
    }
  }

}

