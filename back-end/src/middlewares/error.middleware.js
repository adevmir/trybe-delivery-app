const mapError = require("../utils/mapError");

module.exports = (error, _req, res, _next) => {
  const [status, message] = mapError(error);
  return res.status(status).json({ message });
}