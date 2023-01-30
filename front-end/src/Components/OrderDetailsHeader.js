import PropTypes from 'prop-types';
import { formatDate } from '../utils';

export default function OrderDetailsHeader({ id, status, seller, sellDate }) {
  return (
    <div>
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        PEDIDO
        {' '}
        {id}
        ;
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P.Vend:
        {' '}
        {seller}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {formatDate(sellDate, 'pt-BR')}
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${id}`
        }
      >
        {status}
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        Marcar com entregue
      </button>
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  sellDate: PropTypes.string.isRequired,
};
