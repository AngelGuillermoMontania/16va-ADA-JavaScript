/* 
generar y guardar el valor del prompt
atrapar la etiqueta correspondiente donde escribire lo que guarde del prompt
una vez atrapado, acceder a la propiedad innerText del nodo y modificarlo
*/

const nombre = prompt("Ingrese su nombre completo")

const etiquetaH5 = document.querySelector(".nombre")

etiquetaH5.innerText = `El nombre completo es ${nombre}`