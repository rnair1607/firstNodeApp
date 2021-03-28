// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "Y2k@1997",
// });

// module.exports = pool.promise();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Y2k@1997", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
