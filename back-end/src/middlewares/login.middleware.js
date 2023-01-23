module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const message = 'All fields must be filled';
  if (!email || !password) return res.status(400).json({ message });
  next();
}