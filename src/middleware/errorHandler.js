// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Ocorreu um erro no servidor' });
};

module.exports = errorHandler;
