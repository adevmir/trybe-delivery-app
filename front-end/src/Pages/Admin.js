import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import apiAxios from '../services/axios';

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
          data-testid="admin_manage__element-invalid-register"
        >
          Usuário ou email já cadastrado!
        </span>
      )}
      {tokenError && (
        <span
          data-testid="admin_manage__element-invalid-register"
        >
          Acesso restrito.
        </span>
      )}
      {userCreated && (
        <span>Usuário criado com sucesso!</span>
      )}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
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
              >
                { index + 1 }
              </td>
              <td data-testid={ `admin_manage__element-user-table-name-${index + 1}` }>
                { user.name }
              </td>
              <td data-testid={ `admin_manage__element-user-table-email-${index + 1}` }>
                { user.email }
              </td>
              <td data-testid={ `admin_manage__element-user-table-role-${index + 1}` }>
                { user.role }
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
                  onClick={ () => removeUser(user.id, index) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
