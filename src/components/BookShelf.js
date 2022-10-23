import React from 'react';
import { Book } from './Book';
export const BookShelf = ({shelfKey,shelfOfBook,allBooks,updateBookShelfStatus,getBooks}) => {
  //console.log('in shelf  component ',getBooks)shelfKey
  //console.log('in shelf   key is  ',shelfKey)
    return (
      <div id={shelfKey} className="bookshelf">
      <h2 className="bookshelf-title ">{shelfOfBook.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
           allBooks
           .filter(book => (book.shelf === shelfOfBook.key))
           .map( book=> 
              (
              <Book 
                key={book.id}
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