const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  // console.log(products);
  res.redirect("/");
  // res.send(`<h1>${req.body.title} added successfully!</h1>`);
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  // console.log("shop.js " + JSON.stringify(adminData.products));
  // res.sendFile(path.join(rootDir, "views", "shop.pug"));
  // const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
