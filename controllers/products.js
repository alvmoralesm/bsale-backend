const conn = require("./../db/dbConn");
const catchAsync = require("./../utils/catchAsync");

module.exports.getProducts = catchAsync(async (req, res) => {
  const sql = "SELECT * FROM product"; //we select everything from product and we define it as a constant

  //we pass the string defined in the constant as a query and return the response as a JSON Array
  conn.query(sql, (err, result) => {
    if (err) res.status(500).send({ success: false });
    res.send(result);
  });
});

module.exports.getProductById = catchAsync(async (req, res) => {
  const producId = parseInt(req.params.id); //we assign the param passed in the url to a constant for cleaner use
  const sql = "SELECT * FROM product WHERE id=?"; //we select everything from the product table where id is equals to ?

  //we pass the string defined in the constant and the productId provided in the url (to return only the instance that matches the id) as a query and return the response as a JSON Object
  conn.query(sql, [producId], (err, result) => {
    if (err || !result) res.status(500).send({ success: false });
    res.send(result);
  });
});
