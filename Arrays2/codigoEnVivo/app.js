const edades = [15, 28, 68, 99, 4, 33, 77, 68, 82]
//  [99,4,33,77]
const nombres = ["Ada", "Angel", "Mel"]
//console.log("ORIGINAL", edades)



/* MAP */
const edadesMapeado = edades.map(elemento => elemento + 20)

const nombresMapeado = nombres.map(elemento => elemento + " Lovelace")

/* [].map(function (elemento) {
    modificacion que hare al array
}) */

// console.log("Edades Mapeado", edadesMapeado)
// console.log("Nombres Mapeado", nombresMapeado)




/* FILTER */

const edadesFiltrado = edades.filter(function (elemento) {
    return elemento > 50
})

const nombresFiltrado = nombres.filter(function (elemento) {
    return elemento === "Ada"
})

// console.log(edadesFiltrado)
// console.log(nombresFiltrado)





/* ForEach */
let count;
edades.forEach(function (elemento) {
    if(elemento)
})




/* Find Retorna el valor 
[5, 7, 99, 34, 54, 2, 12]
*/   
const edadBuscada = edades.find(elemento => elemento > 70)
// console.log(edadBuscada)


/* FindIndex    Retorna el indice*/
const indiceEdadBuscada = edades.findIndex(elemento => elemento > 70)
//console.log(indiceEdadBuscada)


/* includes     retorna un booleano */
const edadIncludes = edades.includes(22)
// console.log(edadIncludes)



let num = array[0]
for (let i = 1; i < array.length; i++) {
    if(array[i] < num) {
        num = elemento
    }
}











/* DESTRUCTIVOS */


/* REVERSE */
edades.reverse()
// console.log(edades)



/* SPLICE */
edades.splice(2, 3, 1200)

/* [
    82, 68,1200,
    99, 68, 28, 15
  ] */
// console.log(edades)


edades.push(88)
edades.pop()
edades.unshift(77)
edades.shift()


console.log(edades)
const sumaEdades = edades.reduce((acumulador, valorActual, indice) => {
    console.log("ACUMULADOR",acumulador)
    console.log("VALOR ACTUAL",valorActual)
    console.log("INDICE", indice)
    return acumulador + valorActual
})
// console.log(sumaEdades)





/* 
    Se le dice funcion callback, a una funcion anonima que se pasa como parametro
*/