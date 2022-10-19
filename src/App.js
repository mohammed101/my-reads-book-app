import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { BookList } from './components/BookList';
export default  function App() {
  return (
    <div className="App">
              <h1>eeeeee</h1>
             <Router>
            <Routes>
             <Route exact path='/' element={< BookList />}></Route>
             <Route exact path='/home' element={< Home />}></Route>
             <Route exact path='/' element={< Home />}></Route>
              <Route path="/about" element={<About/>} />
                 {/* <Route path='*'element ={<NotFound404/>} ></Route>	    */}
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
