const express = require("express");
const route = express.Router();
const {
    getAllUsers,
    getUsersByID,
    createUsers,
    updateUsersByID
} = require("../service/user.service");

route.get("/", (req, res) => {
    const data = getAllUsers();
    res.send(data);
});

route.get("/:id", (req, res) => {
    const {
        id
    } = req.params;
    const data = getUsersByID(id);
    res.send(data);
});

route.post("/", (req, res) => {
    const { name,  surname, email, pwd } = req.body;
    const data = createUsers(name, surname, email, pwd);
    res.send(data);

});

route.put("/:id", (req, res) => {
    const {
        id
    } = req.params;
    const { name,  surname, email, pwd } = req.body;

    const data = updateUsersByID(id, name, surname, email, pwd);
    res.send(data)
});



module.exports = route;