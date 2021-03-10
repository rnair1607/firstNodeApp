const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
  //   console.log(req.body);
  res.redirect("/");
  // res.send(`<h1>${req.body.title} added successfully!</h1>`);
});

module.exports = { router: router };
