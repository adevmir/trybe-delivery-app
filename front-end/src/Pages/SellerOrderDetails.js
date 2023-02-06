import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import { fixedToTwoDecimalDigits } from '../utils';
import useSellerSales from '../hooks/useSellerSales';
import useUserRole from '../hooks/useUserRole';

export default function OrderDetails() {
  const { saleById, setSalesStatus, pending,
    saleStatus, deliveryOrder } = useSellerSales();
  const { isSeller, orderRole } = useUserRole();

  return (
    <>
      <NavBar />
      <main>
        <div>
          {saleById !== null && (
            <>
              <OrderDetailsHeader
                status={ saleStatus }
                id={ saleById?.id }
                sellDate={ saleById?.saleDate }
                seller={ saleById?.seller.name }
                isSeller={ isSeller }
                orderRole={ orderRole }
                setSalesStatus={ setSalesStatus }
                pending={ pending }
                deliveryOrder={ deliveryOrder }
              />
              <OrderDetailsTable
                orders={ saleById?.products }
                orderRole={ orderRole }
              />
              <div
                data-testid={ `${orderRole}_order_details__element-order-total-price` }
              >
                Total: R$
                {fixedToTwoDecimalDigits(saleById?.totalPrice)}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
