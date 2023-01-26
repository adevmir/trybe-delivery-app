import { Redirect } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

function Register() {
  const { setName, setEmail, setPassword, register, error, submitSignup } = useSignup();

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
          onClick={ submitSignup }
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
