import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [error] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = email.match(regex);
    const passwordLength = password.length >= Number('6');
    if (emailRegex && passwordLength) setLogin(false);
    if (!emailRegex && passwordLength) setLogin(true);
  }, [email, password]);

  return (
    <div>
      <Redirect to="/login" />
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
          disabled={ login }
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
