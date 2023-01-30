import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { requestOrderById } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';

export default async function useOrders({ id, token }) {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    requestOrderById(id, token)
      .then(({ data, status }) => {
        if (status === HTTP_STATUS.OK) {
          setOrders(data);
        }
      })
      .catch((err) => { alert(err); });
  }, [id, token]);

  return {
    orders,
  };
}

useOrders.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
}.isRequired;
