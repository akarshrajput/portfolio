const express = require("express");
const path = require("path");
const pug = require("pug");
const messageRouter = require("./routes/messageRouter");
const viewRouter = require("./routes/viewRouter");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// ROUTES
app.use("/", viewRouter);
app.use("/api/v1/messages", messageRouter);

module.exports = app;
