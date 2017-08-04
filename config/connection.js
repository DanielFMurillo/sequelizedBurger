var Sequelize = require("sequelize");

var sequelize = new Sequelize("burger_db", "root", "root01",{
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;