//imports
const mysql = require("mysql");
require("dotenv/config"); //needed for the use of env variables

//we define the cfg of our db connection with the credentials provided
const connCfg = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPW,
  database: process.env.DBNAME,
};

//then we create a pool instead of a connection to bypass the timeout of the database
const pool = mysql.createPool(connCfg);

module.exports = pool; //we export the created pool for its future use in different parts of the code
