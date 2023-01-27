import CheckoutTable from '../Components/CheckoutTable';
import DeliveryDetails from '../Components/DeliveryDetails';
import NavBar from '../Components/NavBar';
import useCheckout from '../hooks/useCheckout';
import useSubmitOrders from '../hooks/useSubmitOrder';

export default function Checkout() {
  const { orders, handleItemRemoval, totalPrice } = useCheckout();
  const { handleSubmit } = useSubmitOrders({ products: orders, totalPrice });

  return (
    <div>
      <NavBar />
      <CheckoutTable
        orders={ orders }
        handleItemRemoval={ handleItemRemoval }
        totalPrice={ totalPrice }
      />
      <DeliveryDetails handleSubmit={ handleSubmit } />
    </div>
  );
}
