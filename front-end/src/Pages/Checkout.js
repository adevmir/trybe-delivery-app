import CheckoutTable from '../Components/CheckoutTable';
import DeliveryDetails from '../Components/DeliveryDetails';
import NavBar from '../Components/NavBar';
import useCheckout from '../hooks/useCheckout';
import useSubmitOrders from '../hooks/useSubmitOrder';
import './Checkout.css';

export default function Checkout() {
  const { orders, handleItemRemoval, totalPrice } = useCheckout();
  const { handleSubmit } = useSubmitOrders({ products: orders, totalPrice });

  return (
    <div>
      <NavBar />
      <div className="delivery-div">
        <CheckoutTable
          orders={ orders }
          handleItemRemoval={ handleItemRemoval }
          totalPrice={ totalPrice }
        />
        <DeliveryDetails handleSubmit={ handleSubmit } />
      </div>
    </div>
  );
}
