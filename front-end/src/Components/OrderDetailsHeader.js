import PropTypes from 'prop-types';
import { formatDate } from '../utils';
import './OrderDetailsHeader.css';

export default function OrderDetailsHeader({ id,
  status, seller, sellDate, orderRole, deliveryOrder,
  isSeller, isCustomer, pending, setSalesStatus, onYourWay, saleStatus }) {
  const testid = '_order_details__element-order-';

  if (saleStatus === undefined) {
    setSalesStatus(status);
  }

  const statusSelect = (statusS) => {
    if (statusS === 'Em Trânsito') return 'EmTrânsito';
    return statusS;
  };

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
            className={ `details-status-${statusSelect(status)}` }
          >
            {saleStatus}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-delivery-check`
            }
            className="details-button"
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
            className={ `details-status-${statusSelect(status)}` }
          >
            {status}
          </p>
          <button
            data-testid={
              `${orderRole}_order_details__button-preparing-check`
            }
            className="details-seller-button"
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
            className="details-seller-button"
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
