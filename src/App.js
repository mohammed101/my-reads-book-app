import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { BookList } from './components/BookList';
import { NotFound404 } from './components/common/NotFound404';
import { BookSearch } from './components/BookSearch';
import {useState,useEffect} from 'react';
import * as bookAPI from './BooksAPI';
// import axios from 'axios'
import './App.css';  
export default  function App() {

const [allBooks, setAllBooks] = useState([]);
const [bookShelfedUpdated, setBookShelfedUpdated] = useState();

useEffect(() => {
const getBooks = async() =>
{
const res = await bookAPI.getAll();
// console.log(res.data),
setAllBooks(res);
};
getBooks();
}, []);

useEffect( () => {
if(bookShelfedUpdated){

bookAPI.update(bookShelfedUpdated,bookShelfedUpdated.shelf )
} },[bookShelfedUpdated])

const updateBookShelfStatus = (book,changeBookShelf) => {

const booknow = {
...book,
shelf:changeBookShelf
}
setBookShelfedUpdated(booknow);
const newAllBooks = allBooks.filter(book => book.id != booknow.id);
setAllBooks([...newAllBooks,booknow]);
}

return (
<div className="App">
<Router>
  <Routes>
  <Route exact path='/' element={< BookList allBooks ={allBooks}/>}></Route>
  <Route exact path='/search' element={< BookSearch />}></Route>
  {/* <Route path='*'element ={<NotFound404/>} ></Route>	   */}
  </Routes>
</Router>
</div>
);
}
