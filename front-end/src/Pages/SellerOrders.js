import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import useSellerSales from '../hooks/useSellerSales';

function SellerSales() {
  const { sales } = useSellerSales();

  const newDate = (date) => new Date(date);

  return (
    <div>
      <NavBar />
      { sales?.map((order, index) => (
        <div key={ index }>
          <Link
            to={ `/seller/orders/${order.id}` }
            data-testid={ `seller_orders__element-order-id-${order.id}` }
          >
            Pedido
            { order.id }
            <div>
              <div data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
                { order.status }
              </div>
              <div>
                <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
                  { newDate(order.saleDate).toLocaleDateString() }
                </p>
                <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
                  { `${Number(order.totalPrice)
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }
                </p>
              </div>
              <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
                {order.address}
              </p>
            </div>
          </Link>
        </div>
      )) }
    </div>
  );
}

export default SellerSales;
