import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestOrderById } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';

export default function useOrders() {
  const [ordersDetails, setOrdersDetails] = useState(null);

  const { id } = useParams();

  const jwt = getFromLocalStorage('user')?.token;
  const cart = getFromLocalStorage('cart');

  useEffect(() => {
    requestOrderById(id, jwt)
      .then(({ data, status }) => {
        if (status === HTTP_STATUS.OK) {
          setOrdersDetails(data);
        }
      })
      .catch((err) => { console.error(err); });
  }, [id, jwt, setOrdersDetails]);

  return {
    ordersDetails,
    cart,
  };
}
