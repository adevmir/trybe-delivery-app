import { useHistory } from 'react-router-dom';
import { requestSubmitOrder } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';

export default function useSubmitOrders({ products, totalPrice }) {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      sellerId,
      deliveryAddress,
      deliveryNumber,
    } = Object.fromEntries([...new FormData(e.target)]);

    const reqBody = ({
      sellerId,
      products: products.map((prod) => ({ id: prod.id, quantity: prod.quantity })),
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    });

    const user = getFromLocalStorage('user');

    const { data, status } = await requestSubmitOrder(reqBody, user?.token);
    if (status === HTTP_STATUS.CREATED) {
      history.push(`/customer/orders/${data.id}`);
    }
  };

  return {
    handleSubmit,
  };
}
