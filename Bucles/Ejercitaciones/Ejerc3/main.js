/* sumarImparesHasta(numero)
Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576 */

// const suma = 0, generar un bucle hasta llegar al numero (parametro) la idea es sumar solo los numeros impares.  retornar la suma de los impares desde 0 hasta numero

function sumarImparesHasta (numero) {
    const suma = 0;
    for(let index = 0; index <= numero; index += 1) {
        if(index % 2 !== 0) {
            suma += index
        }
    }
    // suma = 9
    return suma
}

console.log(sumarImparesHasta(   5  ))
//          sumarImparesHasta(numero)