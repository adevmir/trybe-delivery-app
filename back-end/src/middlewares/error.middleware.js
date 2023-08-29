const mapError = require('../utils/mapError');

module.exports = (error, _req, res, _next) => {
  let [status, message] = mapError(error);
  if (Number.isNaN(Number(status))) {
    message = status;
    status = 500;
  }
  return res.status(status).json({ message });
};