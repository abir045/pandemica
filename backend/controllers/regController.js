const asyncHandler = require("express-async-handler");

const Registration = require("../models/regModel");

/// @desc get registration
// @route GET /api/registartion
// @access Private

const getRegistration = asyncHandler(async (req, res) => {
  const registrations = await Registration.find();

  res.status(200).json(registrations);
});

/// @desc sign up
// @route POST  /api/registartion
// @access Private

const setRegistration = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const reg = await Registration.create({
    name: req.body.name,
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

  await reg.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRegistration,
  setRegistration,
  updateRegistration,
  deleteRegistration,
};
