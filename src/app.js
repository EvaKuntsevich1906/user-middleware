const express = require("express");
const bodyParser = require("body-parser");
const user = require("./controller/user.controller")
const app = express();

app.use(bodyParser.json());

app.use("/user", user);

app.get("/", (req, res) => {
    res.send("ок")
});

app.use((err, req, res, next) => {
    res.send(err.message);
})


module.exports = app;