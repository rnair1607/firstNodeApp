const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log("shop.js " + JSON.stringify(adminData.products));
  // res.sendFile(path.join(rootDir, "views", "shop.pug"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = { router: router };
