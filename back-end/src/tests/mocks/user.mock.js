const user = {
  id: 1,
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  password: "a4c86edecc5aee06eff8fdeda69e0d04",
  role: "administrator",
};

const login = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

const regCustomer = {
  id: 5,
  name: "Cliente ub eats",
  email: "ubeats@email.com",
  password: "3806a526e2c7af2ec712718c3de4d4a5",
  role: "customer",
}

const newCustomer = {
  name: "Cliente ub eats",
  email: "ubeats@email.com",
  password: "novasenha"
}

module.exports = { user, login, token, regCustomer, newCustomer }