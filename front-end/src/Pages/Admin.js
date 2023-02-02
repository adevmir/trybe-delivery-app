import useSignup from '../hooks/useSignup';
import './Admin.css';
import NavBar from '../Components/NavBar';

function Admin() {
  const {
    setName, setEmail, setPassword, setRole,
    register, error, adminSignUp, tokenError, userCreated } = useSignup();

  return (
    <>
      <NavBar />
      <div className="out-div">
        <h1 className="admin-title"> Cadastrar novo usuário </h1>
      </div>
      <form className="admin-form">
        <label
          htmlFor="name"
          className="admin_manage__labels"
        >
          Nome
          <input
            id="name"
            type="name"
            placeholder="Insira um nome"
            data-testid="admin_manage__input-name"
            onChange={ (event) => setName(event.target.value) }
            className="admin_manage__input"
          />
        </label>
        <label
          htmlFor="email"
          className="admin_manage__labels"
        >
          Email
          <input
            id="email"
            type="email"
            placeholder="Insira um e-mail"
            data-testid="admin_manage__input-email"
            onChange={ (event) => setEmail(event.target.value) }
            className="admin_manage__input"
          />
        </label>
        <label
          htmlFor="password"
          className="admin_manage__labels"
        >
          Senha
          <input
            id="password"
            type="password"
            placeholder="Insira a senha"
            data-testid="admin_manage__input-password"
            onChange={ (event) => setPassword(event.target.value) }
            className="admin_manage__input"
          />
        </label>
        <label
          htmlFor="type"
          className="admin_manage__labels"
        >
          Tipo
          <select
            id="type"
            onChange={ (event) => setRole(event.target.value) }
            data-testid="admin_manage__select-role"
            className="admin_manage__select"
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Admin</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ register }
          onClick={ adminSignUp }
          className="admin_manage__button"
        >
          Cadastrar
        </button>
      </form>
      <div className="admin_manage__div-messages">
        {error && (
          <span
            data-testid="admin_manage__element-invalid-register"
            className="admin_manage__message"
          >
            Usuário ou email já cadastrado!
          </span>
        )}
        {tokenError && (
          <span
            data-testid="admin_manage__element-invalid-register"
            className="admin_manage__message"
          >
            Acesso restrito.

          </span>
        )}
        {userCreated && (
          <span
            className="admin_manage__message"

          >
            Usuário criado com sucesso!

          </span>
        )}
      </div>
    </>
  );
}

export default Admin;
