fetch("/personas")
    .then(function cogerRespuesta(respuesta) {
        return respuesta.json();

    })
    .then(function cogerDatos(datos) {
        let mensaje = "";
        let options = "";
        for (let i = 0; i < datos.lenght; i++) {
            options += `<option vale="${datos[i].nombre}">${datos[i].nombre}</option>`
            mensaje += `<h1>${datos[i].nombre} ${datos[i].apellido}</h1>
        <p>Edad: ${datos[i].edad}</p>`;
        }
        document.getElementById("div1").innerHTML = mensaje;
        document.getElementById("select").innerHTML = options;
        console.log(datos);
    });

//Ejercicio 02: añadimos una función para que coja los datos del input//

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);

    let persona = {
        nombre,
        apellido,
        edad,
    };

    console.log(nombre, apellido, edad);
    fetch("/personas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
    })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let mensaje = "";
            let options = "";
            for (let i = 0; i < datos.lenght; i++) {
                options += `<option vale="${datos[i].nombre}">${datos[i].nombre}</option>`
                mensaje += `<h1>${datos[i].nombre} ${datos[i].apellido}</h1>
             <p>Edad: ${datos[i].edad}</p>`;
            }
            document.getElementById("div1").innerHTML = mensaje;
            document.getElementById("select").innerHTML = options;
            console.log(datos);

        });
}

//Ejercicio 03//
function change(event) {
    let nombre = event.target.value;
    fetch(`/personas/${nombre}`).then(function (respuesta) {
        return respuesta.json();
    })
        .then(function (datos) {
            document.getElementById("Editarnombre").value = datos.nombre;
            document.getElementById("Editarapellido").value = datos.apellido;
            document.getElementById("Editaredad").value = datos.edad;

        });
}

function editar() {
    let personaEditar = document.getElementById("select").value
    let nombre = document.getElementById("Editarnombre").value
    let apellido = document.getElementById("Editarapellido").value;
    let edad = parseInt(document.getElementById("Editaredad").value);

    let persona = {
        nombre: personaEditar,
        nombreEdit: nombre,
        apellidoEdit: apellido,
        edadEdit: edad,
    };

    fetch("/personas", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona),
    })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let mensaje = "";
            let options = "";
            for (let i = 0; i < datos.lenght; i++) {
                options += `<option vale="${datos[i].nombre}">${datos[i].nombre}</option>`
                mensaje += `<h1>${datos[i].nombre} ${datos[i].apellido}</h1>
             <p>Edad: ${datos[i].edad}</p>`;
            }
            document.getElementById("div1").innerHTML = mensaje;
            document.getElementById("select").innerHTML = options;
            console.log(datos);
        });

}

//Ejercicio04//

function eliminar() {
    let nombre = document.getElementById("select").value
    let persona = {
        nombre: nombre,
    };
    fetch("/personas", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persona),
    })
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            let mensaje = "";
            let options = "";
            for (let i = 0; i < datos.lenght; i++) {
                options += `<option vale="${datos[i].nombre}">${datos[i].nombre}</option>`
                mensaje += `<h1>${datos[i].nombre} ${datos[i].apellido}</h1>
         <p>Edad: ${datos[i].edad}</p>`;
            }
            document.getElementById("div1").innerHTML = mensaje;
            document.getElementById("select").innerHTML = options;
            console.log(datos);
        });

}