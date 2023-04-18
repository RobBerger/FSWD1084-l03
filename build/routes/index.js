"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
function helloWorld(req, res, next) {
    res.send('Hello World');
}
function info(req, res, next) {
    res.send('Server is running at port 3000');
}
router.get('/', helloWorld);
router.get('/info', info);
exports.default = router;
