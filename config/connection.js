//setting Sequelize
const { Sequelize } = require("sequelize");

//making .ENV necessary
require("dotenv").config();

//designating Sequelize and .env info
let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

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
