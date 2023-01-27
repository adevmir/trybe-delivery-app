import { useEffect, useState } from 'react';
import getFromLocalStorage from '../utils/getFromLocalStorage';
import removeEntryFromLocalStorage from '../utils/removeEntryFromLocalStorage';

/**
 * @typedef {Object} IOrder
 * @property {number} id
 * @property {string} name
 * @property {string} urlImage
 * @property {number} price
 * @property {number} quantity

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
    const data = getFromLocalStorage('cart');
    setOrders(data);
  };

  useEffect(() => {
    retriveCart();
  }, []);

  const handleItemRemoval = (productId) => {
    removeEntryFromLocalStorage('cart', { key: 'id', value: productId });
    setOrders(getFromLocalStorage('cart'));
  };

  return { handleItemRemoval, orders, setOrders };
}
