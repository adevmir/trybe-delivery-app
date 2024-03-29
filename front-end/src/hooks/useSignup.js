import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestSignupUser, requestAdminSignUp } from '../services/requests';
import { HTTP_STATUS } from '../utils/config';

export default function useSignup() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(true);
  const [error, setError] = useState(false);
  const [role, setRole] = useState('customer');
  const [tokenError, setTokenError] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const submitSignup = async () => {
    const { status } = await requestSignupUser({
      name, email, password,
    });
    if (status === HTTP_STATUS.CREATED) { return history.push('/customer/products'); }
    if (status === HTTP_STATUS.CONFLICT) { setError(true); }
  };

  const adminSignUp = async () => {
    const { status } = await requestAdminSignUp({
      name, email, password, role,
    });
    if (status === HTTP_STATUS.CREATED) {
      setTokenError(false);
      setError(false);
      setUserCreated(true);
    }
    if (status === HTTP_STATUS.TOKEN_ERROR) {
      setUserCreated(false);
      setError(false);
      setTokenError(true);
    }
    if (status === HTTP_STATUS.CONFLICT) {
      setTokenError(false);
      setUserCreated(false);
      setError(true);
    }
  };

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameLength = name.length >= Number('12');
    const emailRegex = email.match(regex);
    const passwordLength = password.length >= Number('6');
    if (nameLength && emailRegex && passwordLength) {
      setRegister(false);
      setError(false);
    }
    if (!nameLength || !emailRegex || !passwordLength) {
      setRegister(true);
    }
  }, [name, email, password, role]);

  return {
    setName,
    setEmail,
    setPassword,
    register,
    error,
    submitSignup,
    setRole,
    adminSignUp,
    tokenError,
    userCreated,
  };
}
