import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

function NavBar() {
  const [userName, setUserName] = useState('');
  const [redirectLogout, setRedirectLogout] = useState(false);

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
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Pedidos
        </Link>
        <span data-testid="customer_products__element-navbar-user-full-name">
          { userName }
        </span>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => toLogout() }
        >
          Logout
        </button>
        {/* renderização condicional para caso a pessoa tenha apertado o botão logout vá para página de login e limpe o localStorage conforme a função 'toLogout' */}
        { redirectLogout && <Redirect to="/login" /> }
      </nav>
    </div>
  );
}

export default NavBar;
