import React from 'react';
import { BookShelfChanger } from './BookShelfChanger';
export const Book = ({bookKey, book ,updateBookShelfStatus,getBooks}) => {
  //console.log('in book component ',getBooks)
  return (
    <li id={bookKey}>
      <div className="book">
        <div className="book-top">
         <div className='book-cover'
         style={{
            width :128,
            height :193,
            backgroundImage:`url(${book?.imageLinks?.thumbnail})`
         }}      
         />
         <BookShelfChanger 
         book={book}
         updateBookShelfStatus ={updateBookShelfStatus}
         getBooks ={getBooks}
         />
        </div>
        {<div className="book-title">{book.title}</div> }
        <div className="book-title">{book.authors}</div>
      </div>
    </li>
  );
}