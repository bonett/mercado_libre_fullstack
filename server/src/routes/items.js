const express = require("express");
const router = express.Router();
const { getItemDetailsById, getItemByParam } = require("../controllers/item");

// ENDPOINTS
router.route("/").get(getItemByParam);
router.route("/:id").get(getItemDetailsById);

module.exports = router;
