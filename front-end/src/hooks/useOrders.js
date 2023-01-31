import { useEffect, useState } from 'react';
import { requestOrderById } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';

export default function useOrders(id) {
  const [ordersDetails, setOrdersDetails] = useState(null);
  const [orderRole, setOrderRole] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  console.log('orderRole:', orderRole);

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
  }, [id, jwt]);

  useEffect(() => {
    const user = getFromLocalStorage('user');
    setOrderRole(user?.role);

    if (orderRole !== 'customer') {
      setIsSeller(true);
      return setIsCustomer(false);
    }
    setIsCustomer(true);
    return setIsSeller(false);
  }, [orderRole, setOrderRole]);

  return {
    ordersDetails,
    cart,
    orderRole,
    isCustomer,
    isSeller,
  };
}
