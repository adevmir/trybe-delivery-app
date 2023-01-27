import ProptTypes from 'prop-types';
import { fixedToTwoDecimalDigits } from '../utils';

export default function CheckoutTable({ orders, handleItemRemoval, totalPrice }) {
  const tdStyles = { padding: '0.4rem 0.8rem' };

  return (
    <div>
      <p>Finalizar pedidos</p>

      <table style={ { boxShadow: '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3)' } }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((el, i) => (
            <tr key={ el.id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
                style={ { backgroundColor: 'green', ...tdStyles } }
              >
                {i + 1}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
                style={ { backgroundColor: 'grey', ...tdStyles } }
              >
                {el.name}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                style={ { backgroundColor: 'green', ...tdStyles } }
              >
                {el.quantity}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
                style={ { backgroundColor: 'purple', ...tdStyles } }
              >
                {fixedToTwoDecimalDigits(el.price)}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                style={ { backgroundColor: 'blue', ...tdStyles } }
              >
                {fixedToTwoDecimalDigits(el.quantity * el.price)}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
              >
                <button
                  type="button"
                  style={ { backgroundColor: 'green', ...tdStyles } }
                  onClick={ () => handleItemRemoval(el.id) }
                >
                  Remover

                </button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {fixedToTwoDecimalDigits(totalPrice)}

        </span>
      </p>
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
