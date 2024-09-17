//setting Sequelize
const { Sequelize } = require("sequelize");

//making .ENV necessary
require("dotenv").config();

//designating Sequelize and .env info
const sequelize = new Sequelize({
  host: "localhost",
  port: "5432",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

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
