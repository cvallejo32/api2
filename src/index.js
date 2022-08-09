// 1 import
const express = require("express");
const app = express();
const PORT = 4000;

const { users } = require("./database/db");

const { v4: uuid } =require("uuid");

//2 middlewares
app.use(express.json());

//3 routes
app.get("/", (req,res) => {
    return res.json({
        ok: true,
        msg: "ususarios obtenidos",
        data: users

    });
});

app.post("/", (req, res) => {

    const ( user_name = req.body)

    const user = {
        id: uuid(),
        user_name: user_name,
        password: password,
    }

    users.push(user);

    return res.json({
        ok: true,
        msg: "Usuario creado",
        data; user
    })



});

//4 servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
  
    });