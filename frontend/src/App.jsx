import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App