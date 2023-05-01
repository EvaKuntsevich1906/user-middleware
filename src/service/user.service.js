const fs = require("fs");
const path = "./storage/storage.json";


const getAllUsers = () => {
    const arr = JSON.parse(fs.readFileSync(path))
    return arr
}


const getUsersByID = (id) => {
    const arr = JSON.parse(fs.readFileSync(path));
    const filterByID = arr.filter(el => el.id == id);
    return filterByID

}

const createUsers = (name, surname, email, pwd) => {
    const arr = JSON.parse(fs.readFileSync(path));
    const obj = { id: arr.length + 1, name, surname, email, pwd}

    arr.push(obj);
    fs.writeFileSync(path, JSON.stringify(arr))
    return arr

}

const updateUsersByID = (id, name, surname, email, pwd) => {
    const arr = JSON.parse(fs.readFileSync(path));
    const filterByID = arr.filter(el => el.id != id);

    if (arr.length == filterByID.length) throw new Error("id не найден");

    const obj = {id,  name, surname, email, pwd}

    filterByID.push(obj);
    fs.writeFileSync(path, JSON.stringify(filterByID));
    return filterByID

}

module.exports = {
    getAllUsers,
    getUsersByID,
    createUsers, 
    updateUsersByID
}