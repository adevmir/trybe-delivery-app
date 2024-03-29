import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import useSales from '../hooks/useSales';
import './Orders.css';

function CustomersSales() {
  const history = useHistory();
  const { sales } = useSales();

  const newDate = (date) => new Date(date);

  const statusSelect = (statusS) => {
    if (statusS === 'Em Trânsito') return 'EmTrânsito';
    return statusS;
  };

  return (
    <div>
      <NavBar />
      {sales !== null && (

        <div className="orders">
          { sales?.map((order, index) => (
            <button
              type="button"
              key={ index }
              onClick={ () => history.push(`/customer/orders/${order.id}`) }
              className="card-order-costumer"
            >
              <div className="order">
                <p className="order-text">Pedido</p>
                <p
                  data-testid={ `customer_orders__element-order-id-${order.id}` }
                  className="order-id"
                >
                  { order.id }
                </p>
              </div>
              <div
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
                className={ `order-status-${statusSelect(order.status)}` }
              >
                { order.status }
              </div>
              <div>
                <p
                  data-testid={ `customer_orders__element-order-date-${order.id}` }
                  className="order-date-and-value"
                >
                  { newDate(order.saleDate).toLocaleDateString('pt-br') }
                </p>
                <div className="order-date-and-value">
                  <p
                    data-testid={ `customer_orders__element-card-price-${order.id}` }
                  >
                    <span> R$ </span>
                    { `${Number(order.totalPrice)
                      .toLocaleString('pt-br', { minimumFractionDigits: 2 })}` }
                  </p>
                </div>
              </div>
            </button>
          )) }
        </div>
      )}
    </div>
  );
}

export default CustomersSales;
