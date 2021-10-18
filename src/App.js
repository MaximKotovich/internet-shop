import React from 'react';
import './App.css';
import Header from "./header/header.js"
import ProductPage from "./productPage/productPage.js"
import BasketPage from "./basketPage/basketPage.js"
import {BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Route exact path= "/" component={ProductPage}/>
      <BasketPage />
    </div>
  </BrowserRouter>  
  );
}

export default App;
