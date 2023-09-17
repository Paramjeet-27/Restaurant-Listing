const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("restaurant_data", "admin", "bTu0k22c", {
  host: "mysql-145566-0.cloudclusters.net",
  port: 10143,
  dialect: "mysql",
});

const restaurant = sequelize.define("restaurants", {
  res_name: DataTypes.TEXT,
  address: DataTypes.TEXT,
  email: DataTypes.TEXT,
  phone: DataTypes.INTEGER,
  dishes: DataTypes.TEXT,
});

module.exports = { restaurant, sequelize };
