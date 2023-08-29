import { useEffect, useState } from 'react';
import { getFromLocalStorage, removeEntryFromLocalStorage } from '../utils';

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
 * @property {number} totalOrders
 *
 * @returns { IUseCheckoutReturn }
 */
export default function useCheckout() {
  const [orders, setOrders] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const retriveCart = () => {
    setOrders(getFromLocalStorage('cart'));
  };

  useEffect(() => {
    retriveCart();
  }, []);

  useEffect(() => {
    const total = orders?.reduce((acc, el) => acc + (el.price * el.quantity), 0);
    setTotalPrice(total || 0);
  }, [orders]);

  const handleItemRemoval = (productId) => {
    removeEntryFromLocalStorage('cart', { key: 'id', value: productId });
    retriveCart();
  };

  return { handleItemRemoval, orders, setOrders, totalPrice };
}
