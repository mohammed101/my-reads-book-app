import React from 'react';
import { BookShelf } from './BookShelf';

const bookShelfsTypes = ['currentlyReading','wantToRead','read'];
// const bookShelfsTypes = [
//   { key: 'currentlyReading', name: 'Currently Reading' },
//   { key: 'wantToRead', name: 'Want to Read' },
//   { key: 'read', name: 'Have Read' },
// ];
export const BookList = ({allBooks}) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
      <h1>MyReads</h1>
    <div className='list-books-content'>
      <div>
      {
        bookShelfsTypes.map((shelf) => 
        (
        <BookShelf
         key={shelf}
          shelfTitle ={shelf}
          allBooks = {allBooks}
        />
        ))}
    </div>
    </div>
    </div>
    </div>

    
  );
}
