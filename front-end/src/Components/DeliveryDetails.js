import PropTypes from 'prop-types';

export default function DeliveryDetails({ handleSubmit }) {
  return (
    <div
      style={ {
        boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.2)',
        padding: '0.4rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        gap: '1rem',
        width: 'fit-content',
      } }
    >
      <p style={ { margin: 0 } }>Detalhes e Endereço para Entrega</p>

      <form onSubmit={ handleSubmit } style={ { display: 'flex', gap: '1rem' } }>
        <label htmlFor="select-seller">
          <span>Vendedor responsável</span>
          <select
            data-testid="customer_checkout__select-seller"
            id="select-seller"
            name="sellerId"
            style={ { display: 'block' } }
          >
            <option value="2">Fulana Pereira</option>
          </select>
        </label>

        <label htmlFor="input-address">
          Endereço de entrega
          <input
            type="text"
            name="deliveryAddress"
            id="input-address"
            data-testid="customer_checkout__input-address"
            placeholder="Rua do bobos"
            style={ { display: 'block' } }
          />
        </label>

        <label htmlFor="input-address-number">
          Número
          <input
            type="number"
            id="input-address-number"
            name="deliveryNumber"
            data-testid="customer_checkout__input-address-number"
            placeholder="0"
            style={ { display: 'block' } }
          />
        </label>

        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          style={ {
            backgroundColor: 'green',
            color: 'white',
            fontStyle: 'uppercase',
            padding: '0.4rem 1rem' } }
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}

DeliveryDetails.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
