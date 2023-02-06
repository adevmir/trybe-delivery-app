import PropTypes, { string, number } from 'prop-types';
import './OrderDetailsTable.css';
import { fixedToTwoDecimalDigits } from '../utils';

export default function OrderDetailsTable({ orders, orderRole }) {
  const testid = '_order_details__element-order-';
  return (
    <table>
      <thead className="order-details-header">
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
              className="order-details-id"
            >
              {index + 1}

            </td>
            <td
              data-testid={ `${orderRole + testid}table-name-${index}` }
              className="order-details-name"
            >
              {order.name}

            </td>
            <td
              data-testid={
                `${orderRole + testid}table-quantity-${index}`
              }
              className="order-details-quantity"
            >
              {!order.quantity && (1)}
              {order.quantity}

            </td>
            <td
              data-testid={

                `${orderRole + testid}table-unit-price-${index}`
              }
              className="order-details-price"
            >
              <span> R$ </span>
              {(Number(order.price))
                .toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </td>
            <td
              data-testid={
                `${orderRole + testid}table-sub-total-${index}`
              }
              className="order-details-sub-total"
            >
              <span> R$ </span>
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
