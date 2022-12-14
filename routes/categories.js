//imports
const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  getProductsByCategory,
} = require("./../controllers/categories"); //we import the controllers for use in its corresponding route

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.get("/:id/products", getProductsByCategory);

module.exports = router; //we export the router to be used in the entry point of our app (app.js)
