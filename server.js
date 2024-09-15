//setting required const
const express = require("express");
const path = require("path");

const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const { engine, create } = require("express-handlebars");
const PORT = process.env.PORT || 3001;

//setting app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up views
const handlebarsEngine = engine({
  defaultLayout: "main",
  helpers: {
    lengthGreaterThan: function (array, length, options) {
      if (array.length > length) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    },
    randomValues: function (array, count, options) {
      if (!Array.isArray(array)) {
        return "";
      }

      const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
      const randomItems = shuffled.slice(0, count); // Get the specified number of random items

      // ITERATE THROUGH THE RANDOM ITEMS AND RENDER THE BLOCK FOR EACH
      let result = "";
      for (let i = 0; i < randomItems.length; i++) {
        result += options.fn(randomItems[i]); // Render the block for each random item
      }

      return result;
    },
  },
});
app.engine("handlebars", handlebarsEngine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

const flashcards = [
  {
    id: 0,
    photo: "/assets/images/durham-cattle.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Durham Cattle",
    Origin: "Northeast England",
    CoatType: "Short",
    Color: "Red and White",
    AvgWeight: "1300 lbs",
    Purpose: "Multipurpose",
  },
  {
    id: 1,
    photo: "/assets/images/bull-Black-Angus.webp",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Angus",
    Origin: "Scotland",
    CoatType: "Short",
    Color: "Black",
    AvgWeight: "1200 lbs",
    Purpose: "Meat",
  },
  {
    id: 2,
    photo: "/assets/images/brahman.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Brahman Cattle",
    Origin: "India",
    CoatType: "Short",
    Color: "Light to dark Gray",
    AvgWeight: "2000 lbs",
    Purpose: "Meat",
  },
  {
    id: 3,
    photo: "/assets/images/longhorn_cattle.jpg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Texas Longhorn",
    Origin: "USA",
    CoatType: "Short",
    Color: "Black & Red",
    AvgWeight: "1100 lbs",
    Purpose: "High Fertility",
  },
  {
    id: 4,
    photo: "/assets/images/Watusi.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Watusi",
    Origin: "East Africa",
    CoatType: "Short",
    Color: "Brown,Red,black",
    AvgWeight: "1100 lbs",
    Purpose: "Multipurpose",
  },
  {
    id: 5,
    photo: "/assets/images/scottish highland.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Scottish Highland",
    Origin: "Scottland",
    CoatType: "Thick Double Coat",
    Color: "Red, Ginger, Black",
    AvgWeight: "1150 lbs",
    Purpose: "Multipurpose",
  },
  {
    id: 6,
    photo: "/assets/images/piedmontese.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Piedmontese",
    Origin: "Italy",
    CoatType: "Short",
    Color: "White",
    AvgWeight: "1300 lbs",
    Purpose: "Meat",
  },
  {
    id: 7,
    photo: "/assets/images/holestein.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Holstien",
    Origin: "Holland",
    CoatType: "Short",
    Color: "Black and White",
    AvgWeight: "1500 lbs",
    Purpose: "Milk",
  },
  {
    id: 8,
    photo: "/assets/images/Dexter.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Dexter",
    Origin: "Southern Ireland",
    CoatType: "Short Coat",
    Color: "Black",
    AvgWeight: "800 lbs",
    Purpose: "Meat , milk",
  },
  {
    id: 9,
    photo: "./assets/images/gelbvieh.jpeg",
    title: "A beautiful bovine",
    caption: "Guess this cow!",
    Name: "Gelbuieh",
    Origin: "Baravia , Germany",
    CoatType: "Short Coat",
    Color: "Red",
    AvgWeight: "1382 lbs",
    Purpose: "Meat, milk",
  },
];

// Start with '/'
app.use(routes);
app.get("/", (req, res) => {
  res.redirect("/user/login");
});

app.get("/quiz", (req, res) => {
  let randomIndex = Math.floor(Math.random() * flashcards.length);
  let randomFlashcard = flashcards[randomIndex];
  res.render("quiz", {
    loggedIn: true,
    flashcards: flashcards,
    flashcard: randomFlashcard,
  });
});

//making Sequelize work with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
