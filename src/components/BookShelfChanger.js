import React from 'react';
import {useState,useEffect} from 'react';

export const BookShelfChanger = ({ book,updateBookShelfStatus}) => {
  const [changeBookShelf, setChangeBookShelf] = useState('');

  useEffect( () => {
     // eslint-disable-next-line eqeqeq
     if(changeBookShelf != ''){
      updateBookShelfStatus(book,changeBookShelf);
     }
  },[book, changeBookShelf, updateBookShelfStatus])

  const onSelectShlefChangeHandler = (updatedStatusOfBook) => {
    setChangeBookShelf(updatedStatusOfBook);
  }
    return (
      <div className="book-shelf-changer">
      <select
      defaultValue={book.shelf ? book.shelf : 'none'}
      onChange={e => onSelectShlefChangeHandler(e.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    );
}