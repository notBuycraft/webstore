let express = require('express');
let Shop = require('../models/shop');
let Product = require('../models/product');
let Response = require('../utils/response');
let router = express.Router();

router.get("/list/:token", (req, res) => {
    Shop.find({}, (err, shops) => {
        res.status(200).json({status: 200, message: "ok", shops: shops});
    });
});

router.post("/create/:token", (req, res) => {
    let token = req.params.token;
    let shopData = {
        name: req.body.name,
        owner: req.body.owner,
        desc: req.body.desc,
        date: new Date()
    };
    Shop.create(shopData, (err, shop) => {
        if(err) res.status(400).json({status: 400, message: "Bad request"});
        res.status(201).json({status: 201, message: "ok", objectId: shop._id});
    });
});

module.exports = router;