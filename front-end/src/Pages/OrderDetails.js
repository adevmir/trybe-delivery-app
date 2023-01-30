import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import OrderDetailsHeader from '../Components/OrderDetailsHeader';
import OrderDetailsTable from '../Components/OrderDetailsTable';

export default function OrderDetails() {
  const { id } = useParams();
  const seller = 'Fulano da Silva';
  const sellDate = '01/01/2023';
  const status = 'PENDENTE';
  const orders = [{ id: '1', description: 'abs', quantity: '2', unitPrice: 2 }];
  const total = orders.reduce((acc, el) => acc + (el.quantity * el.unitPrice), 0);

  return (
    <>
      <NavBar />
      <main>
        <p>Detalhe do Pedido</p>

        <div>
          <OrderDetailsHeader
            status={ status }
            id={ id }
            sellDate={ sellDate }
            seller={ seller }
          />
          <OrderDetailsTable orders={ orders } />
          <div
            data-testid="customer_order_details__element-order-total-price"
          >
            Total: R$
            {total}
          </div>
        </div>
      </main>
    </>
  );
}
