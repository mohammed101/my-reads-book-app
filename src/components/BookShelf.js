import React from 'react';
import { Book } from './Book';
export const BookShelf = ({shelfOfBook,allBooks,updateBookShelfStatus,getBooks}) => {
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
               getBooks ={getBooks}     
               />
              ))};
        </ol>
      </div>
    </div>
    );
}