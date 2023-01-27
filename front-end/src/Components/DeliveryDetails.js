import useSubmitOrders from '../hooks/useSubmitOrder';

export default function DeliveryDetails() {
  const { handleSubmit } = useSubmitOrders();

  return (
    <div>
      <p>Detalhes e Endereço para Entrega</p>

      <form onSubmit={ handleSubmit }>
        <label htmlFor="select-seller">
          <select
            data-testid="customer_checkout__select-seller"
            id="select-seller"
            name="select-seller"
          >
            <option value="Fulana Pereira">Fulana Pereira</option>
            <option value="Ciclano Silveira">Ciclano Silveira</option>
          </select>
        </label>

        <label htmlFor="input-address">
          <input
            type="text"
            name="input-address"
            id="input-address"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="input-address-number">
          <input
            type="number"
            id="input-address-number"
            name="input-address-number"
            data-testid="customer_checkout__input-address-number"
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
