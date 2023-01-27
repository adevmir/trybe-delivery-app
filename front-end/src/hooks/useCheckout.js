import { useEffect, useState } from 'react';
import getFromLocalStorage from '../utils/getFromLocalStorage';

/**
 * @typedef {Object} IOrder
 * @property {string} name
 * @property {number} price
 * @property {number} quantity
 * @property {number} id

* @typedef {Object} IUseCheckoutReturn
 * @property {function} handleItemRemoval
 * @property {IOrder[]} orders
 * @property {function} setOrders
 *
 * @returns { IUseCheckoutReturn }
 */
export default function useCheckout() {
  const [orders, setOrders] = useState(null);

  const retriveCart = () => {
    const data = getFromLocalStorage({ key: 'cart' });
    setOrders(data);
  };

  useEffect(() => {
    retriveCart();
  }, []);

  const handleItemRemoval = (productId) => {
    console.log('remove product from the state based on its identifier)');
    setOrders(orders.filter((_el, i) => i !== productId));
  };

  return { handleItemRemoval, orders, setOrders };
}
