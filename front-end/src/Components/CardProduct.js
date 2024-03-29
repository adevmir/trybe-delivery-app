import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CardProduct.css';

function CardProduct({ product, index, getTotal }) {
  // recebi via props o objeto de cada produto, seu index e a funcao getTotal
  const [quantity, setQuantity] = useState(0);

  const refreshCart = () => {
    // recupero todos os itens do carrinho
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    // o novo item acrescentado será o objeto inteiro do produto e a quantidade escolhida pelo usuario(que estava no state)
    const newItem = { ...product, quantity };
    if (quantity !== '') {
      // se o carrinho for null (acrescenta primeiro item)
      if (cartItems === null) {
        localStorage.setItem('cart', JSON.stringify([newItem]));
      }
      // se o carrinho ja tiver itens (acrescente mais um)
      if (cartItems !== null) {
        // filtra para eliminar do carrinho todos os produtos com ids repetidos
        const deleteRepeats = cartItems.filter(
          (item) => item.id !== product.id,
        );
        const addNewItem = [...deleteRepeats, newItem];
        // filtra para retirar todos os produtos que agora tem quantidade zero
        const deleteZeros = addNewItem.filter((item) => item.quantity !== 0);
        localStorage.setItem('cart', JSON.stringify(deleteZeros));
      }
    }
    // executa a função abaixo toda vez que o carrinho for atualizado
    getTotal();
  };

  const setQuantityCondition = (event) => {
    // nessa função caso o numero colocado no input pelo usuario seja menor que zero, permanecerá zero
    const { value } = event.target;
    if (Number(value) <= 0) setQuantity(0);
    if (Number(value) > 0) setQuantity(Number(value));
  };

  useEffect(() => {
    // toda vez que a quantidade de produto for atualizada no state o carrinho tambem sera atualizado no localStorage
    refreshCart();
  }, [quantity]);

  return (
    <div key={ index } className="card-product">
      <p
        data-testid={ `customer_products__element-card-price-${product?.id}` }
        className="card-price"
      >
        {`R$ ${Number(product?.price).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}`}
      </p>
      <div className="card-image">
        <img
          alt={ product?.name }
          src={ product?.urlImage }
          data-testid={ `customer_products__img-card-bg-image-${product?.id}` }
        />
      </div>
      <div className="card-title-and-quantity">
        <h3
          data-testid={ `customer_products__element-card-title-${product?.id}` }
          className="card-title"
        >
          {product?.name}
        </h3>
        <div className="counter">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product?.id}` }
            onClick={ () => {
              // caso a quantity -1 seja menor que zero, permanece no zero, impedindo numeros negativos
              setQuantity(quantity - 1 > 0 ? quantity - 1 : 0);
            } }
          >
            -
          </button>
          <input
            type="number"
            value={ quantity }
            onChange={ (event) => setQuantityCondition(event) }
            onFocus={ () => setQuantity('') }
            data-testid={ `customer_products__input-card-quantity-${product?.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product?.id}` }
            onClick={ () => {
              // caso a quantity seja uma string vazia inserida pelo onFocus, altero para zero, senao acrescenta mais um ao clicar no "Adicionar"
              setQuantity(quantity !== '' ? quantity + 1 : 0);
            } }
          >
            +
          </button>
        </div>
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
