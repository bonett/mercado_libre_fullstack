const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/item");

router.route("/").get(ItemsController.getItemByQuery);

module.exports = router;
