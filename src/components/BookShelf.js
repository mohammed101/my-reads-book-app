import React from 'react';
import { Book } from './Book';
export const BookShelf = ({shelfTitle}) => {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        {/* <ol className="books-grid">
        </ol> */}
        <Book/>
        <Book/>
        <Book/>
      </div>
    </div>
    );
}