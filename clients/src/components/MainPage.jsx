import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import { FaShoppingCart } from 'react-icons/fa';
import Data from "./Data";

const MainPage = () => {
  const [products, setProducts] = useState(Data);

  const [searchInput, setSearchInput] = useState('');
  const [lastSearchTerm, setLastSearchTerm] = useState('');




const handleSearch = () => {
  // If searchInput is empty, show all products
  if (searchInput.trim() === '') {
    setProducts(Data);
  } else {

    const filteredProducts = Data.filter(product =>
     
      product.category.toLowerCase().includes(searchInput.toLowerCase())
    );

  
    setProducts(filteredProducts);
    setLastSearchTerm(searchInput);
  }
};




return (

<Router>
<div className="navbar">
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
  
      </li>
     
    </ul>
        {/* Add search input and button */}
        <div className='search-container'>

      
        <input type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      
  </nav>
  <Routes>
 
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={<ProductList products={products} 
     />}
    />
  </Routes>
</div>
</Router>
  );
};

export default MainPage;