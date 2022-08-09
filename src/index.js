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
    



});

//4 servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
  
    });