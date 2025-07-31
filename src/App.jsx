import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Product from './Product';
import Service from './Service';
import Contact from './Contact';
import Cart from './Cart';
import Whistlist from './Whistlist'

const App = () => {
  const[user,setUser]=useState([])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/login' element={<Login val={user} />} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='cart' element={<Cart/>} />
        <Route path='whistlist' element={<Whistlist/>} />
      </Routes>
    </Router>
  );
};

export default App;
