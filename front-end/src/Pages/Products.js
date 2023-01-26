import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import CardProduct from '../Components/CardProcuct';
import apiAxios from '../services/axios';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [redirectLogout, setRedirectLogout] = useState(false);
  const [redirectCheckout, setRedirectCheckout] = useState(false);
  const [total, setTotal] = useState(0);

  const renderProducts = async (token) => {
    try {
      // faz a requisição get na rota com o token encontrado no localStorage ( que foi armazendo no login)
      const { data } = await apiAxios.get(
        '/customer/products',
        { headers: { authorization: token } },
      );
      setProductsList(data);
    } catch (err) {
      // caso o token seja invalido, o usuario será deslogado
      setRedirectLogout(true);
    }
  };

  const getToken = () => {
    // buscando o token armazenado no localStora após o login
    const { token } = JSON.parse(localStorage.getItem('user'));
    renderProducts(token);
  };

  const getTotal = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems.length > 0) {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += Number(item.price) * item.quantity;
      });
      localStorage.setItem('total', JSON.stringify(sum.toFixed(2)));
      setTotal(sum.toFixed(2).replace(/\./, ','));
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <NavBar />
      { productsList.length > 0 && productsList.map((product, index) => (
        <CardProduct
          product={ product }
          index={ index }
          key={ index }
          getTotal={ getTotal }
        />))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => setRedirectCheckout(true) }
      >
        Carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">{ total }</span>
      </button>
      { redirectLogout && <Redirect to="/login" /> }
      { redirectCheckout && <Redirect to="/customer/checkout" /> }
    </div>
  );
}

export default Products;
