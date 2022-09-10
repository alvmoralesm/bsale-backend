//imports
const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  searchProduct,
} = require("./../controllers/products"); //we import the controllers for use in its corresponding route

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/search", searchProduct);

module.exports = router; //we export the router to be used in the entry point of our app (app.js)
