import PropTypes from 'prop-types';
import { formatDate } from '../utils';
import './OrderDetailsHeader.css'

export default function OrderDetailsHeader({ id,
  status, seller, sellDate, orderRole, isSeller, isCustomer, sellerOrder }) {
  const testid = '_order_details__element-order-';
  return (
    <div className="details-header">
      <p
        data-testid={ `${orderRole + testid}details-label-order-id` }
        className="details-text"
      >
        PEDIDO
        {' '}
        { id }
      </p>
      <p
        data-testid={
          `${orderRole + testid}details-label-seller-name`
        }
        className="details-seller-name"
      >
        P.Vend:
        {' '}
        {seller}
      </p>
      <p
        data-testid={
          `${orderRole + testid}details-label-order-date`
        }
        className="details-text"
      >
        {formatDate(sellDate, 'pt-BR')}
      </p>
      {isCustomer && (
        <>
          <p
            data-testid={
              `${orderRole + testid}details-label-delivery-status${id}`
            }
            className="details-status"
            id={ `details-status-${status}` }
          >
            {status}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-delivery-check`
            }
            className="details-button"
            type="button"
            disabled
          >
            Marcar como entregue

          </button>
        </>
      )}
      {isSeller && (
        <>
          <p
            data-testid={
              `${orderRole + testid}details-label-delivery-status${id}`
            }
          >
            {sellerOrder.status}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-preparing-check`
            }
            type="button"
          >
            Preparar pedido

          </button>
          <button
            data-testid={
              `${orderRole}_order_details__button-dispatch-check`
            }
            type="button"
            disabled
          >
            Saiu para entrega

          </button>
        </>
      )}
    </div>
  );
}

OrderDetailsHeader.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  sellDate: PropTypes.string.isRequired,
  orderRole: PropTypes.string.isRequired,
  isSeller: PropTypes.bool.isRequired,
  isCustomer: PropTypes.bool.isRequired,
  sellerOrder: PropTypes.string.isRequired,
};
