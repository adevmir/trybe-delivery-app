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

const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjc0NTA1MDIxLCJleHAiOjE2NzQ1OTE0MjF9.1ygycxMhjZxMbLcxf0anTMdaPeer-lj5hgKGGSNnr30";
const tokenSeller = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0sImlhdCI6MTY3NDUwNTIzNywiZXhwIjoxNjc0NTkxNjM3fQ.QC2ABiso-FeTN3uCy23OTVj8MFIe1pd-gWwO-VDnPRw";
const tokenCustomer = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjc0NTA1MTg1LCJleHAiOjE2NzQ1OTE1ODV9.BYgOyqgvkWfSJ7VpleC7Xh0RUQyzn9WV3CzifXpxfl0";


const seller = {
  id: 2,
  name: "Fulana Pereira",
  email: "fulana@deliveryapp.com",
  password: "3c28d2b0881bf46457a853e0b07531c6",
  role: "seller",
}

module.exports = { 
  user,
  login,
  tokenAdmin,
  tokenSeller,
  tokenCustomer,
  seller
}

