const express = require("express");
const route = express.Router();
const {
    getAllUsers,
    getUsersByID,
    createUsers,
    updateById,
    deleteById
} = require("../service/user.service");

route.get("/", function (req, res) {
    const data = getAllUsers();
    res.send(data);
});

route.get("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const data = getUsersByID(id);
    res.send(data);
});

route.post("/", function (req, res) {
    const {
        name,
        surname,
        email,
        pwd
    } = req.body;
    const data = createUsers(name, surname, email, pwd);
    res.send(data)
})

route.put("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const {
        name,
        surname,
        email,
        pwd
    } = req.body;
    const data = updateById(id, name, surname, email, pwd)
    res.send(data)
});

route.delete("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const data = deleteById(id)
    res.send(data)
})

module.exports = {
    route
}