import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import OrderDetails from './Pages/OrderDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
