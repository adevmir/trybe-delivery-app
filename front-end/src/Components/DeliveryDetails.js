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
        marginLeft: '-170px',
        backgroundColor: '#EAF1EF',
        borderRadius: '5p',
      } }
    >
      <p style={ { margin: 0, fontSize: 'x-large' } }>Detalhes e Endereço para Entrega</p>

      <form
        onSubmit={ handleSubmit }
        style={ { display: 'flex', gap: '1rem' } }
      >
        <label htmlFor="select-seller">
          <span style={ { fontSize: 'x-large' } }>
            Vendedor responsável
          </span>
          <select
            data-testid="customer_checkout__select-seller"
            id="select-seller"
            name="sellerId"
            style={ { display: 'block', fontSize: 'x-large' } }
          >
            <option value="2">Fulana Pereira</option>
          </select>
        </label>

        <label
          htmlFor="input-address"
          style={ { fontSize: 'x-large' } }
        >
          Endereço de entrega
          <input
            type="text"
            name="deliveryAddress"
            id="input-address"
            data-testid="customer_checkout__input-address"
            placeholder="Rua do bobos"
            style={ { display: 'block', fontSize: 'x-large' } }
          />
        </label>

        <label
          htmlFor="input-address-number"
          style={ { fontSize: 'x-large' } }
        >
          Número
          <input
            type="number"
            id="input-address-number"
            name="deliveryNumber"
            data-testid="customer_checkout__input-address-number"
            placeholder="0"
            style={ { display: 'block', fontSize: 'x-large' } }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          style={ {
            color: 'white',
            fontStyle: 'uppercase',
            padding: '0.4rem 1rem',
            fontSize: '27px',
            borderRadius: '15px',
            backgroundColor: '#2FC18C',
            fontWeight: 'bold',
            width: '350px',
            marginLeft: '310px',
            marginTop: '105px',
            height: '70px',
            position: 'absolute',
          } }
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
