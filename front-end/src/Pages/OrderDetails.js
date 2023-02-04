import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import useOrders from '../hooks/useOrders';
import { fixedToTwoDecimalDigits } from '../utils';
import useSellerSales from '../hooks/useSellerSales';
import './OrderDetails.css'

export default function OrderDetails() {
  const { id } = useParams();

  const { sales } = useSellerSales();
  const { ordersDetails, cart, isSeller, orderRole, isCustomer } = useOrders(id);
  const total = useMemo(() => cart
    ?.reduce((acc, el) => acc + (el.quantity * el.price), 0), [cart]);

  // sellerOrder = Pedido de acordo com o id recebido no params
  const sellerOrder = sales?.find((order) => order.id === JSON.parse(id));
  console.log(cart);

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
                isSeller={ isSeller }
                isCustomer={ isCustomer }
                orderRole={ orderRole }
                sellerOrder={ sellerOrder }
              />
              <OrderDetailsTable
                cart={ cart }
                orderRole={ orderRole }
              />

              <div
                data-testid={ `${orderRole}_order_details__element-order-total-price` }
                className="details-total"
              >
                <p>
                  Total: R$
                  {isCustomer
                    && (
                      fixedToTwoDecimalDigits(total)
                    )}
                  {isSeller
                    && (
                      fixedToTwoDecimalDigits(sellerOrder.totalPrice)
                    )}
                </p>
              </div>
            </div>
          )
        }
      </main>
    </>
  );
}
