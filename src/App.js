import React from 'react';
import './App.css';
import Header from "./header/header.js"
import ProductPage from "./productPage/productPage.js"
import BasketPage from "./basketPage/basketPage.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductPage />
      <BasketPage />
    </div>
  );
}

export default App;
