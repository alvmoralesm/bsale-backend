const mysql = require("mysql");
require("dotenv/config");

const connCfg = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPW,
  database: process.env.DBNAME,
};

const pool = mysql.createPool(connCfg);

module.exports = pool;
