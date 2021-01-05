"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_js_1 = require("./helpers/index.js");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.config({ path: path_1["default"].resolve(__dirname, '../../.env') });
var app = express_1["default"]();
var port = process.env.PORT || 80;
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../../build')));
app.listen(port, function () { return console.log("App listening on port " + port); });
var attrs = ['str', 'agi', 'int'];
app.get('/generate', function (req, res) {
    var result = index_js_1.getResult(attrs);
    res.json(result);
});
