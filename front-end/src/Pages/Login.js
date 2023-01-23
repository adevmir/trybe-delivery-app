import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const [error] = useState(false);
  return (
    <div>
      <Redirect to="/login" />
      <form>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          data-testid="common_login__input-email"
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Cadastre-se
        </button>
        {error && (
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
