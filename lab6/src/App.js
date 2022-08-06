import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { actAddProductStore } from './action/actProduct'
import { connect } from 'react-redux';
import Header from './common/Header';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Cart from './layout/Cart';
import Footer from './common/Footer';
import { useEffect, useState } from 'react';
import Login from './layout/Login';
import { gapi } from 'gapi-script';

function App(props) {

  useEffect(() => {
    const urlProducts = "https://lab6reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/products.json";
    fetch(urlProducts).then(res => res.json())
      .then(data => {
        props.AddProductStore(data);
      })
  }, []);

  //Login google
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "889274188153-91r1u7efb9cmur315pri116ccgeiu9h9.apps.googleusercontent.com",
        scope: ''
      })
    };
    gapi.load('client:auth2', start);

  });

  const [checkLogin, getCheckLogin] = useState(false);


  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route />
            <Route path='/' exact element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart checkLogin={checkLogin} />} />
            <Route path='/login' element={<Login getCheckLogin={getCheckLogin} checkLogin={checkLogin} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapDispatch = (dispatch) => {
  return {
    AddProductStore: (arrSach) => {
      dispatch(actAddProductStore(arrSach));
    },
  };
};
export default connect(null, mapDispatch)(App);

