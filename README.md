# My Reads

**My Reads** is your ultimate book reading app. It provides you with an organized virtual book shelf, which you can use to organize your reads, to-reads, and currently reading. Our current version only contains three book shelves: "Want to Read", "Currently Reading", and "Reads". However,it is robust enough to support N number of book shelves.
** **
## Getting Started

### Requirements ###

#### Browser Requirements ####
Please get the latest version of **Google Chrome**, **Safari**, or **Firefox**.

#### Required Libraries ####
These dependencies are required by the application. Please make sure you have **Node** installed in your machine, otherwise please do so before doing anything else. For more information on how to install node, please see **"How do I Install the Application?"** section. These dependencies are already included in package.json, so installation steps required to install them are minimal:
1.**Prop Types**
2. **React**
3. **React-dom**
4. **react-router-dom**
5. **react-notify-toast**


Please see the **Libraries** section for more information.
** **
#### How do I Install the Application? ####

**Install Node**
This application uses NPM, therefore it is required that you install it Node.js in your local machine. Please go [here](https://nodejs.org/en/download/) and download the installer for your OS. NPM is included with Node, so when you install Node you will get NPM automatically.

**Clone This Repository/Download Resources**
Make a clone of this repository in your local machine using your terminal/shell/bash/command prompt.

**Install Dependencies**
After cloning a copy in your machine, all you need to do is `cd` to your the root directory of the application (In this case**reactnd-project-myreads-starter\**) and type the command  `npm install`. This will install all the required libraries specified above, and you are now ready to run the application.

** **
### How do I Run The Application? ###

Our application is built using the create-react-app build tool, which includes the create-react npm package. This package allows us to run a development server, which comes handy when testing/developing. To run our application, `cd` to the root directory (in this case **reactnd-project-myreads-starter**\/) and type the following from your terminal/bash/shell/command prompt: `npm start`. A development web server should be launched at **port 3000**, therefore to access the application you should type in the following URL in your browser:

http://localhost:3000/

This should take you to the initial page of the application.

** **
### How Do I Use This Application? ###

You will have three sections in the landing page: each section represents a book shelf. The three sections labeled: "Want to Read", "Currently Reading", and "Read" contain books which fall under this category. You can move books between shelves by clicking the down-pointing arrow in each book and selecting the appropiate shelf in the side menu. If you which to remove a book from the shelf without adding it into any other shelf, just select the "none" option on the side menu.

You can also add a new book to any of your shelves. To do so, click on the (+) widget at the right-bottom corner of your screen and this will take you to the search page. You can also type /search at the end of the URL in your address bar. You will see a search bar, in which you can type the book you are looking for. **Please we wary:** Our backend API will only present results for the following search terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

So you might find that your query for a book title or author did not match any results. Use these terms to search for books only. In the results you will see that any books that are shown in your book shelf will have that shelf set when clicking on the down-pointed arrow. If you select another book shelf (or any, for books that show "none"), it will appear in your bookshelf;
you can see this by selecting the back arrow on the search bar, or by clicking the  back button in your browser (or just deleting the /search string in the URL).


** **
### Libraries ##

**Prop Types**
Used for documenting and restricting types passed to components.
For more information please go [here](https://www.npmjs.com/package/prop-types).

**React**
The engine behind the the React.js library. Allows us to define components, elements, lifecycle hooks, etc. For more information please go [here](https://www.npmjs.com/package/react).

**React DOM**
Allows us to use the React library with the DOM. For more information please go [here](https://www.npmjs.com/package/react-dom).

**React Router DOM**
Used for handling URL re-routing, allowing us to create single page applications but maintining the URL structure.

**React Notify Toast**
Used to show notifications (UI messages) to the user.










