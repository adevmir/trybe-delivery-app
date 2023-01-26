import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import apiAxios from '../services/axios';

function Products() {
  const [productsList, setProductsList] = useState([]);

  const renderProducts = async () => {
    try {
      const { data } = await apiAxios.get('/customer/products');
      setProductsList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    renderProducts();
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
            { product.price }
          </p>
          <img
            alt={ product.name }
            src=""
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
        </div>
      )) }
    </div>
  );
}

export default Products;
