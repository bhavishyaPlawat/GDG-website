const express = require("express");
const connectDb = require("../src/db/db");

connectDb();
const app = express();

module.exports = app;
