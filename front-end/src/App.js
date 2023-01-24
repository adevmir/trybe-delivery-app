import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import PageNotFound from './Pages/PageNotFound';
import OrderDetails from './Pages/OrderDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exatc path="/" component={ Login } />
      <Route path="*" component={ PageNotFound } />
    </Switch>
  );
}

export default App;
