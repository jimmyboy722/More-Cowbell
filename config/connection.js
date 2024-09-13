//setting Sequelize
const Sequelize = require("sequelize");

//making .ENV necessary
require("dotenv").config();

//designating Sequelize and .env info
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

// FOR TESTING THE DATABASE CONNECTION
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database is successful!");
  })
  .catch((err) => {
    console.error("Unable to establish connection :(", err);
  });

//applying Sequelize
module.exports = sequelize;
