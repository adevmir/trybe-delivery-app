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
        headers: { authorization: token },
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
