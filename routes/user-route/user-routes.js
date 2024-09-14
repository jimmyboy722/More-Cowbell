//IMPORTS
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const router = express.Router();

// POST ROUTE FOR LOGIN
router.post("/login", async (req, res) => {
  try {
    // GET BODY
    const { username, password } = req.body;

    // MAKE SURE USER EXISTS
    const existingUser = await User.findOne({ where: { username } });
    if (!existingUser) {
      res.status(400).json({ message: "No user with username found" });
      return;
    }

    // BCRYPT PASSWORD TO GET PASSWORD IN DB
    if (!existingUser.checkPassword(password)) {
      res.status(401);
      return;
    }

    res.status(200).json({ message: "logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// GET ROUTE FOR  RENDERING LOGIN FORM
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ROUTE FOR RENDERING REGISTRATION FORM
router.get("/register", (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST ROUTE FOR USER REGISTRATION
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // CHECKING IF USER ALREADY EXISTS
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // NEW USER INSTANCE
    const newUser = new User({
      username,
      email,
      password,
    });
    // SAVING TO THE DATABASE
    await newUser.save();
    //CONFIRMATION OF SUCCESS
    res.status(201).json({ message: "New User successfully registered!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
