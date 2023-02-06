import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import { fixedToTwoDecimalDigits } from '../utils';
import useSellerSales from '../hooks/useSellerSales';
import useUserRole from '../hooks/useUserRole';
import './OrderDetails.css';

export default function OrderDetails() {
  const { saleById, setSalesStatus, pending,
    saleStatus, deliveryOrder } = useSellerSales();
  const { isSeller, orderRole } = useUserRole();

  return (
    <>
      <NavBar />
      <main>
        <p className="details-title">Detalhe do Pedido</p>
        {saleById !== null && (
          <div className="card-details">
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
              className="details-total"
            >
              Total: R$
              {fixedToTwoDecimalDigits(saleById?.totalPrice)}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
