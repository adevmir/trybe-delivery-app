import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(true);
  const [error, setError] = useState(false);

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
      setError(true);
    }
  }, [name, email, password]);

  return (
    <div>
      <Redirect to="/register" />
      <h1> Cadastro </h1>
      <form>
        <input
          type="name"
          placeholder="Insira seu nome"
          data-testid="common_register__input-name"
          onChange={ (event) => setName(event.target.value) }
        />
        <input
          type="email"
          placeholder="Insira seu e-mail"
          data-testid="common_register__input-email"
          onChange={ (event) => setEmail(event.target.value) }
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_register__input-password"
          onChange={ (event) => setPassword(event.target.value) }
        />
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ register }
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
