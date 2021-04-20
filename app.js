const express = require("express");
const app = express();

let usuarios = [
    {nome: "Alexandre", sobrenome: "Pedro"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send('Olá mundo!');
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    // console.log(response);
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
})