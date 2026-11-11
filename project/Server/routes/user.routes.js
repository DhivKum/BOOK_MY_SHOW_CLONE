const express = require("express");
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();

//SignUp Route
userRouter.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({
      email: req.body.email,
    });
    if (userExists) {
      res.send({
        success: false,
        message: "User already exists with the email",
      });
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPwd = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashPwd;

    const newUser = await User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Login Route
userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      res.send({
        success: false,
        message: "User doesn't registered, Please register!",
      });
    }

    //Check for the password, for that we have to get the salt then hash it so that will get the hashed password.

    const validPwd = await bcrypt.compare(req.body.password, user.password);

    if (!validPwd) {
      res.send({
        success: false,
        message: "Sorry! Incorrect Password!",
      });
    }

    res.send({
      success: true,
      message: "You have successfully logged in!",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = userRouter;
