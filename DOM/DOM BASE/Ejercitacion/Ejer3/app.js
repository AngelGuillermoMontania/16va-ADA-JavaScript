/* const paises = ["Argentina", "Chile", "Mexico", "Peru"] */
/* 
Deberia recorrer el array y pintar una etiqueta p por cada uno
Deberia guardar ese punto de referencia, y poner las etiquetas en ese punto
*/

const div = document.querySelector(".contain-paises")

paises.forEach((pepito) => {
    div.innerHTML += `<p>${pepito}</p>`
})