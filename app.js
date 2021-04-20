const express = require("express");
const app = express();
// Usando express.json para pegar dados de formulário enviados pelo usuário
// Indica para Express que usaremos os dados em JSON
app.use(express.json());

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

// http://localhost:3000/usuarios
app.post("/usuarios", (request, response) => {
    const {nome, sobrenome} = request.body;
    usuarios.push({nome, sobrenome});
    return response.json({nome, sobrenome});
})

// http://localhost:3000/usuarios/alexandre
app.put("/usuarios/:nome", (request, response) => {
    const {nome} = request.params;
    const {sobrenome} = request.body;
    
    return response.json({nome, sobrenome});
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
})