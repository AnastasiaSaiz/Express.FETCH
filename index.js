const { response } = require("express");
const express = require("express");
const servidor = express();

servidor.use(express.static("public"));
servidor.use(express.urlencoded({ extended: false }));
servidor.use(express.json());


let personas = [
    {
        nombre: "Graciela",
        apellido: "Herbosa",
        edad: "40",
    },
    {
        nombre: "Leyre",
        apellido: "Acasuso",
        edad: "26",
    },
    {
        nombre: "Maria",
        apellido: "Martinez",
        edad: "28",
    },
];

servidor.get("/personas", function (request, response) {
    response.send(personas);
});

servidor.get("/personas: nombre", function (request, response) {
    let nombre = request.params.nombre;
    for (let i = 0; i < personas.length; i++) {
        if (nombre === personas[i].nombre) {
            request.send(personas[i]);
        }
    }
})

//EJERCICIO 02//

servidor.post("/personas", function (request, response) {
    let persona = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        edad: request.body.edad,
    };
    personas.push(persona);
    response.send(personas);
});

//Ejercicio 03: PUT//

servidor.put("/personas", function (request, response) {
    let personaEditar = request.nombre.body;
    let nombre = request.body.nombreEdit;
    let apellido = request.body.apellidoEdit;
    let edad = request.body.edadEdit;
    for (let i = 0; i < personas.length; i++) {
        if (personaEditar === personas[i].nombre) {
            personas[i].nombre = nombre;
            personas[i].apellido = apellido;
            personas[i].edad = edad;

        }
    }
    response.send(personas);
})


//Ejercicio04: DELETE//

servidor.delete("/personas", function (request, response) {
    let nombre = request.body.nombre;
    let isDleted = false;
    for (let i = 0; i < personas.lenght; i++) {
        if (personas[i].nombre === nombre) {


            personas.splice(i, 1);
            isDleted = true;
        }
    }
    isDleted ? response.send(personas) : response.send({ mensaje: "no se ha borrado" });
})
servidor.listen(3000);