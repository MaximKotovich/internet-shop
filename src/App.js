import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Header = lazy(() => import('./header/header'));
const ProductPage = lazy(() => import('./productPage/productPage'));
const BasketPage = lazy(() => import('./basketPage/basketPage'));
const Contacts = lazy(() => import('./contacts/contacts'));
const Catalog = lazy(() => import('./catalog/catalog'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={ProductPage} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/catalog" component={Catalog} />
          </Switch>
          <BasketPage />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
