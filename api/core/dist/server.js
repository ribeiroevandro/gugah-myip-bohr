"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello!");
});
app.get("/my-ip", function (req, res) {
    var forwardedIpsStr = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(forwardedIpsStr);
});
if (!module.parent) {
    app.listen(PORT);
    console.log(`Express started on port ${PORT}`);
}
exports.default = app;
