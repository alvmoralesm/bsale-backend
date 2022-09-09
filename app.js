//imports & utils
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./utils/errorHandler");
require("dotenv/config"); //needed for the use of environment variables

//variable/constant definition
const port = 3001;
const api = process.env.API_URL;

//middlewares used before-routes, so considering the cycle this loads first then the routes
app.use(cors()); //cors is being used as a middleware
app.options("*", cors()); //enables cors pre-flight
app.use(express.json()); //for parsing JSON responses
app.use(morgan("tiny")); //to display types of requests
app.use(errorHandler); //we pass the error handler previously built as a middleware

//routes
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");

app.use(`${api}/products`, productRoutes);
app.use(`${api}/categories`, categoryRoutes);

//server listening in the defined port, specified in the variable/constant declaration section
app.listen(port, () => console.log(`Listening on port: ${port}`));
