import PropTypes from 'prop-types';
import { formatDate } from '../utils';

export default function OrderDetailsHeader({ id,
  status, seller, sellDate, orderRole, deliveryOrder,
  isSeller, isCustomer, pending, setSalesStatus, onYourWay, saleStatus }) {
  const testid = '_order_details__element-order-';
  console.log('status customer', status);

  if (saleStatus === undefined) {
    setSalesStatus(status);
  }

  return (
    <div>
      <p data-testid={ `${orderRole + testid}details-label-order-id` }>
        PEDIDO
        {' '}
        { id }
      </p>
      <p
        data-testid={
          `${orderRole + testid}details-label-seller-name`
        }
      >
        P.Vend:
        {' '}
        {seller}
      </p>
      <p
        data-testid={
          `${orderRole + testid}details-label-order-date`
        }
      >
        {formatDate(sellDate, 'pt-BR')}
      </p>
      {isCustomer && (
        <>
          <p
            data-testid={
              `${orderRole + testid}details-label-delivery-status${id}`
            }
          >
            {saleStatus}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-delivery-check`
            }
            type="button"
            disabled={ onYourWay }
            onClick={ () => setSalesStatus('Entregue') }
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
            {status}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-preparing-check`
            }
            type="button"
            disabled={ pending }
            onClick={ () => setSalesStatus('Preparando') }
          >
            Preparar pedido

          </button>
          <button
            data-testid={
              `${orderRole}_order_details__button-dispatch-check`
            }
            type="button"
            disabled={ deliveryOrder }
            onClick={ () => setSalesStatus('Em Trânsito') }
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
  pending: PropTypes.bool.isRequired,
  setSalesStatus: PropTypes.func.isRequired,
  deliveryOrder: PropTypes.bool.isRequired,
  onYourWay: PropTypes.bool.isRequired,
  saleStatus: PropTypes.string.isRequired,
};
