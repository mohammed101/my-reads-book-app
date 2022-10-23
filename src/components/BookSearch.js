import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import * as bookAPI from '../BooksAPI';
import { Book } from './Book';

export const BookSearch = ({updateBookShelfStatus,getBooks}) => {

// getAllBookSFromSearch();
//   }, [searchValueFromInput]);

      const [searchItems , setSearchItems] = useState([])

  const onChangeSearchInputHandler = async(searchValue)=>
  {
       const res = await bookAPI.search(searchValue);
       setSearchItems(res);
  }
  return (
<div className="search-books">
<div className="search-books-bar">
  <Link to="/" className="close-search">
  Close Search
  </Link>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title, author, or ISBN"
      onChange={ e => onChangeSearchInputHandler(e.target.value)}
    />
  </div>
  {/* <h1> {searchValueFromInput}</h1> */}
</div>
<div className="search-books-results">
  <ol className="books-grid">
  {
   searchItems.map(book=>(
    <Book 
     key={book.id}
     book ={book}
     updateBookShelfStatus ={updateBookShelfStatus}
     getBooks ={getBooks}
     
     />
    ))};
    </ol>
    <Link
                    to='/'
                    className="return-home">
                  </Link>
</div>
</div>
  );
}
