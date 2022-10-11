const express = require("express");

const router = express.Router();

const {
  getRegistration,
  setRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/regController");

router.get("/", getRegistration);

router.post("/", setRegistration);

router.put("/:id", updateRegistration);

router.delete("/:id", deleteRegistration);

module.exports = router;
