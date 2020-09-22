"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
router.use('/api', function (req, res) {
    res.json({
        status: 200,
        data: '124'
    });
});
router.use('/index', function (req, res) {
    res.setHeader('content-Type', "text/html");
    res.json({
        status: 200,
        data: '<h1>12555</h1>'
    });
});
