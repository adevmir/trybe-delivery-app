import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import OrderDetails from './Pages/OrderDetails';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import CustomersSales from './Pages/CustomerOrders';
import SellerSales from './Pages/SellerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/orders" component={ CustomersSales } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/seller/orders" component={ SellerSales } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
