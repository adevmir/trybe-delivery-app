import PropTypes from 'prop-types';
import { formatDate } from '../utils';

export default function SellerDetailsHeader({ id, status, sellDate }) {
  return (
    <div>
      <p data-testid="seller_order_details__element-order-details-label-order-id">
        PEDIDO
        {' '}
        {id}
        ;
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {formatDate(sellDate, 'pt-BR')}
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </p>
      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
      >
        Preparar pedido
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
      >
        Saiu para entrega
      </button>
    </div>
  );
}

SellerDetailsHeader.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  sellDate: PropTypes.string.isRequired,
};
