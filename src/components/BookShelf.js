import React from 'react';
import { Book } from './Book';
export const BookShelf = ({shelfTitle,allBooks}) => {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
           allBooks
           .filter(book => (book.shelf === shelfTitle))
           .map( book=> 
              (
              <Book 
               key={book.id}
               book ={book}
               />
              ))};
        </ol>
      </div>
    </div>
    );
}