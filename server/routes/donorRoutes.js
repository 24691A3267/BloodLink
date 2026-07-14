const express = require("express");

const {
  getDonorsController
} = require("../controllers/donorController");


const router = express.Router();


router.get(
  "/donors",
  getDonorsController
);


module.exports = router;