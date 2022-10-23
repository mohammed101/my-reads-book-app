import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BookList } from './components/BookList';
import { NotFound404 } from './components/common/NotFound404';
import { BookSearch } from './components/BookSearch';
import {useState,useEffect} from 'react';
import * as bookAPI from './BooksAPI';
import './App.css';  
export default  function App() {
const [allBooks, setAllBooks] = useState([]);
const [bookShelfedUpdated, setBookShelfedUpdated] = useState();

const getBooks = async() =>
{
const res = await bookAPI.getAll();
setAllBooks(res);
};

useEffect(() => {
  debugger;
getBooks();
}, []);

useEffect( () => {
if(bookShelfedUpdated){
bookAPI.update(bookShelfedUpdated,bookShelfedUpdated.shelf );
} },[bookShelfedUpdated])

const updateBookShelfStatus = (book,changeBookShelf) => {
const booknow = {
...book,
shelf:changeBookShelf
}
setBookShelfedUpdated(booknow);
// want to make it in new shelf
// here after remove the book from old shelf
const newAllBooks = allBooks.filter(book => book.id !== booknow.id);
setAllBooks([...newAllBooks,booknow]);
}

return (
<div className="App">
<Router>
  <Routes>
  <Route exact path='/' element={< BookList allBooks ={allBooks} updateBookShelfStatus ={updateBookShelfStatus} getBooks = {getBooks} />}></Route>
  <Route exact path='/search' element={< BookSearch updateBookShelfStatus ={updateBookShelfStatus} getBooks = {getBooks} />}></Route>
  {/* <Route path='*'element ={<NotFound404/>} ></Route>	   */}
  </Routes>
</Router>
</div>
);
}
