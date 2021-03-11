const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { docTitle: "Add Products" });
});
router.post("/add-product", (req, res, next) => {
  products.push(req.body);
  // console.log(products);
  res.redirect("/");
  // res.send(`<h1>${req.body.title} added successfully!</h1>`);
});

module.exports = { router: router, products: products };
