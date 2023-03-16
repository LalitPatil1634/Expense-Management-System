const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

// router object
const router = express.Router();

// routes
// add transection POST method
router.post("/add-transection", addTransection);

// edit transection POST method
router.post("/edit-transection", editTransection);

// Delete transection POST method
router.post("/delete-transection", deleteTransection);

// get transection
router.post("/get-transection", getAllTransection);

module.exports = router;
