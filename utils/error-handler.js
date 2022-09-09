function errorHandler(err, req, res, next) {
  //default err
  return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;
