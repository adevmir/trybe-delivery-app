import CheckoutTable from '../components/CheckoutTable';

export default function Checkout() {
  return (
    <div>
      <p
        style={ {
          backgroundColor: 'green',
          padding: '1rem 3rem',
          justifyText: 'center' } }
      >
        Nav bar
      </p>
      <CheckoutTable />
    </div>
  );
}
