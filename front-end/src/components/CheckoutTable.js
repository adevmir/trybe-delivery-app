import { useMemo } from 'react';

export default function CheckoutTable() {
  const orders = [
    {
      description: 'Cerveja',
      qty: 1,
      unitPrice: 2,
    },
    {
      description: 'Refrigerante',
      qty: 2,
      unitPrice: 3,
    },
  ];

  const totalPrice = useMemo(
    () => orders.reduce((acc, el) => acc + (el.unitPrice * el.qty), 0),
  );

  const tdStyles = { padding: '0.4rem 0.8rem' };

  return (
    <div>
      <p>Finalizar pedidos</p>

      <table style={ { boxShadow: '0.5rem 0.5rem 0.5rem 0.5rem black' } }>
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
          {orders.forEach((el, i) => (
            <tr key={ el.description }>
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
                {el.description}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                style={ { backgroundColor: 'green', ...tdStyles } }
              >
                {el.qty}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
                style={ { backgroundColor: 'purple', ...tdStyles } }
              >
                {el.unitPrice}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                style={ { backgroundColor: 'blue', ...tdStyles } }
              >
                {el.qty * el.unitPrice}

              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
              >
                <button
                  type="button"
                  style={ { backgroundColor: 'green', ...tdStyles } }
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
        <span data-testid="customer_checkout__element-order-total-price" />
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}
