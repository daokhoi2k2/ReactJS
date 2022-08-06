import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Cart from './component/Cart';
import { useEffect } from 'react';
import ListBook from './component/ListBook';
import AddBook from './component/AddBook';
import { connect } from 'react-redux';
import { actDuaSachVaoStore } from './actions/actBook';

const App = (props) => {

  useEffect(()=>{  
   
      let url = "http://localhost:3500/book";

      fetch(url).then(res=> res.json())
      .then(data=>{
          props.DuaSachVaoStore(data);
          console.log("got book in database", data);
      }); 
  },[]);

  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>Contact</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/product'>Product</Link>
          </nav>
        </header>
        <main>
          <article>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product' element={<ListBook />} />
            </Routes>
            <input></input>
          </article>
          <aside>
            <AddBook />
          </aside>
        </main>
        <footer>FOOTER</footer>
      </div>
    </BrowserRouter>
  );
}

const mapDispatch = (dispatch) => {
  return {
    DuaSachVaoStore: (arrBook) => {
      dispatch(actDuaSachVaoStore(arrBook));
    },
  };
};

export default connect(null, mapDispatch)(App);
