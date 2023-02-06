import ProptTypes from 'prop-types';
import { fixedToTwoDecimalDigits } from '../utils';

export default function CheckoutTable({ orders, handleItemRemoval, totalPrice }) {
  // const tdStyles = { padding: '0.4rem 0.8rem' };

  return (
    <div>
      <div className="div-checkout-table">
        <p>Finalizar pedidos</p>
        <table style={ { boxShadow: '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3)' } }>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
          {orders?.map((el, i) => (
            <tr key={ el.id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
                // style={ { backgroundColor: 'green', ...tdStyles } }
                className="item-number"
              >
                {i + 1}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
                // style={ { backgroundColor: 'grey', ...tdStyles } }
                className="name-item"
              >
                {el.name}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                // style={ { backgroundColor: 'green', ...tdStyles } }
                className="quantity-item"
              >
                {el.quantity}

              </td>
              <td
                // style={ { backgroundColor: 'purple', ...tdStyles } }
                className="unit-price"
              >
                R$
                <span
                  data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
                >
                  {fixedToTwoDecimalDigits(el.price)}
                </span>
              </td>
              <td
                // style={ { backgroundColor: 'blue', ...tdStyles } }
                className="sub-total"
              >
                R$
                <span
                  data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                >
                  {fixedToTwoDecimalDigits(el.quantity * el.price)}
                </span>

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                className="item-remove"
              >
                <button
                  type="button"
                  // style={ { backgroundColor: 'green', ...tdStyles } }
                  onClick={ () => handleItemRemoval(el.id) }
                  className="button-remove"
                >
                  Remover

                </button>
                {' '}
              </td>
            </tr>
          ))}
        </table>
        <p className="total-price">
          Total: R$
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            {fixedToTwoDecimalDigits(totalPrice)}

          </span>
        </p>
      </div>
    </div>
  );
}

CheckoutTable.propTypes = {
  orders: ProptTypes.arrayOf(
    ProptTypes.shape(
      {
        name: ProptTypes.string.isRequired,
        price: ProptTypes.number.isRequired,
        quantity: ProptTypes.number.isRequired,
        id: ProptTypes.number.isRequired,
      },
    ),
  ),
  handleItemRemoval: ProptTypes.func.isRequired,
  totalPrice: ProptTypes.number.isRequired,
}.isRequired;
