//setting required const
const express = require("express");

const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = require("handlebars")

//setting app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars)

app.use(routes);

//making Sequelize work with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
