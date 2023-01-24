import CheckoutTable from '../components/CheckoutTable';
import DeliveryDetails from '../components/DeliveryDetails';

export default function Checkout() {
  return (
    <div>
      <p
        style={ {
          backgroundColor: 'green',
          width: '100%',
          padding: '1rem 3rem',
          justifyText: 'center' } }
      >
        Nav bar
      </p>
      <CheckoutTable />
      <DeliveryDetails />
    </div>
  );
}
