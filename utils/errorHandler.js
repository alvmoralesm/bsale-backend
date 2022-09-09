// util function that catches errors in JSON, currently returns only one error but more errors can be defined like auth errors, etc
module.exports.errorHandler = (err, req, res, next) => {
  //default err
  return res.status(500).json({ message: err.message });
};
