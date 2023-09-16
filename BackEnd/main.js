const cors = require("cors");
const { sequelize } = require("./models/model");
const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use("/", routes);

const mysqlConnect = () => {
  return sequelize.authenticate();
};

mysqlConnect()
  .then((data) => {
    app.listen("8888", () => {
      console.log("express server started with mysql");
    });
  })
  .catch((err) => {
    console.log(err);
  });
