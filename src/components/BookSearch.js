import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as bookAPI from '../BooksAPI';
import { Book } from './Book';

export const BookSearch = ({allBooks,updateBookShelfStatus}) => {
      const [searchItems , setSearchItems] = useState([])
      const [queryError , setQueryError] = useState(''); 

  const onChangeSearchInputHandler = async(searchValue)=>
  {
    if (searchValue.trim() !=='')
    {
      
      await bookAPI.search(searchValue).then(async data => {
        if(data.error)
        {
          setQueryError('');
          setSearchItems([]);
        }else
        {
          setQueryError('');
          setSearchItems(data);
        }
      });
     
    }else if (searchValue.trim() === ''){
      setQueryError('please write a valid search item');
   setSearchItems([]);
    }
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
</div>
<div className="search-books-results">
  <ol className="books-grid">
  {searchItems.length > 0 ?
   searchItems.map(book=>{

    const isFoundInHomePageBooks = allBooks.find(b => b.id === book.id);
    if(isFoundInHomePageBooks)
    {
      book.shelf = isFoundInHomePageBooks.shelf;
    }
    else
    {
      book.shelf ="none";
    }
    return <Book 
    key={book.id}
    book ={book}
     updateBookShelfStatus ={updateBookShelfStatus}
     />
   }):
   <h1 style={{marginTop:"80px"}}> {queryError}</h1> 
   };
    </ol>
    <Link
    to='/'
    className="return-home">
  </Link>
</div>
</div>
  );
}
