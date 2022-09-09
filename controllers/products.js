const conn = require("./../db/dbConn");
const catchAsync = require("./../utils/catchAsync");

module.exports.getProducts = catchAsync(async (req, res) => {
  const sql = "SELECT * FROM product";

  conn.query(sql, (err, result) => {
    if (err) res.status(500).send({ success: false });
    res.send(result);
  });
});

module.exports.getProductById = catchAsync(async (req, res) => {
  const producId = parseInt(req.params.id);
  const sql = "SELECT * FROM product WHERE id=?";

  conn.query(sql, [producId], (err, result) => {
    if (err || !result) res.status(500).send({ success: false });
    res.send(result);
  });
});
