import React, { useEffect, useState } from 'react';
import { Redirect, Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import useUserRole from '../hooks/useUserRole';

function NavBar() {
  const [userName, setUserName] = useState('');
  const [redirectLogout, setRedirectLogout] = useState(false);
  const { pathname } = useLocation();
  const { isSeller, isCustomer } = useUserRole();

  const getUserName = () => {
    // colocando no state o nome encontrado na chave user do localStorage
    const userData = localStorage.getItem('user');
    const userObj = userData ? JSON.parse(userData) : null;
    if (userObj != null) setUserName(userObj.name);
  };

  const toLogout = () => {
    localStorage.clear('user');
    setRedirectLogout(true);
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div>
      <nav>
        <div className="navbar-links">
          <div
            className={ `navbar-container ${pathname.includes('products')
              ? 'selected' : undefined}` }
          >
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              {/* { console.log(pathname) } */}
              PRODUTOS
            </Link>
          </div>
          <div
            className={ `navbar-container ${pathname.includes('orders')
              ? 'selected' : undefined}` }
          >
            {isCustomer && (
              <Link
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                PEDIDOS
              </Link>
            )}
            {isSeller && (
              <Link
                to="/seller/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                PEDIDOS
              </Link>
            )}
          </div>
        </div>
        <div className="navbar-items">
          <div className="navbar-container">
            <span data-testid="customer_products__element-navbar-user-full-name">
              { userName }
            </span>
          </div>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => toLogout() }
            className="navbar-button"
          >
            Sair
          </button>
        </div>
        {/* renderização condicional para caso a pessoa tenha apertado o botão logout vá para página de login e limpe o localStorage conforme a função 'toLogout' */}
        { redirectLogout && <Redirect to="/login" /> }
      </nav>
    </div>
  );
}

export default NavBar;
