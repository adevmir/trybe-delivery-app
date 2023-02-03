import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import useOrders from '../hooks/useOrders';
import { fixedToTwoDecimalDigits } from '../utils';
import SellerDetailsHeader from '../Components/SellerDetailsHeader';
import SellerDetailsTable from '../Components/SellerDetailsTable';

export default function SellerOrderDetails() {
  const { id } = useParams();

  const { ordersDetails, cart } = useOrders(id);
  const total = useMemo(
    () => cart?.reduce((acc, el) => acc + el.quantity * el.price, 0),
    [cart],
  );

  return (
    <>
      <NavBar />
      <main>
        <p>Detalhe do Pedido</p>

        {ordersDetails !== null && (
          <div>
            <SellerDetailsHeader
              id={ id }
              status={ ordersDetails?.status }
              sellDate={ ordersDetails?.saleDate }
            />
            <SellerDetailsTable />
            <div data-testid="seller_order_details__element-order-total-price">
              Total: R$
              {fixedToTwoDecimalDigits(total)}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
