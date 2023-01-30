import PropTypes, { string, number } from 'prop-types';

export default function OrderDetailsTable({ cart }) {
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
        {cart?.map((order, index) => (
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
              {order.name}

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
              {order.price}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              R$
              {Number(order.price) * order.quantity}
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
