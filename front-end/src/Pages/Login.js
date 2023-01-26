import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import apiAxios from '../services/axios';

function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [redirectProducts, setRedirectProducts] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginDisabled, setLoginDisabled] = useState(true);

  // criado a conexão de frontend com back atraves do AXIOS
  const toLogin = async () => {
    try {
      const { data } = await apiAxios.post('/login', { email, password });
      setRedirectProducts(true);
      // insere os dados do usuario no localStorage após login com dados válidos
      localStorage.setItem('user', JSON.stringify(data));
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = email.match(regex);
    const passwordLength = password.length >= Number('6');
    if (emailRegex && passwordLength) setLoginDisabled(false);
    if (!emailRegex && passwordLength) setLoginDisabled(true);
  }, [email, password]);

  return (
    <div>
      <Redirect to="/login" />
      { redirectProducts && <Redirect to="/customer/products" /> }
      <form>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          data-testid="common_login__input-email"
          onChange={ (event) => setEmail(event.target.value) }
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          onChange={ (event) => setPassword(event.target.value) }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ loginDisabled }
          onClick={ toLogin }
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Cadastre-se
        </button>
        { error && (
          <span
            data-testid="common_login__element-invalid-email"
          >
            Este e-mail/senha estão incorretos ou não existem.
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;
