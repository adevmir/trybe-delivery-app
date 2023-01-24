import { useState } from 'react';

/**
 * @typedef {Object} IOrder
 * @property {string} description
 * @property {number} qty
 * @property {number} unitPrice

* @typedef {Object} IUseCheckoutReturn
 * @property {function} handleItemRemoval
 * @property {IOrder[]} orders
 * @property {function} setOrders
 *
 * @returns { IUseCheckoutReturn }
 */
export default function useCheckout() {
  const [orders, setOrders] = useState([
    { description: 'prod 1', unitPrice: 1, qty: 1 },
    { description: 'prod 2', unitPrice: 10, qty: 1 },
    { description: 'prod 3', unitPrice: 10, qty: 1 },
    { description: 'prod 4', unitPrice: 10, qty: 1 },
    { description: 'prod 5', unitPrice: 10, qty: 1 },
  ]);

  const handleItemRemoval = (productId) => {
    console.log(productId);
    console.log('remove product from the state based on its identifier)');
    setOrders(orders.filter((_el, i) => i !== productId));
  };

  return { handleItemRemoval, orders, setOrders };
}
