import CheckoutTable from '../Components/CheckoutTable';
import DeliveryDetails from '../Components/DeliveryDetails';
import NavBar from '../Components/NavBar';

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <CheckoutTable />
      <DeliveryDetails />
    </div>
  );
}
