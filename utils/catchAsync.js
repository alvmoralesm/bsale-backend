// util function for catching an asynchronous error, when catched it goes to the next middleware
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
