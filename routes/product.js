let express = require('express');
let Shop = require('../models/shop');
let Product = require('../models/product');
let Response = require('../utils/response');
let router = express.Router();

router.get("/list/:token", (req, res) => {
    Product.find({}, (err, products) => {
        res.status(200).json({status: 200, message: "ok", products: products});
    });
});

router.post("/create/:token", (req, res) => {
    let token = req.params.token;
    let productData = {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        action: req.body.action,
        thumbnail: req.body.thumbnail,
        shop: req.body.shop,
        date: new Date()
    };
    Product.create(productData, (err, product) => {
        if(err) res.status(400).json({status: 400, message: "Bad request"});
        res.status(201).json({status: 201, message: "ok", objectId: product._id});
    });
});

module.exports = router;