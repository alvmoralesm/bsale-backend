const conn = require("./../db/dbConn");
const catchAsync = require("./../utils/catchAsync");

module.exports.getCategories = catchAsync(async (req, res) => {
  const sql = "SELECT * FROM category ORDER BY name ASC"; //we select everything from category and we define it as a constant

  //we pass the string defined in the constant as a query and return the response as a JSON Array
  conn.query(sql, (err, result) => {
    if (err) res.status(500).send({ success: false });
    res.send(result);
  });
});

module.exports.getCategoryById = catchAsync(async (req, res) => {
  const categoryId = parseInt(req.params.id); //we assign the param passed in the url to a constant for cleaner use
  const sql = "SELECT * FROM category WHERE id=? ORDER BY name ASC"; //we select everything from the category table where id is equals to ?

  //we pass the string defined in the constant and the categoryId provided in the url (to return only the instance that matches the id) as a query and return the response as a JSON Object
  conn.query(sql, [categoryId], (err, result) => {
    if (err || !result) res.status(500).send({ success: false });
    res.send(result);
  });
});

module.exports.getProductsByCategory = catchAsync(async (req, res) => {
  const categoryId = parseInt(req.params.id); //we assign the param passed in the url to a constant for cleaner use
  const orderBy = req.query.orderBy;
  const sort = req.query.sort;
  let sql = "SELECT * FROM product WHERE category=? ORDER BY name ASC"; //we inititalize the default query

  //we evaluate if the client passed paramateres in the query for the sorting if it's true, we pass the filters
  if (orderBy && sort) {
    sql = `SELECT * FROM product WHERE category=? ORDER BY ${orderBy} ${sort}`; //we poblate the sql string with a new query if the condition is true
  }

  //we pass the string defined in the constant and the categoryId provided in the url (to return only the product instances that matches the the categoryId passed in the url) as a query and return the response as a JSON Array
  conn.query(sql, [categoryId], (err, result) => {
    if (err || !result) res.status(500).send({ success: false });
    res.send(result);
  });
});
