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
const tokenCustomer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjc0NTA1MTg1LCJleHAiOjE2NzQ1OTE1ODV9.BYgOyqgvkWfSJ7VpleC7Xh0RUQyzn9WV3CzifXpxfl0";

module.exports = { user, login, token, tokenCustomer }