import { useMemo } from 'react';
import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import useOrders from '../hooks/useOrders';
import { fixedToTwoDecimalDigits } from '../utils';
import useUserRole from '../hooks/useUserRole';
import useSellerSales from '../hooks/useSellerSales';
import './OrderDetails.css';

export default function OrderDetails() {
  const { ordersDetails, cart } = useOrders();
  const { orderRole, isCustomer } = useUserRole();
  const { onYourWay, setSalesStatus, saleStatus } = useSellerSales();

  const total = useMemo(() => cart
    ?.reduce((acc, el) => acc + (el.quantity * el.price), 0), [cart]);

  console.log('orderDetails', ordersDetails);

  return (
    <>
      <NavBar />
      <main>
        <p className="details-title">Detalhe do Pedido</p>
        {
          ordersDetails !== null
          && (
            <div className="card-details">
              <OrderDetailsHeader
                status={ ordersDetails?.status }
                id={ ordersDetails?.id }
                sellDate={ ordersDetails?.saleDate }
                seller={ ordersDetails?.seller.name }
                orderRole={ orderRole }
                isCustomer={ isCustomer }
                onYourWay={ onYourWay }
                setSalesStatus={ setSalesStatus }
                saleStatus={ saleStatus }
              />
              <OrderDetailsTable
                orders={ ordersDetails?.products }
                orderRole={ orderRole }
              />
              <div
                data-testid={ `${orderRole}_order_details__element-order-total-price` }
                className="details-total"
              >
                Total: R$
                {fixedToTwoDecimalDigits(total)}
              </div>
            </div>
          )
        }
      </main>
    </>
  );
}
