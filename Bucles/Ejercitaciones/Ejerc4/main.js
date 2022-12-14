/* 
crearCuentaRegresiva(numeroInicial)
Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

crearCuentaRegresiva(3) // [3, 2, 1, 0]
crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]
 */

// crear nuevoArray, e iterar el numeroInicial e ir pusheando esto al nuevoArray

/* function crearCuentaRegresiva(numeroInicial) {
    const arr = []
    for(let i = numeroInicial; i >= 0; i--) {
        arr.push(i)
    }
    return arr
} */

const crearCuentaRegresiva = numeroInicial => {
    const arr = []
    for(let i = numeroInicial; i >= 0; i--) {
        arr.push(i)
    }
    return arr
}

console.log(crearCuentaRegresiva(3))
console.log(crearCuentaRegresiva(5))