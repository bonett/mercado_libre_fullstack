const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items");

router.route("/").get(ItemsController.index);

module.exports = router;
