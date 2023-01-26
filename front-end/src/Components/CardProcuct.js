import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function CardProduct({ product, index, getTotal }) {
  const [quantity, setQuantity] = useState(0);
  const isFirstRender = useRef(true);

  const refreshCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const newItem = { ...product, quantity };
    if (quantity !== '') {
      if (cartItems === null) {
        localStorage.setItem('cart', JSON.stringify([newItem]));
      }
      if (cartItems !== null) {
        const deleteRepeats = cartItems.filter((item) => item.id !== product.id);
        const addNewItem = [...deleteRepeats, newItem];
        const deleteZeros = addNewItem.filter((item) => item.quantity !== 0);
        localStorage.setItem('cart', JSON.stringify(deleteZeros));
      }
    }
    getTotal();
  };

  const setQuantityCondition = (event) => {
    const { value } = event.target;
    if (Number(value) <= 0) setQuantity(0);
    if (Number(value) > 0) setQuantity(Number(value));
  };

  useEffect(() => {
    if (!isFirstRender.current) refreshCart();
    isFirstRender.current = false;
  }, [quantity]);

  return (
    <div>
      <div key={ index }>
        <h3 data-testid={ `customer_products__element-card-title-${product.id}` }>
          { product.name }
        </h3>
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          { `R$ ${product.price.replace(/\./, ',')}` }
        </p>
        <img
          alt={ product.name }
          src={ product.urlImage }
          width="100px"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          onClick={ () => {
            setQuantity(quantity !== '' ? quantity + 1 : 0);
          } }
        >
          Adicionar
        </button>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          onClick={ () => {
            setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
          } }
        >
          Remover
        </button>
        <input
          type="number"
          value={ quantity }
          onChange={ (event) => setQuantityCondition(event) }
          onFocus={ () => setQuantity('') }
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
        />
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  getTotal: PropTypes.func.isRequired,
};

export default CardProduct;
