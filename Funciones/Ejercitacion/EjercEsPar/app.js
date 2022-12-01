/* Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0 */

//function esPar (num) {
    /* const esTrueOFalse = num % 2 === 0
    //       4            4 % 2 === 0
    //       4              0  === 0
    // const esTrueOFalse = true
    return esTrueOFalse */

  //  return num % 2 === 0
//}

// Cuando es un solo parametro no me hace falta usar parentesis
// Si solo tengo un return, no hace falta colocar llaves
const esParFlecha = num => num % 2 === 0














function esInpar (num) {
    /* const esTrueOFalse = num % 2 === 0
    //       4            4 % 2 === 0
    //       4              0  === 0
    // const esTrueOFalse = true
    return esTrueOFalse */

    return num % 2 === 1
    /* return num % 2 !== 0 */
}

const esInparFlecha = num => num % 2 !== 0
/* const esInparFlecha = num => num % 2 === 1 */