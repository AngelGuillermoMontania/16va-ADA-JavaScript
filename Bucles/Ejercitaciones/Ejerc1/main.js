/* obtenerIndice(valor, array)
Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [150, 4, 12, 34, 54, 2, 12]) // -1 */

//recorrer el array, y return el indice en donde se encuentre el valor que me pasan como parametro, si no -1

function obtenerIndice(valor, array) {
    for (let index = 0; index < array.length; index += 1) {
        if(array[index] === valor) {
            return index // 2
        }
    }
    return -1
}


console.log(obtenerIndice(12,   [5, 7, 12, 34, 54, 2, 12]))
//          obtenerIndice(valor,        array             )


console.log(obtenerIndice(83,    [150, 4, 12, 34, 54, 2, 12]))
//          obtenerIndice(valor,       array                 )