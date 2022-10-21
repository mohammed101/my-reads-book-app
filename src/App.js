import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { BookList } from './components/BookList';
import { NotFound404 } from './components/common/NotFound404';
import { BookSearch } from './components/BookSearch';
import {useState,useEffect} from 'react';
import * as bookAPI from './BooksAPI';
// import axios from 'axios'
import './App.css';

    // Declare a new state variable, which we'll call "allBooks"
    // const [allBooks, setAllBooks] = useState([]);
    // const [allBooks, setAllBooks] = useState<{title: string; description: string}[]>([]);
    //get our books from api
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // useEffect(() => {
      // const getBooks =  async () = {
        //   try {
          //     res = await bookAPI.getAll(),
          //     console.log(res.data)
          //     setAllBooks(res);
          //  }catch(error) {
            //     console.log(error)
            //  }
            
            //   };
            //   getBooks();
            // }, []);
            
            //// eslint-disable-next-line react-hooks/rules-of-hooks
       
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
                }
             },[bookShelfedUpdated])

        const updateBookShelfStatus = (book,updatedStatusOfBook) => {

          const booknow = {
            ...book,
            shelf:updateBookShelfStatus
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
            <Route exact path='/home' element={< Home />}></Route>
            <Route path="/about" element={<About/>} />
            {/* <Route path='*'element ={<NotFound404/>} ></Route>	   */}
            </Routes>
        </Router>
       </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
