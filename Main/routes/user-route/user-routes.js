//IMPORTS
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const router = express.Router();

//POST ROUTE FOR USER REGISTRATION
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // CHECKING IF USER ALREADY EXISTS
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // HASHING THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    // NEW USER INSTANCE
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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
