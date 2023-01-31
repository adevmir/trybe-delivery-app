import React from 'react';
import NavBar from '../Components/NavBar';
import ProductListing from '../Components/OrderListing';

function OrderClient() {
  return (
    <div>
      <NavBar />
      <p>Products</p>
      { listSearchedItems.map(({ id, title, price, thumbnail }) => (
        <div key={ id }>
          <ProductListing
            id={ id }
            title={ title }
            price={ price }
            thumbnail={ thumbnail }
          />

          {/* Botão que adiciona itens ao carrinho */}
          <button
            type="button"
            onClick={ () => addItemCart(id, title, price, thumbnail) }
            data-testid="product-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      )) }
    </div>
  );
}

export default OrderClient;
