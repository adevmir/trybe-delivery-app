import { useEffect, useState } from 'react';
import { requestSalesByCostumer } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';

export default function useSales() {
  const [sales, setSales] = useState(null);

  // const req = getFromLocalStorage('user');
  const jwt = getFromLocalStorage('user')?.token;

  useEffect(() => {
    requestSalesByCostumer(jwt)
      .then(({ data, status }) => {
        if (status === HTTP_STATUS.OK) {
          setSales(data);
        }
      })
      .catch((err) => { console.error(err); });
  }, [jwt]);

  return {
    sales,
  };
}
