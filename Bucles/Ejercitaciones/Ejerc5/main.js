/* 
invertir(array)
Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.

invertir([1, 2, 3]) // [3, 2, 1]
invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

 */

const invertir = array => {
    const nuevoArr = []
    for(let i = array.length - 1; i >= 0; i--) {
        nuevoArr.push(array[i])
    }
    return nuevoArr
}



console.log(invertir([1, 2, 3]))
//                     array


console.log(invertir([5, 7, 99, 34, 54, 2, 12]))
//                     array