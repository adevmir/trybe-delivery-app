module.exports = (error, _req, res, _next) => {
  const { message } = error;
  return res.status(500).json({ message });
}