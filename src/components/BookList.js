import React from 'react';
import { BookShelf } from './BookShelf';

const bookShelfsTypes = ['currentlyReading;','wantToRead','read'];
export const BookList = ({allBooks}) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
      <h1>MyReads</h1>
    <div className='list-books-content'>
      <div>
      {
        bookShelfsTypes.map(shlef => (
        <BookShelf
        key = {shlef}
          shelfTitle ={shlef}
          allBooks = {allBooks}
        />
        ))}
    </div>
    </div>
    </div>
    </div>

    
  );
}
