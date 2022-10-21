import React from 'react';
import { BookShelf } from './BookShelf';
import {Link} from 'react-router-dom';

//const bookShelfsTypes = ['currentlyReading','wantToRead','read'];
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
      <div>
      {
        bookShelfsTypes.map((shelf) => 
        (
        <BookShelf
          shelfOfBook ={shelf}
          allBooks = {allBooks}
          updateBookShelfStatus ={updateBookShelfStatus}
        />
        ))}
          <div className="open-search">
            <Link to="/search">
              Add New Book
           </Link>
          </div>
    </div>
    </div>
    </div>

    
  );
}
