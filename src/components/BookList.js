import React from 'react';
import { BookShelf } from './BookShelf';
import { GoSearchPage } from './GoSearchPage';
const bookShelfsTypes = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Have Read' },
];
export const BookList = ({allBooks,updateBookShelfStatus}) => {
  return (
  <div className='list-books'>
      <div className='list-books-title'>
      <h1>MyReads</h1>
  </div>
  <div className='list-books-content'>
      {
        bookShelfsTypes.map((shelf) => 
        (
        <BookShelf
          shelfOfBook ={shelf}
          key ={shelf.key}
          allBooks = {allBooks}
          updateBookShelfStatus ={updateBookShelfStatus}
        />
        ))}
  </div>
  <GoSearchPage/>
  </div>
    
  );
}
