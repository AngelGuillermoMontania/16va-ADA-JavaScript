/* repetir(valor, cantidad)
Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // [] */

// Hacer un bucle tanta cantidad que me pasen en el parametro, y en un nuevoArray ir agregando lo que me pasen como valor

function repetir (valor, cantidad) {
    let nuevoArray = []
    for(let index = 0; index < cantidad; index += 1) {
        nuevoArray.push(valor)
    }
    return nuevoArray
}

/* console.log(repetir('lovelace',      3  )) */
//                 (valor     , cantidad)

console.log(repetir('a'       ,      5  ))
//                 (valor     , cantidad)

console.log(repetir('html',    0    ))
//                  (valor, cantidad)