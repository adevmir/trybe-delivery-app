import { Redirect, useHistory } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import './Register.css';

function Register() {
  const { setName, setEmail, setPassword, register, error, submitSignup } = useSignup();
  const history = useHistory();

  return (
    <div>
      <Redirect to="/register" />
      <form className="form-class-register">
        <h1 className="title-app"> App de Delivery</h1>
        <div className="div-class-register">
          <label htmlFor="name">
            Nome
            <input
              type="name"
              placeholder="Insira seu nome"
              data-testid="common_register__input-name"
              onChange={ (event) => setName(event.target.value) }
              className="common_register__input"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Insira seu e-mail"
              data-testid="common_register__input-email"
              onChange={ (event) => setEmail(event.target.value) }
              className="common_register__input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              placeholder="Insira sua senha"
              data-testid="common_register__input-password"
              onChange={ (event) => setPassword(event.target.value) }
              className="common_register__input"
            />
          </label>
          <button
            type="button"
            data-testid="common_register__button-register"
            disabled={ register }
            onClick={ submitSignup }
            className="common_register__button-register"
          >
            Cadastrar
          </button>
          <button
            type="button"
            onClick={ () => history.push('/') }
            className="common_register__button-login"
          >
            Faça Login
          </button>
        </div>
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
