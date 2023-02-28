// https://pokeapi.co/api/v2/pokemon


/* PARAMETROS */
// BACK  ---> /pokemon/:id
// FRONT ---> https://pokeapi.co/api/v2/pokemon/1

/* QUERYS */
// BACK  ---> /pokemon?offset=num1&limit=num2
// Front ---> https://pokeapi.co/api/v2/pokemon?offset=40&limit=60

/* const $inputSearch = document.querySelector("#input-search")
const $btnSearch = document.querySelector("#btn-search")

$btnSearch.addEventListener("click", () => {
    fetch(`https://rickandmortyapi.com/api/character?name=${$inputSearch.value}`)
        .then(response => response.json())
        .then(result => {
            $containCards = ""
            result.result.forEach(element => {
                $containCards += `<div class="card"><div>`
            });
        })
}) */


/* JSON SERVER   GET, POST, PUT, DELETE */
/* 
GET -----> MOSTRAR
POST ----> CREAR
DELETE --> ELIMINA
PUT -----> MODIFICA
*/

//  GET  --- Por default fetch ya viene con el metodo get configurado
/* fetch("http://localhost:3000/users", {
    method: "GET"
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)) */



// POST
/* const $formCreate = document.querySelector("#form-create")
const $inputEmailCreate = document.querySelector("#email-create")
const $inputTelCreate = document.querySelector("#tel-create")

$formCreate.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
            email: $inputEmailCreate.value,
            telefono: $inputTelCreate.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log("SE CREO CON EXITO"))
        .catch(error => console.log(error))
}) */


/* DELETE */
/* const $btnDelete = document.querySelector("#btn-delete")
$btnDelete.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users/1", {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}) */



/* PUT */
const $btnEdit = document.querySelector("#btn-edit")
$btnEdit.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users/3", {
        method: "PUT",
        body: JSON.stringify({
            email: "angelguillermomontania@gmail.com",
            telefono: $inputTelefono.value
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})