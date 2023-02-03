import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import useSellerSales from '../hooks/useSellerSales';
import './Orders.css';

function SellerSales() {
  const history = useHistory();
  const { sales } = useSellerSales();

  const newDate = (date) => new Date(date);

  return (
    <div>
      <NavBar />
      <div className="orders">
        { sales?.map((order, index) => (
          <button
            type="button"
            key={ index }
            onClick={ () => history.push(`/seller/orders/${order.id}`) }
            className="card-order"
          >
            <div className="order">
              <p className="order-text">Pedido</p>
              <p
                data-testid={ `seller_orders__element-order-id-${order.id}` }
                className="order-id"
              >
                { order.id }
              </p>
            </div>
            <div
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              className="order-status"
              id={ `order-status-${order.status}` }
            >
              { order.status }
            </div>
            <div>
              <p
                data-testid={ `seller_orders__element-order-date-${order.id}` }
                className="order-date-and-value"
              >
                { newDate(order.saleDate).toLocaleDateString('pt-br') }
              </p>
              <div className="order-date-and-value">
                <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
                  <span> R$ </span>
                  { `${Number(order.totalPrice)
                    .toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }
                </p>
              </div>
            </div>
            <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
              {order.address}
            </p>
          </button>
        )) }
      </div>
    </div>
  );
}

export default SellerSales;
