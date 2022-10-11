const asyncHandler = require("express-async-handler");

const Registration = require("../models/regModel");
const User = require("../models/userModel");

/// @desc get registration
// @route GET /api/registartion
// @access Private

const getRegistration = asyncHandler(async (req, res) => {
  const registrations = await Registration.find({ user: req.user.id });

  res.status(200).json(registrations);
});

/// @desc sign up
// @route POST  /api/registartion
// @access Private

const setRegistration = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const reg = await Registration.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(reg);
});

/// @desc Update registration
// @route PUT /api/registartion/:id
// @access Private

const updateRegistration = asyncHandler(async (req, res) => {
  const reg = await Registration.findById(req.params.id);

  if (!reg) {
    res.status(400);
    throw new Error("record not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the login user matches the reg user
  if (reg.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const updatedReg = await Registration.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedReg);
});

/// @desc Delete registration
// @route DELETE /api/registartion/:id
// @access Private

const deleteRegistration = asyncHandler(async (req, res) => {
  const reg = await Registration.findById(req.params.id);

  if (!reg) {
    res.status(400);
    throw new Error("record not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the logged in  user matches the reg user
  if (reg.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  await reg.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRegistration,
  setRegistration,
  updateRegistration,
  deleteRegistration,
};
