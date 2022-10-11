const express = require("express");

const router = express.Router();

const {
  getRegistration,
  setRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/regController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getRegistration);

router.post("/", protect, setRegistration);

router.put("/:id", protect, updateRegistration);

router.delete("/:id", protect, deleteRegistration);

module.exports = router;
