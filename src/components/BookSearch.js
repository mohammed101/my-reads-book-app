import React, { useState } from 'react';
import {Link} from 'react-router-dom';
export const BookSearch = () => {


  // to test state on input of search control 
  // const [searchValueFromInput , setSearchValueFromInput] = useState('')
  const onChangeSearchInputHandler = (searchValue)=>
  {
    //setSearchValueFromInput(searchValue)
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
  <ol className="books-grid"></ol>
</div>
</div>
  );
}
