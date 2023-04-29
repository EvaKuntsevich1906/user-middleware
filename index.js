const Logger = require("nodemon/lib/utils/log");
const {app} = require("./src/app"); 

const port = 6000; 



app.listen(port, function () {
    console.log("Сервер работает корректно");
})

