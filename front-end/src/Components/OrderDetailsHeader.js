import PropTypes from 'prop-types';
import { formatDate } from '../utils';

export default function OrderDetailsHeader({ id,
  status, seller, sellDate, orderRole, isSeller, isCustomer }) {
  const testid = '_order_details__element-order-';
  // console.log('orderrole in details header:', orderRole);
  // console.log('isSeller in details header:', isSeller);
  // console.log('isCustomer in details header:', isCustomer);

  return (
    <div>
      <p data-testid={ `${orderRole + testid}details-label-order-id` }>
        PEDIDO
        {' '}
        {id}
        ;
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
      <p
        data-testid={
          `${orderRole + testid}details-label-delivery-status${id}`
        }
      >
        {status}
      </p>
      {/* <button
        data-testid={
          `${orderRole}_order_details__button-delivery-check`
        }
        type="button"
        disabled
      > */}
      {/* Marcar com entregue
      </button> */}
      {isCustomer && (
        <button
          data-testid={
            `${orderRole}_order_details__button-delivery-check`
          }
          type="button"
          disabled
        >
          Marcar como entregue

        </button>)}
      {isSeller && (
        <button
          data-testid={
            `${orderRole}_order_details__button-delivery-check`
          }
          type="button"
        >
          Saiu para entrega

        </button>
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
};
