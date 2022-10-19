import React from 'react';
import { BookShelf } from './BookShelf';

const bookShelfsTypes = ['currentlyReading;','wantToRead','read'];
export const BookList = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookShelf/>
    <BookShelf/>
    <BookShelf/>
    </div>
    
  );
}
