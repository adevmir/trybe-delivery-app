import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import CardProduct from '../Components/CardProduct';
import apiAxios from '../services/axios';
import './Products.css';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [redirectLogout, setRedirectLogout] = useState(false);
  const [redirectCheckout, setRedirectCheckout] = useState(false);
  const [checkoutDisabled, setCheckoutDisabled] = useState(true);
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
    const userData = localStorage.getItem('user');
    const userObj = userData ? JSON.parse(localStorage.getItem('user')) : null;
    if (userObj) renderProducts(userObj.token);
  };

  const getTotal = () => {
    // funcao que recupera todos os itens do carrinho se existir e soma item por item o seu preço * a qtd escolhida pelo usuario
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems.length > 0) {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += Number(item.price) * item.quantity;
      });
      // tirei o armazenamento anterior no local storage desse total e agora só armazena no state
      setTotal(sum.toFixed(2).replace(/\./, ','));
      // se a soma do carrinho for maior que zero, o botão p/ tela de checkout ficará habilitado
      if (sum > 0) setCheckoutDisabled(false);
      // se a soma for zero, significa que não existe nenhum item no carrinho. entao nao será possivel ir para tela de checkout
      if (sum === 0) setCheckoutDisabled(true);
    }
  };

  useEffect(() => {
    getToken();
  });

  return (
    <div>
      <NavBar />
      <div className="products">
        { productsList?.map((product, index) => (
        // criado componente para cards dos produtos p/ gerenciar a qtd de cada um no state proprio, enviado como props alguns valores q serao usados la e a funcao getTotal
          <CardProduct
            product={ product }
            index={ index }
            key={ index }
            getTotal={ getTotal }
          />))}
      </div>
      <button
        type="button"
        className="button-cart"
        data-testid="customer_products__button-cart"
        onClick={ () => setRedirectCheckout(true) }
        disabled={ checkoutDisabled }
      >
        Ver Carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">{ total }</span>
      </button>
      { redirectLogout && <Redirect to="/login" /> }
      { redirectCheckout && <Redirect to="/customer/checkout" /> }
    </div>
  );
}

export default Products;
