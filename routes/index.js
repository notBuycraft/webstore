let express = require('express');
let Shop = require('../models/shop');
let Response = require('../utils/response');
let router = express.Router();

router.use("/shop", require("./shop"));
router.use("/product", require("./product"));

module.exports = router;