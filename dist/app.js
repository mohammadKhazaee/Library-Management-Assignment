"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes/routes"));
const database_1 = __importDefault(require("./utils/database"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use((0, body_parser_1.json)());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(routes_1.default);
database_1.default.sync({ force: true }).then((result) => {
    // console.log(result);
    app.listen(3000);
});
