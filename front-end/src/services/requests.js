import apiAxios from './axios';

export const requestSignupUser = async (reqBody) => {
  try {
    const { data, status } = await apiAxios.post('/register', reqBody);
    return { data, status };
  } catch (err) {
    return { error: err.response.data.message, status: err.response.status };
  }
};

export const requestAdminSignUp = async (reqBody) => {
  try {
    const JWT = sessionStorage.getItem('JWT');
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

export default {};
