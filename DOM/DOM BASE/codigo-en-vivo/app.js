/* const h1 = document.getElementById("saludo") */
// El id (identificador unico) solo tendriamos 1 elemento con ese id

/* const h1 = document.getElementsByClassName("saludo") */
// Aca podriamos tener mas de un Nodo con el mismo nombre de clase, entonces este metodo nos devuelve un array

/* 
const h1 = document.getElementsByTagName("p") 
Tambien puede tener varios elementos con mismo tagname por eso es un array
*/




//const h1 = document.querySelector("#saludo")

/* const h1 = document.querySelector(".saludo")
const saludo = document.querySelectorAll(".saludo") */

/* const etiquetas = document.querySelector("p")
 */





/* const div = document.querySelector(".saludo")

const h1 = document.createElement("h1")
h1.innerText = "Hola"

div.appendChild(h1) */


/* const div = document.querySelector(".saludo")

div.innerHTML = "<h1>Hola</h1>"

div.style.color = "#FF11FF" */
const body = document.querySelector("body")
body.style.backgroundColor = "grey"


const productos = [
    {
        name: "Aro de basket",
        price: 5000,
        marca: "Reebok",
        oferta: true
    },
    {
        name: "Patines",
        price: 10000,
        marca: "Nike",
        oferta: false
    },
    {
        name: "Red de arco",
        price: 2000,
        marca: "Adidas",
        oferta: true
    },
]

const containProducts = document.querySelector(".container-products")

const productosFiltrados = productos.filter(elem => elem.marca === "Adidas")

productos.forEach(product => {
    containProducts.innerHTML += `<div>
        <h2>Nombre: ${product.name}</h2>
        <img src=${product.img}>
        <p>Precio: ${product.price}</p>
        <p>Marca: ${product.marca}</p>
        <p>${product.oferta ? "Esta en oferta" : "No esta en oferta"}</p>
    </div>`
})