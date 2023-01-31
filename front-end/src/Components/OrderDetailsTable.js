import PropTypes, { string, number } from 'prop-types';

export default function OrderDetailsTable({ cart, orderRole }) {
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
        {cart?.map((order, index) => (
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
