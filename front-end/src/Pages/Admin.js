import { Redirect } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

function Admin() {
  const {
    setName, setEmail, setPassword, setRole,
    register, error, adminSignUp, tokenError, userCreated } = useSignup();

  return (
    <div>
      <Redirect to="/admin/manage" />
      <h1> Cadastro </h1>
      <form>
        <input
          type="name"
          placeholder="Insira um nome"
          data-testid="admin_manage__input-name"
          onChange={ (event) => setName(event.target.value) }
        />
        <input
          type="email"
          placeholder="Insira um e-mail"
          data-testid="admin_manage__input-email"
          onChange={ (event) => setEmail(event.target.value) }
        />
        <input
          type="password"
          placeholder="Insira a senha"
          data-testid="admin_manage__input-password"
          onChange={ (event) => setPassword(event.target.value) }
        />
        <select
          onChange={ (event) => setRole(event.target.value) }
          data-testid="admin_manage__select-role"
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
        </select>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ register }
          onClick={ adminSignUp }
        >
          Cadastrar
        </button>
      </form>
      {error && (
        <span
          data-testid="admin_manage__element-invalid_register"
        >
          Usuário ou email já cadastrado!
        </span>
      )}
      {tokenError && (
        <span
          data-testid="admin_manage__element-invalid_register"
        >
          Acesso restrito.

        </span>
      )}
      {userCreated && (
        <span>Usuário criado com sucesso!</span>
      )}
    </div>
  );
}

export default Admin;
