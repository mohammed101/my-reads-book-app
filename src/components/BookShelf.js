import React from 'react';
import { Book } from './Book';
export const BookShelf = ({shelfOfBook,allBooks,updateBookShelfStatus}) => {
  console.log(shelfOfBook);
  // console.log(shelfTitle);
  <h2>{shelfOfBook}</h2>
    return (
      <div id={shelfOfBook.key} className="bookshelf">
      <h2 className="bookshelf-title ">{shelfOfBook.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
           allBooks
           .filter(book => (book.shelf === shelfOfBook.key))
           .map( book=> 
              (
              <Book 
                bookKey={book.id}
               book ={book}
               updateBookShelfStatus ={updateBookShelfStatus}
               />
              ))};
        </ol>
      </div>
    </div>
    );
}