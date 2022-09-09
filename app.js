const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./utils/error-handler");
require("dotenv/config");

const port = 3001;
const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port: ${port}`));
