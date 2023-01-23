module.exports = (status, message) => {
  throw new Error(`${status}/${message}`);
};