import { useEffect, useState } from 'react';
import { requestSalesBySeller } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';

export default function useSellerSales() {
  const [sales, setSales] = useState(null);

  const jwt = getFromLocalStorage('user')?.token;

  useEffect(() => {
    requestSalesBySeller(jwt)
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
