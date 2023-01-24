import React from 'react';
import { Redirect } from 'react-router-dom';

function Register() {
  const [error] = useState(false);
  return (
    <div>
      <Redirect to="/register" />
      <h1> Cadastro </h1>
      <form>
        <input
          type="name"
          placeholder="Insira seu nome"
          data-testid="common_register__input-name"
        />
        <input
          type="email"
          placeholder="Insira seu e-mail"
          data-testid="common_register__input-email"
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_register__input-password"
        />
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
      {error && (
        <span
          data-testid="common_register__element-invalid_register"
        >
          E-mail/senha invalidos.
        </span>
      )}
    </div>
  );
}

export default Register;
