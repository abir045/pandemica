const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Sign Up a user for a positive antigen test
// route POST /api/users
//@access Public

const signUpUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check user exists

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash passowrd

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

// @desc authenticate user
// route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

// @desc get user data
// route GET /api/users/login
//@access Private

const getMe = asyncHandler(async (req, res) => {
  //const { _id, name, email } = await User.findById(req.user.id);

  //res.json({ message: "user data display" });

  res.status(200).json(req.user);
});

// Generate  jwt Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  signUpUser,
  loginUser,
  getMe,
};
