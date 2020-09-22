"use strict";
exports.__esModule = true;
var express = require("express");
var router_1 = require("./router");
var PORT = 3001;
var HOST = "localhost";
var app = express();
app.use('/', router_1.router);
app.listen(PORT, HOST, function () {
    console.log('app running ...');
});
