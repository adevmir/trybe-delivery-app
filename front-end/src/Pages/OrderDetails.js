import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import useOrders from '../hooks/useOrders';
import { fixedToTwoDecimalDigits } from '../utils';

export default function OrderDetails() {
  const { id } = useParams();

  const { ordersDetails, cart } = useOrders(id);
  const total = useMemo(() => cart
    ?.reduce((acc, el) => acc + (el.quantity * el.price), 0), [cart]);

  return (
    <>
      <NavBar />
      <main>
        <p>Detalhe do Pedido</p>

        {
          ordersDetails !== null
        && (
          <div>
            <OrderDetailsHeader
              status={ ordersDetails?.status }
              id={ ordersDetails?.id }
              sellDate={ ordersDetails?.saleDate }
              seller={ ordersDetails?.seller.name }
            />
            <OrderDetailsTable orders={ cart } />
            <div
              data-testid="customer_order_details__element-order-total-price"
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
