import PropTypes, { string, number } from 'prop-types';
import { fixedToTwoDecimalDigits } from '../utils';

export default function OrderDetailsTable({ orders, orderRole }) {
  const testid = '_order_details__element-order-';
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, index) => (
          <tr key={ order.id }>
            <td
              data-testid={
                `${orderRole + testid}table-item-number-${index}`
              }
            >
              {index + 1}

            </td>
            <td
              data-testid={ `${orderRole + testid}table-name-${index}` }
            >
              {order.name}

            </td>
            <td
              data-testid={
                `${orderRole + testid}table-quantity-${index}`
              }
            >
              {!order.quantity && (1)}
              {order.quantity}

            </td>
            <td
              data-testid={

                `${orderRole + testid}table-unit-price-${index}`

              }
            >
              R$
              {order.price}
            </td>
            <td
              data-testid={
                `${orderRole + testid}table-sub-total-${index}`
              }
            >
              R$
              {!order.quantity && (fixedToTwoDecimalDigits(Number(order.price * 1)))}
              {order.quantity
                && (fixedToTwoDecimalDigits(Number(order.price) * order.quantity))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape(
    {
      id: number,
      name: string,
      quantity: number,
      price: string,
    },
  )),
}.isRequired;
