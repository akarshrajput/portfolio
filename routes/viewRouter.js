const express = require("express");
const viewController = require("./../controllers/viewController");

const router = express.Router();

router.get("/", viewController.portfolio);

module.exports = router;
