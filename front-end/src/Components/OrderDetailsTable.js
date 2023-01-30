import PropTypes, { string, number } from 'prop-types';

export default function OrderDetailsTable({ orders }) {
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
        {orders.map((order, index) => (
          <tr key={ order.id }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}

            </td>
            <td
              data-testid="customer_order_details__element-order-table-name-<index>"
            >
              {order.description}

            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {order.quantity}

            </td>
            <td
              data-testid={
                `ustomer_order_details__element-order-table-unit-price-${index}`
              }
            >
              R$
              {order.unitPrice}
            </td>
            <td
              data-testid="customer_order_details__element-order-table-sub-total-<index>"
            >
              R$
              {order.unitPrice * order.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(
    {
      id: number,
      description: string,
      quantity: number,
      unitPrice: number,
    },
  )),
}.isRequired;
