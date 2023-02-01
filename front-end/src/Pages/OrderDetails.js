import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import useOrders from '../hooks/useOrders';
import { fixedToTwoDecimalDigits } from '../utils';
import useSellerSales from '../hooks/useSellerSales';

export default function OrderDetails() {
  const { id } = useParams();

  const { sales } = useSellerSales();
  const { ordersDetails, cart, isSeller, orderRole, isCustomer } = useOrders(id);
  const total = useMemo(() => cart
    ?.reduce((acc, el) => acc + (el.quantity * el.price), 0), [cart]);

  const sellerOrder = sales?.find((order) => order.id === JSON.parse(id));

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
                isSeller={ isSeller }
                isCustomer={ isCustomer }
                orderRole={ orderRole }
              />
              <OrderDetailsTable
                orders={ cart }
                orderRole={ orderRole }
              />

              <div
                data-testid={ `${orderRole}_order_details__element-order-total-price` }
              >
                Total: R$
                {isCustomer
                  && (
                    fixedToTwoDecimalDigits(total)

                  )}

                {isSeller
                  && (
                    fixedToTwoDecimalDigits(sellerOrder.totalPrice)
                  )}
              </div>
            </div>
          )
        }

      </main>
    </>
  );
}
