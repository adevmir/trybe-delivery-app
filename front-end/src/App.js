import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import OrderDetails from './Pages/OrderDetails';
import Products from './Pages/Products';
import Register from './Pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/" component={ Login } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
