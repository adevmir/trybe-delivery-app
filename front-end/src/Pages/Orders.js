import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
// import apiAxios from '../services/axios';
import useSales from '../hooks/useSales';

function CostumersSales() {
  // const history = useHistory();
  // const [ordersList, setOrdersList] = useState([]);

  const { sales } = useSales();

  return (
    <div>
      <NavBar />
      { console.log(sales) && sales.map((order, index) => (
        <div key={ index }>
          <Link
            to={ `/costumer/orders/${order.id}` }
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
                  { order.date }
                </p>
                <p data-testid={ `customer_orders__element-card-price-${order.id}` }>
                  R$
                  { order.price }
                </p>
              </div>
            </div>
          </Link>
        </div>
      )) }
    </div>
  );
}

export default CostumersSales;
