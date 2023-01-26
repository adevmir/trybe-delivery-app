import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import apiAxios from '../services/axios';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [redirectLogout, setRedirectLogout] = useState(false);

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

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <NavBar />
      { productsList.length > 0 && productsList.map((product, index) => (
        <div key={ index }>
          <h3 data-testid={ `customer_products__element-card-title-${product.id}` }>
            { product.name }
          </h3>
          <p data-testid={ `customer_products__element-card-price-${product.id}` }>
            { product.price.replace(/\./, ',') }
          </p>
          <img
            alt={ product.name }
            src={ product.urlImage }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            Adicionar
          </button>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            Remover
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          { redirectLogout && <Redirect to="/login" /> }
        </div>
      )) }
    </div>
  );
}

export default Products;
