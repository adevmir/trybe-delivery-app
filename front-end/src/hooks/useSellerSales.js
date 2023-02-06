import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  requestSalesBySeller,
  requestSellerSalesById,
  requestUpdateStatus,
} from '../services/requests';
import { HTTP_STATUS } from '../utils/config';
import { getFromLocalStorage } from '../utils';
import useUserRole from './useUserRole';

export default function useSellerSales() {
  const [sales, setSales] = useState(null);
  const [saleById, setSalesById] = useState(null);
  const [saleStatus, setSalesStatus] = useState();
  const [pending, setPending] = useState(false);
  const [sellerOrder, setSellerOrder] = useState(null);
  const [deliveryOrder, setDeliveryOrder] = useState(false);
  const [onYourWay, setOnYourWay] = useState(false);

  const { id } = useParams();
  const { orderRole } = useUserRole();

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

  useEffect(() => {
    requestUpdateStatus(orderRole, id, saleStatus, jwt)
      .then(({ data, status }) => {
        if (status === HTTP_STATUS.OK) {
          console.log('UPDATED STATUS', status);
          console.log('update DATA', data);
        }
      }).catch((err) => { console.error(err); });
  }, [id, jwt, saleStatus, orderRole]);

  useEffect(() => {
    requestSellerSalesById(id, jwt)
      .then(({ data, status }) => {
        if (status === HTTP_STATUS.OK) setSalesById(data);
      })
      .catch((err) => { console.error(err); });
  }, [id, jwt]);

  useEffect(() => {
    console.log('saleStatus', saleStatus);
    if (saleStatus === undefined) return setSalesStatus(saleById?.status);
    if (saleStatus === 'Pendente') {
      setDeliveryOrder(true);
      setOnYourWay(true);
      return setPending(false);
    }
    if (saleStatus === 'Preparando') {
      setPending(true);
      setOnYourWay(true);
      return setDeliveryOrder(false);
    }
    if (saleStatus === 'Em Trânsito') {
      setDeliveryOrder(true);
      setPending(true);
      return setOnYourWay(false);
    }
    if (saleStatus === 'Entregue') {
      setDeliveryOrder(true);
      setOnYourWay(true);
      return setPending(true);
    }
  }, [saleStatus, saleById, id]);

  return {
    sales,
    setSalesStatus,
    saleStatus,
    pending,
    sellerOrder,
    setSellerOrder,
    deliveryOrder,
    saleById,
    onYourWay,
  };
}
