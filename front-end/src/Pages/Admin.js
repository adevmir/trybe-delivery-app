import { useState, useEffect } from 'react';
import useSignup from '../hooks/useSignup';
import apiAxios from '../services/axios';
import NavBar from '../Components/NavBar';
import './Admin.css';

function Admin() {
  const {
    setName, setEmail, setPassword, setRole,
    register, error, adminSignUp, tokenError, userCreated } = useSignup();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await apiAxios
        .get('/admin/manage', { headers: { authorization: token } });
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeUser = async (id, index) => {
    console.log(id);
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      await apiAxios.delete(`/admin/manage/${id}`, { headers: { authorization: token } });
      const newUsers = users.splice(index, 1);
      setUsers(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, [adminSignUp]);

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
      <table className="admin_users_list">
        <thead>
          <tr>
            <th> Item </th>
            <th> Nome </th>
            <th> E-mail </th>
            <th> Tipo </th>
            <th> Excluir </th>
          </tr>
        </thead>
        <tbody>
          { users.length > 0 && users.map((user, index) => (
            <tr
              key={ index }
            >
              <td
                data-testid={
                  `admin_manage__element-user-table-item-number-${index + 1}`
                }
                className="admin_users_text"
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index + 1}` }
                className="admin_users_text"
              >
                { user.name }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index + 1}` }
                className="admin_users_text"
              >
                { user.email }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index + 1}` }
                className="admin_users_text"
              >
                { user.role }
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
                  onClick={ () => removeUser(user.id, index) }
                  className="admin_manage__button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
