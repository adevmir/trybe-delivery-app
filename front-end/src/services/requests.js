import apiAxios from './axios';

export const requestSignupUser = (reqBody) => {
  try {
    const { data, status } = apiAxios.post('/register', reqBody);
    return { data, status };
  } catch (err) {
    return { error: err.message };
  }
};

export default {};
