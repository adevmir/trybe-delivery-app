import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import useSales from '../hooks/useSales';

function CustomersSales() {
  const { sales } = useSales();

  const newDate = (date) => new Date(date);
  console.log('aqui teste');

  return (
    <div>
      <NavBar />
      { console.log(sales) || sales?.map((order, index) => (
        <div key={ index }>
          <Link
            to={ `/customer/orders/${order.id}` }
          >
            <div>
              <p>Pedido</p>
              <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { order.id }
              </p>
            </div>
            <div>
              <div data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
                { order.status }
              </div>
              <div>
                <p data-testid={ `customer_orders__element-order-date-${order.id}` }>
                  { newDate(order.saleDate).toLocaleDateString() }
                </p>
                <p data-testid={ `customer_orders__element-card-price-${order.id}` }>
                  { `${Number(order.totalPrice)
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }
                </p>
              </div>
            </div>
          </Link>
        </div>
      )) }
    </div>
  );
}

export default CustomersSales;
