//setting required const
const express = require("express");
const path = require('path')

const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const {engine, create} = require('express-handlebars')
const PORT = process.env.PORT || 3001;

//setting app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));

app.use(routes);
app.get("/", (req, res) => {
  res.render('login', {
      name: req.params.name,
      isLoggedIn: Math.random() < 0.5
  });
})

//making Sequelize work with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
