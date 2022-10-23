import React from 'react';
import {Link} from 'react-router-dom';
export const GoSearchPage = () => {
  return(
    <div className="open-search">
    <Link to="/search">
                <button>
                Add New Book
                </button>
    </Link>
 </div>
  );
}