"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function helloWorld(req, res, next) {
    res.send('Hello World');
}
function info(req, res, next) {
    res.send('Server is running at port 3000');
}
app.use('/info', info);
app.use('/', helloWorld);
app.listen(3000);
