import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../utils';

export default function useUserRole() {
  const [orderRole, setOrderRole] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

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

  return { isSeller, isCustomer, orderRole };
}
