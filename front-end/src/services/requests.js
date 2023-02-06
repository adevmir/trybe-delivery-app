import apiAxios from './axios';

export const requestSignupUser = async (reqBody) => {
  try {
    const { data, status } = await apiAxios.post('/register', reqBody);
    return { data, status };
  } catch (err) {
    return { error: err.response.data.message, status: err.response.status };
  }
};

export const requestSubmitOrder = async (reqBody, token) => {
  try {
    const { data, status } = await apiAxios
      .post('/customer/checkout', reqBody, {
        headers: { Authorization: token },
      });
    return { data, status };
  } catch (err) {
    return { error: err.response.data.message, status: err.response.status };
  }
};

export const requestAdminSignUp = async (reqBody) => {
  try {
    const JWT = localStorage.getItem('JWT');
    const { data, status } = await apiAxios.post(
      '/register/admin',
      reqBody,
      {
        headers: { Authorization: JWT },
      },
    );
    return { data, status };
  } catch (err) {
    return { error: err.response.data.message, status: err.response.status };
  }
};

export const requestOrderById = async (id, token) => {
  try {
    const { data, status } = await apiAxios.get(`/customer/orders/${id}`, {
      headers: { Authorization: token },
    });
    return { data, status, error: null };
  } catch (err) {
    return { error: err.response.data, status: err.response.status };
  }
};

export const requestSalesByCostumer = async (token) => {
  try {
    const user = localStorage.getItem('user');
    const { data, status } = await apiAxios.get(
      '/customer/orders',
      {
        user,
        headers: { Authorization: token },
      },
    );
    return { data, status, error: null };
  } catch (err) {
    return { error: err.response.data, status: err.response.status };
  }
};

export const requestSalesBySeller = async (token) => {
  try {
    const user = localStorage.getItem('user');
    const baseUrl = '/seller/orders';
    const { data, status } = await apiAxios.get(
      '/seller/orders',
      {
        baseUrl,
        user,
        headers: { Authorization: token },
      },
    );
    return { data, status, error: null };
  } catch (err) {
    return { error: err.response.data, status: err.response.status };
  }
};

export const requestSellerSalesById = async (id, token) => {
  try {
    const { data, status } = await apiAxios.get(
      `seller/orders/${id}`,
      {
        headers: { Authorization: token },
      },
    );
    return { data, status, error: null };
  } catch (err) {
    return { error: err.response.data, status: err.response.status };
  }
};

export const requestUpdateStatus = async (orderRole, id, req, token) => {
  try {
    const statusToPatch = {
      status: req,
    };
    const { data } = await apiAxios.patch(
      `${orderRole}/orders/${id}`,
      statusToPatch,
      {
        headers: { Authorization: token },
      },
    );
    return { data, error: null };
  } catch (err) {
    return { error: err.response.data };
  }
};
